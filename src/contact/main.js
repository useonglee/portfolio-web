"use strict";

const contactObserverCallback = (entries) => {
  entries.forEach((entry) => {
    const { target } = entry;

    if (entry.isIntersecting) {
      target.classList.add("contact__visible");
      contactObserver.unobserve(target);
      
    } else {
      target.classList.remove("contact__visible");
    }
  });
};

const contactObserverOptions = {
  root: null,
  rootMargin: "0px",
  threshold: 0.3,
};

const contactObserver = new IntersectionObserver(
  contactObserverCallback,
  contactObserverOptions
);

const contactContainer = document.querySelector(".contact__container");

contactObserver.observe(contactContainer);