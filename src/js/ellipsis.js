const ellipsis = function () {
  const blocks = document.querySelectorAll('[data-feedback-ellipsis]');

  blocks.forEach((block) => {
    block.innerHTML = truncateText(block.textContent, 200);
  });

  function truncateText(text, maxLength) {
    if (text.length > maxLength) {
      return text.substring(0, maxLength - 3) + '…';
    } else {
      return text;
    }
  }
};

export default ellipsis;
