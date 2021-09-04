"use strict";

const darkmodeBtn = document.querySelector("#darkmode__btn");
const userColorTheme = localStorage.getItem("color-theme");
const darkmodeLabel = document.querySelector("#darkmode__label");

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
darkmodeBtn.addEventListener("click", (event) => {
  if (event.target.checked) {
    isDarkmode();
  } else {
    isLightMode();
  }
});

// TODO: 다크 모드 => 라이트 모드
function isDarkmode() {
  localStorage.setItem("color-theme", "dark");
  document.documentElement.setAttribute("color-theme", "dark");
  darkmodeBtn.setAttribute("checked", true);
  darkmodeLabel.innerHTML = `
    <i class="fas fa-lightbulb"></i>라이트 모드로 보기
    `;

  const lightbulb = document.querySelector(".fa-lightbulb");
  iconHover(darkmodeLabel, lightbulb);
}

// TODO: 라이트 모드 => 다크 모드
function isLightMode() {
  localStorage.setItem("color-theme", "light");
  document.documentElement.setAttribute("color-theme", "light");
  darkmodeLabel.innerHTML = `
    <i class="fas fa-moon"></i>다크 모드로 보기
    `;

  const moon = document.querySelector(".fa-moon");
  iconHover(darkmodeLabel, moon);
}

// TODO: icon hover
function iconHover(darkmodeLabel, themeIcon) {
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
