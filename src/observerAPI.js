"use strict";

function intersectionObserver (element, className, threshold, execute) {
  const observerCallback = (entries) => {
    entries.forEach((entry) => {
      const { target } = entry;
      
      if (entry.isIntersecting) {
        target.classList.add(className);
        observer.unobserve(target);
        if (execute !== null) {
          execute();
        }

      } else {
        target.classList.remove(className);
      }
    });
  };
  
  const observerOptions = {
    root: null,
    rootMargin: "0px",
    threshold: threshold,
  };
  
  const observer = new IntersectionObserver(
    observerCallback,
    observerOptions
  );
  
  observer.observe(element);
}

export { intersectionObserver };