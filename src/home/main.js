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
    wheelNotice.style.display = "none";
  }
});

arrowUp.addEventListener("click", () => {
  scrollIntoView("#home");
});

// TODO: 화면 디바이더
const divider = document.querySelector(".divider");

// TODO: intersectionObserver API
const homeObserverCallback = (entries) => {
  entries.forEach((entry) => {
    const { target } = entry;
    const className = target.className.split(" ")[0];

    if (entry.isIntersecting) {
      if (className === "main__message") {
        target.classList.add("mainMessage__visible");
      } else if (className === "sub__message") {
        target.classList.add("subMessage__visible");
      } else if (className === "home__contact") {
        target.classList.add("contactBtn__visible")
      } else {
        target.classList.add("wheelNotice__visible");
      }
      homeObserver.unobserve(target);

    } else {
      if (className === "main__message") {
        target.classList.remove("mainMessage__visible");
      } else if (className === "sub__message") {
        target.classList.remove("subMessage__visible");
      } else if (className === "home__contact") {
        target.classList.remove("contactBtn__visible")
      } else {
        target.classList.remove("wheelNotice__visible");
      }
    }
  });
};

const homeObserverOptions = {
  root: null,
  rootMargin: "0px",
  threshold: 1,
};

const homeObserver = new IntersectionObserver(
  homeObserverCallback,
  homeObserverOptions
);

setTimeout(() => {
  homeObserver.observe(mainMessage);
  homeObserver.observe(subMessage);
  homeObserver.observe(homeContact);
  homeObserver.observe(wheelNotice);
}, 2100);

setTimeout(() => {
  divider.style.display = "none";
}, 2800);