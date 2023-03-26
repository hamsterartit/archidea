const readyProjects = function () {
  new Swiper('[data-ready-projects-slider]', {
    slidesPerView: 'auto',
    spaceBetween: 20,
    breakpoints: {
      1024: {
        slidesPerView: 3,
      },
    },
  });
};

export default readyProjects;
