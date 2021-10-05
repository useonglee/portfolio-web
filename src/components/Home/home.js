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
        </div>
        <div class="wheel__notice">
          <p>천천히 내려주세요</p>
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
    const asyncOperation = async() => {
      // TODO: Home Observer
      await promise(() => {
        this.intersectionObserver('.main__message', "mainMessage__visible", 1, null);
        this.intersectionObserver(".sub__message", "subMessage__visible", 1, null);
        this.intersectionObserver(".wheel__notice", "wheelNotice__visible", 1, null);
      }, 2000);

      // TODO: 홈 화면 디바이더
      await promise(() => {
        const divider = document.querySelector(".divider");
        divider.style.display = "none";
      }, 3000)
    };

    const promise = (callback, delay) => {
      return new Promise((resolve, reject) => {
        try {
          resolve(setTimeout(callback, delay));
        }
        catch {
          reject(err => console.log(err));
        }
      });
    }

    asyncOperation();
  }
}

