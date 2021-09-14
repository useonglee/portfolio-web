import Component from "../../core/component.js";

export default class Darkmode extends Component {
  template() {
    return `
      <input id="darkmode__btn" type="checkbox"></input>
      <label id="darkmode__label" for="darkmode__btn"></label>
    `;
  }

  setEvent() {
    const doc = document;
    const userColorTheme = localStorage.getItem("color-theme");
    
    // TODO: 미디어쿼리 확인
    const curColorTheme = window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";

    const getColorTheme = () => (userColorTheme ? userColorTheme : curColorTheme);

    // TODO: 렌더링 될 때 localStorage를 확인한다.
    window.onload = () => {
      if (getColorTheme === "dark") {
        isDarkmode();
      } else {
        isLightMode();
      }
    };

    // TODO: 버튼을 클릭할 경우 모드 변경
    this.addEvent("click", "#darkmode__btn", ({ target }) => {
      if (target.checked) {
        isDarkmode();
      } else {
        isLightMode();
      }
    });

    // TODO: 다크 모드 => 라이트 모드
    function isDarkmode() {
      const darkmodeBtn = doc.querySelector("#darkmode__btn");
      const darkmodeLabel = doc.querySelector("#darkmode__label");

      localStorage.setItem("color-theme", "dark");
      doc.documentElement.setAttribute("color-theme", "dark");

      darkmodeBtn.setAttribute("checked", true);
      darkmodeLabel.innerHTML = `
        <i class="fas fa-lightbulb"></i>라이트 모드로 보기
      `;

      iconHover(darkmodeLabel, ".fa-lightbulb");
    };

    // TODO: 라이트 모드 => 다크 모드
    function isLightMode() {
      const darkmodeLabel = doc.querySelector("#darkmode__label");

      localStorage.setItem("color-theme", "light");
      doc.documentElement.setAttribute("color-theme", "light");

      darkmodeLabel.innerHTML = `
        <i class="fas fa-moon"></i>다크 모드로 보기
      `;

      iconHover(darkmodeLabel, ".fa-moon");
    }

    // TODO: implement icon hover inside darkmode button
    function iconHover(darkmodeLabel, selector) {
      const themeIcon = doc.querySelector(selector);
      const className = themeIcon.className.split(" ")[1];

      darkmodeLabel.addEventListener("mouseover", () => {
        if (className === "fa-moon") {
          themeIcon.style.color = "var(--color-orange)";
        } else {
          themeIcon.style.color = "var(--color-green)";
        }
     });

      darkmodeLabel.addEventListener("mouseout", () => {
        themeIcon.style.color = "var(--color)";
      });
    }
  }
}