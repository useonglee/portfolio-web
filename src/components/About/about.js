import Component from "../../core/component.js";
import { question, education } from './data.js';

export default class About extends Component {
  template() {
    return `
        <h1>About</h1>
        <p>저에 대해서 간단하게 소개합니다!</p>
        <div id="about__container">
          <section class="about__question">
            <h2 class="about__question-title">🤔 Question</h2>
            <div class="about__question content">
                ${question.map(content => `
                  <section class="question__content-wrap">
                    <h3 class="question__content-question">${content.question}</h3>
                    <p class="question__content-answer">${content.answer}</p>
                  </section>
                `).join('')}
            </div>
          </section>
          <section class="about__education">
            <h2 class="about__education-title">🏫 Education</h2>
            <div class="about__education content">
              ${education.map(content => `
                <div class="education__content-wrap">
                  <div class="education__content-date">${content.date}</div>
                  <section>
                    <h3 class="education__content-title">${content.title}</h3>
                    <p class="education__content-description">
                      ${content.description}
                    </p>
                    <p>
                      ${content.explanation}
                    </p>
                  </section>
                </div>
              `).join('')}
            </div>
          </section>
        </div>
    `;
  }

  setEvent() {
    const { scheduling } = this.$props;
 
    scheduling(() => {
      this.intersectionObserver("#about__container", "about__visible", 0.3, null)
    }, 0);
  }
}