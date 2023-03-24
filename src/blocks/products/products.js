const products = function () {
    new Swiper("[data-products-slider]", {
        slidesPerView: 'auto',
        spaceBetween: 20,
        breakpoints: {
            1314: {
                slidesPerView: 4,
            },
        },
    });
};

export default products;