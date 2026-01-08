import { isEscapeKey } from './utils';

const uploadForm = document.querySelector('.img-upload__form');
const hashtagInput = uploadForm.querySelector('.text__hashtags');
const commentInput = uploadForm.querySelector('.text__description');

const MAX_HASHTAGS = 5;
const MAX_COMMENT = 140;

const ErrorMessage = {
  INVALID: 'введен невалидный хэштег',
  COUNT: 'превышено количество хэштегов',
  REPEAT: 'хэштеги повторяютя'
};

const regularExpressionValidation = /^#[a-za-яё0-9]{1,19}$/i;

const pristine = new Pristine(uploadForm, {
  classTo: 'img-upload__field-wrapper',
  errorClass: 'img-upload__field-wrapper--error',
  errorTextParent: 'img-upload__field-wrapper'
});

const getHashtags = (value) => value?.trim().split(' ').filter((item) => !!item) ?? [];

const isValidHashtags = (value) => {
  const hastags = getHashtags(value);
  return hastags.every((item) => regularExpressionValidation.test(item));
};

const isValidCountHashtags = (value) => getHashtags(value).length <= MAX_HASHTAGS;

const isValidCountComment = (value) => {
  if(value === '') {
    return true;
  }

  return value.length <= MAX_COMMENT;
};

const isUniqueHashtags = (value) => {
  const hastags = getHashtags(value).map((item) => item.toLowerCase());
  return hastags.length === (new Set(hastags)).size;
};

const checksValidityHashtags = (value) => {
  if(value === '') {
    return true;
  }

  return isValidHashtags(value) && isValidCountHashtags(value) && isUniqueHashtags(value);
};

const getErrorText = (value) => {
  if (!isValidHashtags(value)) {
    return ErrorMessage.INVALID;
  }

  if (!isValidCountHashtags(value)) {
    return ErrorMessage.COUNT;
  }

  if (!isUniqueHashtags(value)) {
    return ErrorMessage.REPEAT;
  }
};

pristine.addValidator(hashtagInput, checksValidityHashtags, getErrorText);
pristine.addValidator(commentInput, isValidCountComment, 'длина комментария не может составлять больше 140 символов');

uploadForm.addEventListener('submit', (evt) => {
  evt.preventDefault();
  pristine.validate();
});

hashtagInput.addEventListener('keydown', (evt) => {
  if(isEscapeKey(evt)) {
    evt.stopPropagation();
  }
});

commentInput.addEventListener('keydown', (evt) => {
  if(isEscapeKey(evt)) {
    evt.stopPropagation();
  }
});
