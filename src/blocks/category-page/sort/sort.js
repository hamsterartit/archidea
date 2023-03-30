const sortItems = function () {
  const box = document.querySelector('[data-sort-box]');
  const btn = document.querySelector('[data-sort-btn]');

  if(btn) {
    btn.addEventListener('click', function () {
      box.classList.toggle('_active');
    });
  }

  const filterBtn = document.querySelector('[data-mobile-filter-btn]');
  const filterDropdown = document.querySelector('[data-filter-box]');

  if(filterBtn) {
    filterBtn.addEventListener('click', function () {
      filterBtn.classList.toggle('filter-mobile-btn--active');
      filterDropdown.classList.toggle('category-wrapper__sidebar--active');
    });
  }
};

export default sortItems;
