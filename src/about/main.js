"use strict";

import { intersectionObserver } from "../observerAPI.js";

const aboutContainer = document.querySelector(".about__container");

intersectionObserver(aboutContainer, "about__visible", 0.3, null);
