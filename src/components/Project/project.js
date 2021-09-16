import Component from "../../core/component.js";

export default class Project extends Component {
  template() {
    return `
        <h1>Projects</h1>
        <p>코드 스테이츠 수강 중에 진행한 프로젝트입니다.</p>
        <section class="project__categories">
          <button class="category__btn active" data-filter="*">All</button>
          <button class="category__btn" data-filter="final-project">
            Final Project
          </button>
          <button class="category__btn" data-filter="first-project">
            First Project
          </button>
          <button class="category__btn" data-filter="persnal-project">
            Personal Project
          </button>
        </section>

        <section class="project__items">
          <div class="project" target="_blank" data-type="final-project">
            <img
              src="images/project_reciper.png"
              alt="Final Project - Reciper"
              class="project__img"
              style="width: 100%; height: 100%;"
              loading="lazy"
            />
            <section class="project__description">
              <h3>Reciper</h3>
              <span>팀원 모집부터 협업까지! 토이 프로젝트의 A to Z!</span>
              <a href="https://reciper.me" target="_blank">
                배포 사이트 가기 <i class="fas fa-long-arrow-alt-right"></i>
              </a>
              <a href="https://github.com/codestates/Reciper-client" target="_blank">
                깃헙 보러가기 <i class="fas fa-long-arrow-alt-right"></i>
              </a>
            </section>
          </div>
          <div class="project" data-type="first-project">
            <img
              src="images/project_trollo.jpg"
              alt="First Project - Trollo"
              class="project__img"
              style="max-width: 100%; height: 100%;"
              loading="lazy"
            />
            <section class="project__description">
              <h3>Trollo</h3>
              <span>
                칸반보드로 일정을 관리하고 게시판에 공유해 보세요!
              </span>
              <a href="https://github.com/codestates/Trollo-client" target="_blank">
                깃헙 보러가기 <i class="fas fa-long-arrow-alt-right"></i>
              </a>
            </section>
          </div>
          <div class="project" data-type="persnal-project">
            <img
              src="images/project_portfolio.png"
              alt="Personal Project - Portfolio website"
              class="project__img"
              style="width: 100%; height: 100%;"
              loading="lazy"
            />
            <section class="project__description">
              <h3>Useong's Portfolio</h3>
              <span>나를 가장 잘 나타낼 수 있는 포트폴리오 웹 사이트</span>
              <a href="https://github.com/useonglee/Portfolio-LeeUseong" target="_blank">
                깃헙 보러가기 <i class="fas fa-long-arrow-alt-right"></i>
              </a>
            </section>
          </div>
        </section>
    `;
  }

  setEvent() {
    const doc = document;
    const { scheduling } = this.$props;

    scheduling(() => {
      // TODO: 프로젝트 메뉴 필터링 기능
      const projectCategoriesBtn = doc.querySelector(".project__categories");
      const projcetItems = doc.querySelector(".project__items");
      const projects = doc.querySelectorAll(".project");

      projectCategoriesBtn.addEventListener("click", (event) => {
        const filter = event.target.dataset.filter;

        if (filter === null) {
          return;
        }

        // TODO: 프로젝트 메뉴 활성화
        const active = doc.querySelector(".category__btn.active");
        active.classList.remove("active");
        event.target.classList.add("active");

        projcetItems.classList.add("project-animation");

        setTimeout(() => {
          projects.forEach((project) => {
            if (filter === "*" || project.dataset.type === filter) {
              project.classList.remove("invisible");
            } else {
              project.classList.add("invisible");
            }
          });

          projcetItems.classList.remove("project-animation");
        }, 100);
      });
    }, 0)
  }
}