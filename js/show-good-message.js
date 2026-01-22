const goodMessage = document.querySelector('#success').content.querySelector('.success');

const showGoodMessages = () => {
  const goodElement = goodMessage.cloneNode(true);

  const closeButton = goodElement.querySelector('.success__button');

  const closeError = () => {
    if (goodElement && goodElement.parentNode) {
      goodElement.parentNode.removeChild(goodElement);
      document.removeEventListener('keydown', isEscapeKey);
      document.removeEventListener('click', onOutsideClick);
    }
  };

  function isEscapeKey(evt) {
    if(evt.key === 'Escape') {
      closeError();
      evt.stopPropagation();
    }
  }

  function onOutsideClick(evt) {
    if (!evt.composedPath().includes(goodElement.querySelector('.success__inner'))) {
      closeError();
    }
  }

  document.body.appendChild(goodElement);

  closeButton.addEventListener('click', closeError);
  document.addEventListener('keydown', isEscapeKey);
  document.addEventListener('click', onOutsideClick);
};

export { showGoodMessages };
