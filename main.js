"use strict";

// TODO: 스크롤 내리면 navbar 배경이 보이게 해준다.
const navbar = document.querySelector("#navbar");
const navbarHeight = navbar.getBoundingClientRect().height;

document.addEventListener("scroll", () => {
  if (window.scrollY > navbarHeight) {
    navbar.classList.add("navbar--open");
  } else {
    navbar.classList.remove("navbar--open");
  }
});

// TODO: navbar menu 클릭 시, 해당 메뉴로 이동한다.
const navbar_menu = document.querySelector(".navbar__menu");

navbar_menu.addEventListener("click", (event) => {
  const target = event.target;
  const link = target.dataset.link;

  if (link === null) {
    return;
  }

  scrollIntoView(link);
});

// TODO: 반응형 navbar 토글 버튼 목록
const navbarToggleBtn = document.querySelector(".navbar__toggle-btn");

navbarToggleBtn.addEventListener("click", () => {
  console.log("click");
  navbar_menu.classList.toggle("open");
});

// TODO: Home 높이
const home = document.querySelector("#home");
const home_height = home.getBoundingClientRect().height;

// TODO: Contact me 버튼 클릭시, Contact 메뉴로 이동
const home_contact = document.querySelector(".home__contact");

home_contact.addEventListener("click", () => {
  scrollIntoView("#contact");
});

// TODO: 맨 위로 가기 버튼
const arrow_up = document.querySelector(".arrow-up");

document.addEventListener("scroll", () => {
  if (window.scrollY > home_height / 2) {
    arrow_up.classList.add("visible");
  } else {
    arrow_up.classList.remove("visible");
  }
});

arrow_up.addEventListener("click", () => {
  scrollIntoView("#home");
});

// TODO: 해당 메뉴로 이동하는 함수 scrollIntoView 구현
const scrollIntoView = (selector) => {
  const scrollTo = document.querySelector(selector);
  scrollTo.scrollIntoView({ behavior: "smooth" });
};
