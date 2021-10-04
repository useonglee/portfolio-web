import Component from "../../core/component.js";

export default class Contact extends Component {
  template() {
    return `
        <h1 class="contact__title">Let's talk</h1>
        <h3>소통하는 것을 좋아합니다! 언제나 환영입니다!</h3>
        <div class="contact__container">
          <figure class="contact__left-img">
            <img
              src="images/profile.png"
              alt="Useong's profile photo"
              class="contact__avatar"
              style="width: 100%; height: 100%; object-fit: cover; border-radius: 5px;"
              loading="lazy"
            />
          </figure>
            <section class="contact__right-info">
              <h3>Page.</h3>
              <div class="contact__github">
                <a href="https://github.com/useonglee" target="_blank">
                  <i class="fab fa-github"></i>
                  github.com/useonglee
                </a>
              </div>
              <div class="contact__blog">
                <a href="https://useonglee.github.io" target="_blank">
                  <i class="fas fa-book"></i>
                  useonglee.github.io
                </a>
              </div>
              <h3>Communication.</h3>
              <div class="contact__mobile">
                <i class="fas fa-sms"></i>
                010 - 5818 - 3823
              </div>
              <div class="contact__email">
                <i class="far fa-envelope"></i>
                useong0830@naver.com
              </div>
          </section>
        </div>
        <p class="contact__rights">2021 Useong Lee - All rights reserved</p>
    `;
  }

  setEvent() {
    const { scheduling } = this.$props;
 
    scheduling(() => {
      this.intersectionObserver(".contact__container", "contact__visible", 0.3, null)
    }, 0);
  }
}