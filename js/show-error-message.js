const errorMessage = document.querySelector('#error').content.querySelector('.error');

const showErrorMessages = () => {
  const errorElement = errorMessage.cloneNode(true);

  const closeButton = errorElement.querySelector('.error__button');

  const closeError = () => {
    if (errorElement && errorElement.parentNode) {
      errorElement.parentNode.removeChild(errorElement);
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
    if (!evt.composedPath().includes(errorElement.querySelector('.error__inner'))) {
      closeError();
    }
  }

  document.body.appendChild(errorElement);

  closeButton.addEventListener('click', closeError);
  document.addEventListener('keydown', isEscapeKey);
  document.addEventListener('click', onOutsideClick);
};

export { showErrorMessages };
