const articles = function () {
    new Swiper("[data-articles-slider]", {
        slidesPerView: 'auto',
        spaceBetween: 20,
        breakpoints: {
            1024: {
                slidesPerView: 3,
            },
        },
    });
};

export default articles;