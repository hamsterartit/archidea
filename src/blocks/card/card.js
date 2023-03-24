const card = function () {
    new Swiper("[data-card-slider]", {
        direction: "vertical",
        pagination: {
            el: ".swiper-pagination",
        },
    });
};

export default card;
