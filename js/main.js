import { createPhotos } from './create-photos';
import { renderMiniatures } from './thumbails';
import './upload-thumbail-form.js';
import './form-validation.js';

const photos = createPhotos();
renderMiniatures(photos);

