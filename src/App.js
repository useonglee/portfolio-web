import Component from './core/component.js';
import Darkmode from '../src/components/Darkmode/darkmode.js';
import Home from '../src/components/Home/home.js'
import About from '../src/components/About/about.js'
import Skills from '../src/components/Skills/skills.js';

export default class App extends Component {
  init() {
    this.$state = {};
  }

  template() {
    return `
      <div data-component="darkmode"></div>
      <section data-component="home" id="home"></section>
      <section data-component="about" id="about" class="section"></section>
      <section data-component="skills" id="skills" class="section"></section>
    `
  }

  mounted() {
    const { scheduling } = this;
    const $darkmode = this.$target.querySelector('[data-component="darkmode"]');
    const $home = this.$target.querySelector('[data-component="home"]');
    const $about = this.$target.querySelector('[data-component="about"]');
    const $skills = this.$target.querySelector('[data-component="skills"]');

    new Darkmode($darkmode);
    new Home($home);
    new About($about, {
      scheduling: scheduling.bind(this)
    });
    new Skills($skills, {
      scheduling: scheduling.bind(this)
    });
  }

  scheduling(callback, delay) {
    setTimeout(callback, delay);
  }
}