import { isEscapeKey } from './utils';

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
}


uploadFileControl.addEventListener('change', () => {
  photoEditorForm.classList.remove('hidden');
  pageBody.classList.add('modal-open');
  photoEditorResetBtn.addEventListener('click', closePhotoEditor);
  document.addEventListener('keydown', onEscapeKeydown);
});

