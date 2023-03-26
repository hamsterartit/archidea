const header = function () {
  const menuBtn = document.querySelector('[data-header-menu-btn]');
  const menu = document.querySelector('[data-header-menu]');
  const body = document.querySelector('body');
  const header = document.querySelector('[data-header]');
  const headerBox = document.querySelector('[data-header-box]');

  checkHref();

  menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle('menu-btn--active');
    menu.classList.toggle('header__menu--active');
    body.classList.toggle('body-locked');
    headerBox.classList.toggle('header__box--active');
    header.classList.toggle('header--active');
  });

  function checkHref() {
    if (window.location.pathname.length > 1) {
      header.classList.add('header--dark');
    } else {
      header.classList.remove('header--dark');
    }
  }
};

export default header;
