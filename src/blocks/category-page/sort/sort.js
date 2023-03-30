const sortItems = function () {
  const btn = document.querySelector('[data-sort-btn]');
  const dropdown = document.querySelector('[data-sort-dropdown]');

  btn.addEventListener('click', function () {
    dropdown.classList.toggle('sort-by__dropdown--active');
  });

  const filterBtn = document.querySelector('[data-mobile-filter-btn]');
  const filterDropdown = document.querySelector('[data-filter-box]');

  filterBtn.addEventListener('click', function () {
    filterBtn.classList.toggle('filter-mobile-btn--active');
    filterDropdown.classList.toggle('category-wrapper__sidebar--active');
  });
};

export default sortItems;
