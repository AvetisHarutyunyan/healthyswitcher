"use strict";window.addEventListener("DOMContentLoaded",(function(){var e=document.querySelectorAll(".dishes__share_icon"),t=document.querySelector(".dishes_share__item"),s=document.body;e.forEach((function(e){e.addEventListener("click",(function(){t.classList.contains("shareItem-active")||(t.classList.add("shareItem-active"),s.classList.add("darkBody"))}))})),document.getElementById("years").textContent=(new Date).getFullYear();var n=document.getElementById("dishesItem_title");document.addEventListener("mouseup",(function(e){e.target!==t&&e.target!==n&&(t.classList.remove("shareItem-active"),s.classList.remove("darkBody"))}));var i=document.querySelector(".burger"),a=document.querySelector(".navside");i.addEventListener("click",(function(){a.classList.contains("nav-active")?(a.classList.remove("nav-active"),i.classList.remove("close")):(a.classList.add("nav-active"),i.classList.add("close"))}))}));var e=document.querySelector(".header__section"),t=document.querySelector(".upIcon");window.addEventListener("scroll",(function(){e.classList.toggle("nav-dark",window.scrollY>70),t.classList.toggle("visibleUpBtn",window.scrollY>700)})),new Swiper(".slider",{slidesPerView:1,spaceBetween:34,loop:!0,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},breakpoints:{768:{slidesPerView:2}}});
//# sourceMappingURL=all.js.map