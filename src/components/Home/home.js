import Component from "../../core/component.js";

export default class Home extends Component {
  template() {
    return `
      <div id="dimed">
        <div class="main__message">모든 일에 최선을 다하자</div>
        <div class="sub__message">
          <p class="sub__message-one">
            항상 긍정적 사고를 하며, 팀에게 동기부여를 할 수 있는 프론트엔드 개발자 이우성입니다!
          </p>
          <button class="home__contact">CONTACT ME</button>
        </div>
        <div class="wheel__notice">
          <p>휠을 천천히 내려주세요</p>
          <img src="images/wheel_down.gif" alt="Instructions to down the wheel" />
        </div>
      </div>
        
      <div class="divider">
          <div class="divider__left"></div>
          <div class="divider__right"></div>
      </div>
    `;
  }

  setEvent() {
    // TODO: Contact me 버튼 클릭시, Contact 메뉴로 이동
    this.addEvent("click", ".home__contact", () => {
      this.scrollIntoView("#contact");
    });

    this.addEvent("scroll", "#app", () => {
      // TODO: Home 높이
      const home = document.querySelector("#home");
      const homeHeight = home.getBoundingClientRect().height;

      // TODO: Home 메시지
      const mainMessage = document.querySelector(".main__message");
      const subMessage = document.querySelector(".sub__message");
      const wheelNotice = document.querySelector(".wheel__notice");

      if (app.scrollTop > homeHeight / 2) {
        mainMessage.style.display = "none";
        subMessage.style.display = "none";
        wheelNotice.style.display = "none";
      } else {
        mainMessage.style.display = "block";
        subMessage.style.display = "block";
        wheelNotice.style.display = "block";
      }
    });

    // TODO: Timer
    setTimeout(() => {
      this.intersectionObserver('.main__message', "mainMessage__visible", 1, null);
      this.intersectionObserver(".sub__message", "subMessage__visible", 1, null);
      this.intersectionObserver(".home__contact", "contactBtn__visible", 1, null);
      this.intersectionObserver(".wheel__notice", "wheelNotice__visible", 1, null);
    }, 2000);

    setTimeout(() => {
      // TODO: 홈 화면 디바이더
      const divider = document.querySelector(".divider");

      divider.style.display = "none";
    }, 3000);
  }
}

