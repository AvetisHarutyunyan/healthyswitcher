new Swiper(".slider", {
    slidesPerView: 1,
    spaceBetween: 34,
    loop: true,
    
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },

    breakpoints: {
        768: {
            slidesPerView: 2
        }
    }
});