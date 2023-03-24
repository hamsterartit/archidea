const video = function () {
  const muteBtns = document.querySelectorAll('[data-video-mute]');
  const playBtns = document.querySelectorAll('[data-video-play]');
  const videos = document.querySelectorAll('[data-video]');

  playBtns.forEach((btn, i) => {
    btn.addEventListener('click', () => {
      if (videos[i].paused) {
        videos[i].play();
        videos[i].classList.add('_active');
      } else {
        videos[i].pause();
          videos[i].classList.remove('_active');
      }
    });
  });

  muteBtns.forEach((btn, i) => {
    btn.addEventListener('click', () => {
      const muteIcon = btn.querySelector('[data-icon-mute]');
      const unmuteIcon = btn.querySelector('[data-icon-unmute]');

      if (videos[i].muted) {
        videos[i].muted = false;
        muteIcon.classList.remove('_active');
        unmuteIcon.classList.add('_active');
      } else {
        videos[i].muted = true;
        unmuteIcon.classList.remove('_active');
        muteIcon.classList.add('_active');
      }
    });
  });
};

export default video;
