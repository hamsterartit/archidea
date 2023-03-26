const faq = function () {
  const btns = document.querySelectorAll('[data-accordion-btn]');
  const accordion = document.querySelectorAll('[data-accordion]');

  let opened;

  btns.forEach((btn, i) => {
    btn.addEventListener('click', function () {
      const panel = this.nextElementSibling;
      if (opened) {
        opened.classList.remove('faq__item--active');
        const openedPanel = opened.querySelector('[data-accordion-content]');
        openedPanel.style.maxHeight = null;
      }
      accordion[i].classList.toggle('faq__item--active');
      if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
      } else {
        panel.style.maxHeight = panel.scrollHeight + 'px';
      }
      opened = accordion[i];
    });
  });
};

export default faq;
