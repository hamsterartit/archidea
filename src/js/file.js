const file = function () {
  const fileInput = document.querySelector('[data-file-attach]');
  const fileName = document.querySelector('[data-file-name]');

  if (fileInput) {
    fileInput.addEventListener('change', (e) => {
      fileName.innerHTML = fileInput.files[0].name;
    });
  }
};

export default file;
