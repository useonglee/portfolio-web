import Component from './core/component.js';
import Darkmode from '../src/components/Darkmode/darkmode.js';
import Home from '../src/components/Home/home.js'
import About from '../src/components/About/about.js'

export default class App extends Component {
  init() {
    this.$state = {};
  }

  template() {
    return `
      <div data-component="darkmode"></div>
      <section data-component="home" id="home" class="snap"></section>
      <section data-component="about" id="about" class="section snap"></section>
    `
  }

  mounted() {
    const { aboutObserver } = this;
    const $darkmode = this.$target.querySelector('[data-component="darkmode"]');
    const $home = this.$target.querySelector('[data-component="home"]');
    const $about = this.$target.querySelector('[data-component="about"]');

    new Darkmode($darkmode);
    new Home($home);
    new About($about, {
      aboutObserver: aboutObserver.bind(this)
    });
  }

  aboutObserver() {
    setTimeout(() => {
      this.intersectionObserver("#about__container", "about__visible", 0.3, null);
    }, 100);
  }
}