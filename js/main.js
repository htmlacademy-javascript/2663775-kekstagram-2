import { createPhotos } from './create-photos';
import { renderMiniatures } from './thumbails';

const photos = createPhotos();
renderMiniatures(photos);

