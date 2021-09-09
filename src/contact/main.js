"use strict";

import { intersectionObserver } from "../observerAPI.js";

const contactContainer = document.querySelector(".contact__container");

intersectionObserver(contactContainer, "contact__visible", 0.3, null);