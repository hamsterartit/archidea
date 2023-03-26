const search = function () {
  const search = document.querySelector('[data-search]');
  const searchInput = document.querySelector('[data-search-input]');
  const searchClose = document.querySelector('[data-search-close]');
  const searchOpen = document.querySelector('[data-search-open]');

  searchInput.addEventListener('input', openResults);
  searchInput.addEventListener('click', openResults);

  searchOpen.addEventListener('click', () => {
    search.classList.add('_mobile-active');
  });

  searchClose.addEventListener('click', () => {
    search.classList.remove('_active');
    search.classList.remove('_mobile-active');
  });

  document.addEventListener('click', (e) => {
    if (!search.contains(e.target) && e.target !== searchOpen) {
      search.classList.remove('_active');
      search.classList.remove('_mobile-active');
    }
  });
  function openResults() {
    if (searchInput.value.length >= 3) {
      search.classList.add('_active');
    } else {
      search.classList.remove('_active');
    }
  }
};

export default search;
