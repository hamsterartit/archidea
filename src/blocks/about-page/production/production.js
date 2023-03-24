const production = function () {
    new Swiper("[data-production-slider]", {
        slidePerView: '1',
        navigation: {
            nextEl: ".production__next",
            prevEl: ".production__prev",
        },
    });
};

export default production;
