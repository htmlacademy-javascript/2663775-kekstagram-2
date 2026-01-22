const scaleControlValue = document.querySelector('.scale__control--value');
const scaleControlSmaller = document.querySelector('.scale__control--smaller');
const scaleControlBigger = document.querySelector('.scale__control--bigger');
const img = document.querySelector('.img-upload__preview img');

const SCALE_STEP = 0.25;
let scale = 1;

const resizeImage = () => {
  if (scale > SCALE_STEP) {
    scale -= SCALE_STEP;
    img.style.transform = `scale(${scale})`;
    scaleControlValue.value = `${scale * 100}%`;
  }
};

const enlargeImages = () => {
  if (scale < 1) {
    scale += SCALE_STEP;
    img.style.transform = `scale(${scale})`;
    scaleControlValue.value = `${scale * 100}%`;
  }
};

const resetScaleImages = () => {
  img.style.transform = `scale(${1})`;
  scaleControlValue.value = `${100}%`;
};


scaleControlSmaller.addEventListener('click', resizeImage);
scaleControlBigger.addEventListener('click', enlargeImages);

export { resetScaleImages };

