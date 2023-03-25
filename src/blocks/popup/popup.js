const popup = function () {
  const body = document.querySelector('body');
  const openPopupButton = document.querySelectorAll('[data-popup-open]');
  const closePopupButton = document.querySelectorAll('[data-popup-close]');
  const popups = document.querySelectorAll('.popup');

  openPopupButton.forEach((button) => {
    button.addEventListener('click', () => {
      popups.forEach((popup) => {
        popup.classList.remove('_active');
      });
      const popupSelector = button.dataset.popupOpen;
      const popup = document.querySelector(`#${popupSelector}`);
      openPopup(popup);
    });
  });

  closePopupButton.forEach((button) => {
    button.addEventListener('click', () => {
      const popupSelector = button.dataset.popupClose;
      const popup = document.querySelector(`#${popupSelector}`);
      closePopup(popup);
    });
  });

  function openPopup(popup) {
    if (popup === null) return;
    popup.classList.add('_active');
    body.classList.add('_locked');
  }

  function closePopup(popup) {
    if (popup === null) return;
    popup.classList.remove('_active');
    body.classList.remove('_locked');
  }

  const radioButtons = document.querySelectorAll('[name="reg-type"]');
  const mailField = document.querySelector('[data-mail]');
  const phoneField = document.querySelector('[data-phone]');

  radioButtons.forEach((button) => {
    button.addEventListener('change', () => {
      const fieldSelector = button.getAttribute('id');

      if (fieldSelector === 'mail') {
        phoneField.setAttribute('hidden', '');
        mailField.removeAttribute('hidden');
      } else if (fieldSelector === 'phone') {
        mailField.setAttribute('hidden', '');
        phoneField.removeAttribute('hidden');
      }
    });
  });

  const forms = document.querySelectorAll('[data-popup-form]');

  forms.forEach(form => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
    })
  })
};

export default popup;
