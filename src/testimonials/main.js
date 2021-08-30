"use strict";

// TODO: 슬라이드 기능 구현
const slideList = document.querySelector(".slide__list");
const slideContents = document.querySelectorAll(".slide__content");
const slidePrevBtn = document.querySelector(".slide__btn.prev");
const slideNextBtn = document.querySelector(".slide__btn.next");
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
slideNextBtn.addEventListener("click", function () {
  if (curIndex <= slideLen - 1) {
    slideList.style.transition = slideSpeed + "ms";
    slideList.style.transform =
      "translate3d(-" + slideWidth * (curIndex + 2) + "px, 0px, 0px)";
  }

  if (curIndex === slideLen - 1) {
    setTimeout(function () {
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
slidePrevBtn.addEventListener("click", function () {
  if (curIndex >= 0) {
    slideList.style.transition = slideSpeed + "ms";
    slideList.style.transform =
      "translate3d(-" + slideWidth * curIndex + "px, 0px, 0px)";
  }

  if (curIndex === 0) {
    setTimeout(function () {
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
