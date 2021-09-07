"use strict";

const aboutObserverCallback = (entries) => {
  entries.forEach((entry) => {
    const { target } = entry;

    if (entry.isIntersecting) {
      target.classList.add("about__visible");
      aboutObserver.unobserve(target);
      
    } else {
      target.classList.remove("about__visible");
    }
  });
};

const aboutObserverOptions = {
  root: null,
  rootMargin: "0px",
  threshold: 0.3,
};

const aboutObserver = new IntersectionObserver(
  aboutObserverCallback,
  aboutObserverOptions
);

const aboutContainer = document.querySelector(".about__container");

aboutObserver.observe(aboutContainer);
