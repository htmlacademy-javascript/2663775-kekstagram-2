const sliderContainer = document.querySelector('.img-upload__effect-level');
const sliderElement = sliderContainer.querySelector('.effect-level__slider');
const valueElement = sliderContainer.querySelector('.effect-level__value');
const effectContainer = document.querySelector('.img-upload__effects');
const img = document.querySelector('.img-upload__preview img');

const EFFECT_MAX_LEVEL = 100;

const getNoneStyleFilter = () => 'none';
const getChromeStyleFilter = (value) => `grayscale(${value})`;
const getSepiaStyleFilter = (value) => `sepia(${value})`;
const getMarvinStyleFilter = (value) => `invert(${value}%)`;
const getPhobosStyleFilter = (value) => `blur(${value}px)`;
const getHeatStyleFilter = (value) => `brightness(${value})`;

const styleFilterEffects = {
  none: getNoneStyleFilter,
  chrome: getChromeStyleFilter,
  sepia: getSepiaStyleFilter,
  marvin: getMarvinStyleFilter,
  phobos: getPhobosStyleFilter,
  heat: getHeatStyleFilter,
};

valueElement.value = EFFECT_MAX_LEVEL;
let currentEffect = 'none';

noUiSlider.create(sliderElement, {
  range: {
    min: 0,
    max: 100,
  },
  start: 100,
  step: 1,
  connect: 'lower',
});

sliderElement.noUiSlider.on('update', () => {
  const value = sliderElement.noUiSlider.get();
  valueElement.value = value;

  const filterValue = styleFilterEffects[currentEffect](value);
  img.style.filter = filterValue;
});

const hideSlider = () => {
  sliderContainer.classList.add('hidden');
};

const showSlider = () => {
  sliderContainer.classList.remove('hidden');
};

effectContainer.addEventListener('change', (evt) => {
  currentEffect = evt.target.value;

  if (currentEffect === 'none') {
    img.style.filter = 'none';
    hideSlider();
  } else {
    showSlider();

    switch (currentEffect) {
      case 'chrome':
      case 'sepia':
        sliderElement.noUiSlider.updateOptions({
          range: { min: 0, max: 1 },
          start: 1,
          step: 0.1,
        });
        break;
      case 'marvin':
        sliderElement.noUiSlider.updateOptions({
          range: { min: 0, max: 100 },
          start: 100,
          step: 1,
        });
        break;
      case 'phobos':
        sliderElement.noUiSlider.updateOptions({
          range: { min: 0, max: 3 },
          start: 3,
          step: 0.1,
        });
        break;
      case 'heat':
        sliderElement.noUiSlider.updateOptions({
          range: { min: 1, max: 3 },
          start: 3,
          step: 0.1,
        });
        break;
    }

    const startValue = sliderElement.noUiSlider.get();
    img.style.filter = styleFilterEffects[currentEffect](startValue);
  }
});
