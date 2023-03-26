const tabs = function () {
  const tabs = document.querySelectorAll('[data-tab-btn]');
  const goToBtns = document.querySelectorAll('[data-go-to-tab]');
  const tabsContent = document.querySelectorAll('[data-tabs-content]');
  const tabsParent = document.querySelector('[data-tabs]');

  function hideTabContent() {
    tabsContent.forEach((item) => {
      item.classList.remove('_active');
    });

    tabs.forEach((item) => {
      item.classList.remove('_active');
    });
  }

  function showTabContent(i = 0) {
    tabsContent[i].classList.add('_active');
    tabs[i].classList.add('_active');
  }

  if (tabs.length > 0) {
    hideTabContent();
    showTabContent();

    tabsParent.addEventListener('click', (e) => {
      const target = e.target;

      if (target && target.hasAttribute('data-tab-btn')) {
        tabs.forEach((item, i) => {
          if (target === item) {
            hideTabContent();
            showTabContent(i);
          }
        });
      }
    });
  }

  goToBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      const idx = +btn.dataset.goToTab;
      hideTabContent();
      showTabContent(idx);
    });
  });
};

export default tabs;
