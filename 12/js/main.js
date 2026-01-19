import { createPhotos } from './create-photos';
import { renderMiniatures } from './thumbails';
import './upload-thumbail-form.js';
import './form-validation.js';
import './image-resizing.js';
import './effects-slider.js';

const photos = createPhotos();
renderMiniatures(photos);

