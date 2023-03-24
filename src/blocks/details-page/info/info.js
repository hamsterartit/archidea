const info = function () {
    const thumbs = new Swiper("[data-thumbs-slider]", {
        spaceBetween: 20,
        slidesPerView: 'auto',
        watchSlidesProgress: true,
        direction: "vertical",
    });
    new Swiper("[data-details-slider]", {
        direction: "vertical",
        navigation: {
            nextEl: "[data-details-slider-next]",
            prevEl: "[data-details-slider-prev]",
        },
        thumbs: {
            swiper: thumbs,
        },
    });
};

export default info;
