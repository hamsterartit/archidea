const photo = function () {
  const photoInput = document.querySelector('[data-photo-input]');
  const photoBoxes = document.querySelector('[data-photo-box]');

  let files = [];

  if(photoInput) {
    photoInput.addEventListener('change', function () {
      files = [...files, ...photoInput.files];
      for (let i = 0; i < files.length; i++) {
        const fileReader = new FileReader();
        photoBoxes.innerHTML = '';
        attachPhoto(files[i], fileReader);
      }
    });
  }

  function attachPhoto(file, fileReader, box = null) {
    fileReader.readAsDataURL(file);
    fileReader.onload = function () {
      const boxElement = document.createElement('span');
      boxElement.classList.add('photo-thumbs__media');
      const imgElement = document.createElement('img');
      imgElement.src = fileReader.result;
      boxElement.appendChild(imgElement);
      photoBoxes.appendChild(boxElement);
    };
  }
};

export default photo;
