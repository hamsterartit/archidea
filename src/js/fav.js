const fav = function () {
  const btns = document.querySelectorAll('.fav-btn');

  btns.forEach((btn) => {

    btn.addEventListener('click', () => {
      btn.classList.toggle('fav-btn--active')
    });
  });
};

export default fav;
