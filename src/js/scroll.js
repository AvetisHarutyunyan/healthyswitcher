"use strict";

const navMenu = document.querySelector(".header__section");
const toUpBtn = document.querySelector(".upIcon");

window.addEventListener("scroll", () => {
    navMenu.classList.toggle("nav-dark", window.scrollY > 70);
    toUpBtn.classList.toggle("visibleUpBtn", window.scrollY > 700);
});