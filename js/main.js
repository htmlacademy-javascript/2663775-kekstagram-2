// import { createPhotos } from './create-photos';
import { renderMiniatures } from './thumbails';
import { closePhotoEditor } from './upload-thumbail-form.js';
import './upload-thumbail-form.js';
import { setUserFormSubmit } from './form-validation.js';
import './image-resizing.js';
import './effects-slider.js';


// const photos = createPhotos();
// renderMiniatures(photos);

fetch('https://31.javascript.htmlacademy.pro/kekstagram/data')
  .then((response) => response.json())
  .then((images) => {
    renderMiniatures(images);
  });

setUserFormSubmit(closePhotoEditor);
