"use strict";

window.addEventListener("DOMContentLoaded", () => {
    // dishes share
    const shareBtn = document.querySelectorAll(".dishes__share_icon");
    const shareContainer = document.querySelector(".dishes_share__item");
    const body = document.body;

    shareBtn.forEach(share => {
        share.addEventListener("click", () => {
            if (!shareContainer.classList.contains("shareItem-active")) {
                shareContainer.classList.add("shareItem-active");
                body.classList.add("darkBody");
            }
        });
    });

    const year = document.getElementById("years");
    year.textContent = new Date().getFullYear();

    const dishesBoardTitle = document.getElementById("dishesItem_title");

    document.addEventListener("mouseup", e => {
        if (e.target !== shareContainer && e.target !== dishesBoardTitle) {
            shareContainer.classList.remove("shareItem-active");
            body.classList.remove("darkBody");
        }
    });

    const burger = document.querySelector(".burger");
    const menuNav = document.querySelector(".navside");

    burger.addEventListener("click", () => {
        if(!menuNav.classList.contains("nav-active")) {
            menuNav.classList.add("nav-active");
            burger.classList.add("close");
        } else {
            menuNav.classList.remove("nav-active");
            burger.classList.remove("close");
        }
    });
});