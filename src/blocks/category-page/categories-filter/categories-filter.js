const categoriesFilter = function () {
    const btns = document.querySelectorAll('[data-categories-filter-btn]');
    const list = document.querySelectorAll('[data-categories-filter-list]');


    btns.forEach((btn, i) => {
        btn.addEventListener("click", function() {
            console.log(list[i])
            if (list[i].style.maxHeight) {
                list[i].style.maxHeight = null;
                btns[i].classList.remove('categories-filter__btn--active');
                setTimeout(() => {
                    list[i].classList.remove('categories-filter__list--active');
                }, 200)

            } else {
                list[i].style.maxHeight = list[i].scrollHeight + "px";
                list[i].classList.add('categories-filter__list--active');
                btns[i].classList.add('categories-filter__btn--active');
            }
        });
    })
};

export default categoriesFilter;
