import Component from "../../core/component.js";
import { 
  skillset__strong, 
  skillset__knowledgeable, 
  skillset__etc } from "./data.js"

export default class Skills extends Component {
  template() {
    return `
        <h1>Skills</h1>
        <p>제가 보유하고 있는 스킬들을 소개합니다!</p>
        <section class="skillset">
          <div class="skillset__left">
            <section class="skillset__strong">
              <h3 class="skillset__title">Strong</h3>
              ${skillset__strong.map(skill => `
                <div class="skill">
                  <div class="skill__description">
                    <span>${skill.name}</span>
                    <span>${skill.performance}</span>
                  </div>
                  <div class="skill__bar">
                    <div class="skill__value" style="width: ${skill.performance}"></div>
                  </div>
                </div>
              `).join('')}
            </section>
            <div class="skillset__knowledgeable-container">
              <section class="skillset__knowledgeable">
                <h3 class="skillset__bottom-title">Knowledgeable</h3>
                ${skillset__knowledgeable.map(skill => `
                  <ul class="knowledgeable__list">
                    <li><span>${skill.name}</span></li>
                  </ul>
                `).join('')}
              </section>
              <section class="skillset__etc">
                <h3 class="skillset__bottom-title">Etc</h3>
                ${skillset__etc.map(skill => `
                  <ul class="knowledgeable__list">
                    <li><span>${skill.name}</span></li>
                  </ul>
                `).join('')}
              </section>
            </div>
          </div>
          <section class="skillset__right">
            <div id="radarChart"></div>
          </section>
        </section>
        <section class="lineChart__container">
          <h3 class="skillset__title">Learning Curve</h3>
          <div id="lineChart"></div>
        </section>
    `;
  }

  setEvent() {
    const { scheduling } = this.$props;

    // TODO: radar Type
    scheduling(() => {
      const radarChart = bb.generate({
        size: {
          width: 480,
          height: 300
        },
          padding: {
          bottom: -20
        },
        data: {
          x: "x",
          columns: [
            ["x", "커뮤니케이션", "문제 해결 능력", "성장 마인드", "창의성", "리더십"],
            ["soft skills", 10, 10, 10, 10, 10],
         ],
         type: "radar",
         labels: true
        },
        radar: {
          axis: {
            max: 100
          },
          size: {
            ratio: 0.8
          },
          text: {
            position: {
              x: 100,
              y: 100,
            }
          },
          level: {
            depth: 4
          },
          direction: {
            clockwise: true
          }
        },
        bindto: "#radarChart"
      });
      const loadRadarChart = () => {
        setTimeout(function() {
          radarChart.load({
            columns: [
              ["soft skills", 100, 90, 100, 80, 90],
            ]
          });
        }, 1500);
      }

      this.intersectionObserver(".skillset", "skillset__visible", 0.3, loadRadarChart);
    }, 0);

    // TODO: line Type
    scheduling(() => {
      const lineChart = bb.generate({
        size: {
          width: 1300,
          height: 300
        },
        padding: {
          bottom: 60
        },
        data: {
          x: "x",
          columns: [
            [
              "x", 
              "Code States\nProgramming Study Start\n2020.12 ~",
              "Code States\nImmersive course\n2021.02 ~",
              "Code States\nReact, Redux and Back-end\n2021.03 ~",
              "Code States\nTeam Project Start\n2021.05 ~",
              "Code States\nAfter graduation\n2021.07 ~", 
              "Current\n2021.09"
            ],
            ["Javascript", 0, 20, 30, 30, 50, 100],
          ],
          type: "line",
          colors: {
            Javascript: "#f7df1f",
            CSS: "#2862e9",
            React: "#61dcf7",
            Communication: "#e8427c"
          }
        },
        axis: {
          x: {
            type: "category",
          }
        },
        bindto: "#lineChart"
          });
      
      const loadLineChart = () => {
        setTimeout(function() {
          lineChart.load({
            columns: [
            ["Javascript", 0, 20, 30, 30, 20, 150]
            ]
          });
        }, 1500);
        
        setTimeout(function() {
          lineChart.load({
            columns: [
              ["CSS", 0, 20, 30, 50, 120, 150]
            ]
          });
        }, 2000);
        
        setTimeout(function() {
          lineChart.load({
            columns: [
              ["React", 0, 0, 30, 50, 140, 140]
            ]
          });
        }, 2500);
        
        setTimeout(function() {
          lineChart.load({
            columns: [
              ["Communication", 50, 50, 60, 70, 150, 160]
            ]
          });
        }, 3000);
      }

      this.intersectionObserver(".lineChart__container", "lineChart__visible", 0.3, loadLineChart);
    }, 0)
  }
}