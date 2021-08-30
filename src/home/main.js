"use strict";

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

container.addEventListener("scroll", () => {
  if (container.scrollTop > homeHeight / 2) {
    arrowUp.classList.add("visible");
  } else {
    arrowUp.classList.remove("visible");
  }
});

arrowUp.addEventListener("click", () => {
  scrollIntoView("#home");
});
