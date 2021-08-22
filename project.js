"use strict";

// TODO: 프로젝트 메뉴 필터링 기능
const projectCategoriesBtn = document.querySelector(".project__categories");
const projcetItems = document.querySelector(".project__items");
const projects = document.querySelectorAll(".project");

projectCategoriesBtn.addEventListener("click", (event) => {
  const filter = event.target.dataset.filter;
  console.log(filter);

  if (filter === null) {
    return;
  }

  projectCategoriesBtn.classList.add("project-animation");

  setTimeout(() => {
    projects.forEach((project) => {
      if (filter === "*" || project.dataset.type === filter) {
        project.classList.remove("invisible");
      } else {
        project.classList.add("invisible");
      }
    });

    projectCategoriesBtn.classList.remove("project-animation");
  }, 300);
});
