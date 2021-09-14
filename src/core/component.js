export default class Component {
  $target;
  $props;
  $state;

  constructor($target, $props) {
    this.$target = $target;
    this.$props = $props;
    this.init();
    this.setEvent();
    this.render();
  }

  init() {};
  mounted() {};
  template() { return ''; };
  render() {
    this.$target.innerHTML = this.template();
    this.mounted();
  }
  setEvent() {};
  setState(newState) {
    this.$state = {...this.$state, ...newState};
    this.render();
  }

  // TODO: addEventListener API
  addEvent(eventType, selector, callback) {
    const childNodes = [...this.$target.querySelectorAll(selector)];
    const isTarget = (target) => childNodes.includes(target) || target.closest(selector);
    
    this.$target.addEventListener(eventType, event => {
      if (!isTarget(event.target)) return false;
      callback(event);
    })
  }

  // TODO: intersectionObserver API
  intersectionObserver(selector, className, threshold, execute) {
    const element = document.querySelector(selector);

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        const { target } = entry;
        
        if (entry.isIntersecting) {
          element.style.opacity = 1;
          target.classList.add(className);
          observer.unobserve(element);

          if (execute !== null) {
            execute();
          }
  
        } else {
          target.classList.remove(className);
        }
      });
    };
    
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: threshold,
    };
    
    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );
    
    observer.observe(element);
  }
}