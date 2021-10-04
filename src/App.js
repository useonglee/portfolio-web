import Component from './core/component.js';
import Navbar from '../src/components/Navbar/navbar.js';
import Darkmode from '../src/components/Darkmode/darkmode.js';
import Home from '../src/components/Home/home.js'
import About from '../src/components/About/about.js'
import Skills from '../src/components/Skills/skills.js';
import Project from '../src/components/Project/project.js';
import Testimonials from '../src/components/Testimonials/testimonials.js';
import Contact from '../src/components/Contact/contact.js';

export default class App extends Component {
  init() {
    this.$state = {};
  }

  template() {
    return `
      <nav data-component="navbar" id="navbar"></nav>
      <div data-component="darkmode"></div>
      <section data-component="home" id="home"></section>
      <section data-component="about" id="about" class="section"></section>
      <section data-component="skills" id="skills" class="section"></section>
      <section data-component="project" id="project" class="section"></section>
      <section data-component="testimonials" id="testimonials" class="section"></section>
      <section data-component="contact" id="contact" class="section"></section>
    `
  }

  mounted() {
    const { scheduling } = this;
    const $navbar = this.$target.querySelector('[data-component="navbar"]');
    const $darkmode = this.$target.querySelector('[data-component="darkmode"]');
    const $home = this.$target.querySelector('[data-component="home"]');
    const $about = this.$target.querySelector('[data-component="about"]');
    const $skills = this.$target.querySelector('[data-component="skills"]');
    const $project = this.$target.querySelector('[data-component="project"]');
    const $testimonials = this.$target.querySelector('[data-component="testimonials"]');
    const $contact = this.$target.querySelector('[data-component="contact"]');

    new Navbar($navbar, {
      scheduling: scheduling.bind(this)
    });
    new Darkmode($darkmode);
    new Home($home);
    new About($about, {
      scheduling: scheduling.bind(this)
    });
    new Skills($skills, {
      scheduling: scheduling.bind(this)
    });
    new Project($project, {
      scheduling: scheduling.bind(this)
    });
    new Testimonials($testimonials, {
      scheduling: scheduling.bind(this)
    });
    new Contact($contact, {
      scheduling: scheduling.bind(this)
    });
  }

  scheduling(callback, delay) {
    setTimeout(callback, delay);
  }
}