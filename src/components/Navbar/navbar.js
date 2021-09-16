import Component from "../../core/component.js";

export default class Navbar extends Component {
  template() {
    return `
      <img src="images/logo.png" alt="Portfolio's logo" />
      <section class="navbar__menu">
        <ul class="navbar__menu-list">
          <li class="navbar__menu__item active" data-link="#home">Home</li>
          <li class="navbar__menu__item" data-link="#about">About</li>
          <li class="navbar__menu__item" data-link="#skills">Skills</li>
          <li class="navbar__menu__item" data-link="#project">Project</li>
          <li class="navbar__menu__item" data-link="#testimonials">
            Testimonials
          </li>
          <li class="navbar__menu__item" data-link="#contact">Contact</li>
        </ul>
      </section>
      <button class="navbar__toggle-btn">
        <i class="fas fa-bars"></i>
      </button>
    `;
  }

  setEvent() {
    const doc = document;
    const { scheduling } = this.$props;

    scheduling(() => {
      let app = doc.getElementById("app");
      const navbar = doc.getElementById("navbar");
      const navbarHeight = navbar.getBoundingClientRect().height;
      
      // this.addEvent("scroll", "#app", ({ target }) => {
      //   console.log(app.scrollTop, navbarHeight, target);
      //   if (target.scrollTop > navbarHeight) {
      //     navbar.classList.add("navbar--open");
      //   } else {
      //     navbar.classList.remove("navbar--open");
      //   }
      // })

      console.log(app);
      app.addEventListener("scroll", () => {
        console.log(app.scrollTop, navbarHeight);
        if (app.scrollTop > navbarHeight) {
          navbar.classList.add("navbar--open");
        } else {
          navbar.classList.remove("navbar--open");
        }
      })
      
      // TODO: navbar menu 클릭 시, 해당 메뉴로 이동한다.
      const navbarMenu = doc.querySelector(".navbar__menu");

      this.addEvent("click", ".navbar__menu", ({ target }) => {
        const link = target.dataset.link;
      
        if (link === null) {
          return;
        }
      
        navbarMenu.classList.remove("open");
        scrollIntoView(link);
        selectNavItem(target);
      });
      
      // TODO: 반응형 navbar 토글 버튼 목록
      this.addEvent("click", ".navbar__toggle-btn", () => {
        navbarMenu.classList.toggle("open");
      });
      
      // TODO: 메뉴 기능 활성화
      const sectionIds = [
        "#home",
        "#about",
        "#skills",
        "#project",
        // "#testimonials",
        // "#contact",
      ];
      
      const navItems = sectionIds.map((id) =>
        doc.querySelector(`[data-link="${id}"]`)
      );
      
      let selectedNavIndex = 0;
      let selectedNavItem = navItems[0];
      
      // TODO: 해당 메뉴로 이동하는 함수 scrollIntoView 구현
      const scrollIntoView = (selector) => {
        const scrollTo = doc.querySelector(selector);
        scrollTo.scrollIntoView({ behavior: "smooth" });
        selectNavItem(navItems[sectionIds.indexOf(selector)]);
      };
      
      // TODO: 맨 위로 가기 버튼
      const arrowUp = doc.querySelector(".arrow-up");
      
      arrowUp.addEventListener("click", () => {
        scrollIntoView("#home");
      });
      
      // TODO: 현재 메뉴 활성화
      function selectNavItem(selected) {
        selectedNavItem.classList.remove("active");
        selectedNavItem = selected;
        selectedNavItem.classList.add("active");
      }
      
      const navObserverCallback = (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting && entry.intersectionRatio > 0) {
            const index = sectionIds.indexOf(`#${entry.target.id}`);
      
            // 스크롤을 아래로 내렸을 경우
            if (entry.boundingClientRect.y < 0) {
              selectedNavIndex = index + 1;
            } else {
              // 위로 올릴 경우
              selectedNavIndex = index - 1;
            }
      
            selectNavItem(navItems[selectedNavIndex]);
          }
        });
      };
      
      const navObserverOptions = {
        root: null,
        rootMargin: "0px",
        threshold: 0.3,
      };
      
      const navObserver = new IntersectionObserver(navObserverCallback, navObserverOptions);
      const sections = sectionIds.map((id) => doc.querySelector(id));
      sections.forEach((section) => navObserver.observe(section));

      // app.addEventListener("wheel", () => {
      //   // 스크롤이 맨 위에 있다면 home 메뉴 활성화
      //   if (app.scrollTop === 0) {
      //     selectedNavIndex = 0;
      //   } else if (4745 < app.scrollTop) {
      //     // 스크롤이 맨 밑에 있다면 contact 메뉴 활성화
      //     selectedNavIndex = navItems.length - 1;
      //   }

      //   selectNavItem(navItems[selectedNavIndex]);
      // });
    }, 0);
  }
}