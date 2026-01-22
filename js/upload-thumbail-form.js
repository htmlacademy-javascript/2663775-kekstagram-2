import { isEscapeKey } from './utils';
import { resetScaleImages } from './image-resizing';
import { resetEffect } from './effects-slider';
import { resetvalidate } from './form-validation';

const uploadForm = document.querySelector('.img-upload__form');
const pageBody = document.querySelector('body');
const uploadFileControl = uploadForm.querySelector('#upload-file');
const photoEditorForm = uploadForm.querySelector('.img-upload__overlay');
const photoEditorResetBtn = photoEditorForm.querySelector('.img-upload__cancel');


const onEscapeKeydown = (evt) => {
  if(isEscapeKey(evt)) {
    evt.preventDefault();
    closePhotoEditor();
  }
};

function closePhotoEditor() {
  photoEditorForm.classList.add('hidden');
  pageBody.classList.remove('modal-open');
  document.removeEventListener('keydown', onEscapeKeydown);
  uploadFileControl.value = '';
  uploadForm.reset();
  resetvalidate();
  resetScaleImages();
  resetEffect();
}

uploadFileControl.addEventListener('change', () => {
  photoEditorForm.classList.remove('hidden');
  pageBody.classList.add('modal-open');
  photoEditorResetBtn.addEventListener('click', closePhotoEditor);
  document.addEventListener('keydown', onEscapeKeydown);
  document.removeEventListener('keydown', onEscapeKeydown);
});

export { closePhotoEditor };
