const faq = function () {
  const accordionItems = document.querySelectorAll('[data-accordion]');

  accordionItems.forEach((item) => {
    const header = item.querySelector('[data-accordion-btn]');
    const content = item.querySelector('[data-accordion-content]');

    header.addEventListener('click', () => {
      const isActive = item.classList.contains('_active');

      closeAllItems();

      if (!isActive) {
        item.classList.add('_active');
        content.style.maxHeight = content.scrollHeight + 'px'; // calculate max height
      }
    });
  });

  function closeAllItems() {
    accordionItems.forEach((item) => {
      const content = item.querySelector('[data-accordion-content]');

      if (item.classList.contains('_active')) {
        item.classList.remove('_active');
        content.style.maxHeight = '0';
      }
    });
  }
};

export default faq;
