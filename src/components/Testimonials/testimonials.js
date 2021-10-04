import Component from "../../core/component.js";
import { pairReviews } from "./data.js";

export default class Testimonials extends Component {
  template() {
    return `
      <h1>Testimonials</h1>
        <p>코드스테이츠 수강 중에 만났던 페어분들의 피드백입니다.</p>
        <section id="slide__wrap">
          <div class="slide__box">
            <div class="slide__list">
              ${pairReviews.map((content) => `
                <div class="slide__content">
                  <div class="slide__title">잘한 점</div>
                  <div class="slide__description">${content.good}</div>
                  <div class="slide__title">개선할 점</div>
                  <div class="slide__description">${content.improvement}</div>
                  <div class="slide__pair">${content.pair}</div>
              </div>
              `).join('')}
            </div>
          </div>
          <div class="slide__btn-wrap">
            <button class="slide__btn prev">
              <i class="fas fa-chevron-left"></i>
            </button>
            <button class="slide__btn next">
              <i class="fas fa-chevron-right"></i>
            </button>
          </div>
          <ul class="slide__pagination"></ul>
        </section>
    `;
  }

  setEvent() {
    const { scheduling } = this.$props;

    scheduling(() => {
      const doc = document;

      // TODO: 슬라이드 기능 구현
      const slideList = doc.querySelector(".slide__list");
      const slideContents = doc.querySelectorAll(".slide__content");
      const slideLen = slideContents.length;
      const slideWidth = 800;
      const slideSpeed = 300;

      // TODO: 무한 캐루셀을 위해 앞, 뒤로 하나씩 더 추가한다.
      slideList.style.width = slideWidth * (slideLen + 2) + "px";

      let firstChild = slideList.firstElementChild;
      let lastChild = slideList.lastElementChild;
      let clonedFirst = firstChild.cloneNode(true);
      let clonedLast = lastChild.cloneNode(true);

      // TODO: 복제본을 앞, 뒤로 추가해준다.
      slideList.appendChild(clonedFirst);
      slideList.insertBefore(clonedLast, slideList.firstElementChild);
      slideList.style.transform = "translate3d(-" + slideWidth + "px, 0px, 0px)";

      let curIndex = 0;
      let curSlide = slideContents[curIndex];
      curSlide.classList.add("slide__active");

      // TODO: Next button
      this.addEvent("click", ".slide__btn.next", () => {
        if (curIndex <= slideLen - 1) {
          slideList.style.transition = slideSpeed + "ms";
          slideList.style.transform =
            "translate3d(-" + slideWidth * (curIndex + 2) + "px, 0px, 0px)";
        }

        if (curIndex === slideLen - 1) {
          setTimeout(() => {
            slideList.style.transition = "0ms";
            slideList.style.transform =
              "translate3d(-" + slideWidth + "px, 0px, 0px)";
          }, slideSpeed);

          curIndex = -1;
        }

        curSlide.classList.remove("slide__active");
        curSlide = slideContents[++curIndex];
        curSlide.classList.add("slide__active");
      });

      // TODO: Prev button
      this.addEvent("click", ".slide__btn.prev", () => {
        if (curIndex >= 0) {
          slideList.style.transition = slideSpeed + "ms";
          slideList.style.transform =
            "translate3d(-" + slideWidth * curIndex + "px, 0px, 0px)";
        }

        if (curIndex === 0) {
          setTimeout(() => {
            slideList.style.transition = "0ms";
            slideList.style.transform =
              "translate3d(-" + slideWidth * slideLen + "px, 0px, 0px)";
          }, slideSpeed);

          curIndex = slideLen;
        }

        curSlide.classList.remove("slide__active");
        curSlide = slideContents[--curIndex];
        curSlide.classList.add("slide__active");
      });
    }, 0);
  }
}