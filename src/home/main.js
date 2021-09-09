"use strict";

import { intersectionObserver } from "../observerAPI.js";

// TODO: Home 높이
const home = document.querySelector("#home");
const homeHeight = home.getBoundingClientRect().height;

// TODO: Contact me 버튼 클릭시, Contact 메뉴로 이동
const homeContact = document.querySelector(".home__contact");

homeContact.addEventListener("click", () => {
  scrollIntoView("#contact");
});

// TODO: 맨 위로 가기 버튼
const arrowUp = document.querySelector(".arrow-up");

// TODO: Home 메시지
const mainMessage = document.querySelector(".main__message");
const subMessage = document.querySelector(".sub__message");
const wheelNotice = document.querySelector(".wheel__notice");

container.addEventListener("scroll", () => {
  if (container.scrollTop > homeHeight / 2) {
    arrowUp.classList.add("visible");
    mainMessage.style.display = "none";
    subMessage.style.display = "none";
    wheelNotice.style.display = "none";
  } else {
    arrowUp.classList.remove("visible");
    mainMessage.style.display = "block";
    subMessage.style.display = "block";
    wheelNotice.style.display = "block";
  }
});

arrowUp.addEventListener("click", () => {
  scrollIntoView("#home");
});

// TODO: intersectionObserver API
setTimeout(() => {
  intersectionObserver(mainMessage, "mainMessage__visible", 1, null);
  intersectionObserver(subMessage, "subMessage__visible", 1, null);
  intersectionObserver(homeContact, "contactBtn__visible", 1, null);
  intersectionObserver(wheelNotice, "wheelNotice__visible", 1, null);
}, 2100);

// TODO: 홈 화면 디바이더
const divider = document.querySelector(".divider");

setTimeout(() => {
  divider.style.display = "none";
}, 2800);