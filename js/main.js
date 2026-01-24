import { renderMiniatures } from './thumbails';
import { closePhotoEditor } from './upload-thumbail-form.js';
import { setUserFormSubmit } from './form-validation.js';
import { showTimeError } from './show-error-message.js';
import { getData } from './api.js';
import { initFilters } from './filter.js';
import { initUploadFile } from './avatar.js';

getData()
  .then((images) => {
    renderMiniatures(images);
    initFilters(images);
  })
  .catch(() => {
    showTimeError();
  });

initUploadFile();
setUserFormSubmit(closePhotoEditor);
