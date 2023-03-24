const slider = function () {
    const thumbs = new Swiper("[data-thumbs-slider]", {
        spaceBetween: 20,
        slidesPerView: 'auto',
        watchSlidesProgress: true,
        breakpoints: {
            0: {
                direction: 'horizontal',
            },
            1024: {
                direction: 'vertical',
            },
        },
    });
    new Swiper('[data-details-slider]', {
      navigation: {
        nextEl: '[data-details-slider-next]',
        prevEl: '[data-details-slider-prev]',
      },
        breakpoints: {
            0: {
                direction: 'horizontal',
            },
            1024: {
                direction: 'vertical',
            },
        },
      thumbs: {
        swiper: thumbs,
      },
    });
};

export default slider;
