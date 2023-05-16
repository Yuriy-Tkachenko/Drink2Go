const sliderElement = document.querySelector('.range-filter__slider');
const inputMinPrice = document.getElementById('min-price');
const inputMaxPrice = document.getElementById('max-price');
const inputs = [inputMinPrice, inputMaxPrice];

noUiSlider.create(sliderElement, {
  start: [0, 500],
  connect: true,
  step: 1,
  range: {
    min: 0,
    max: 500,
  }
})

function sliderValuesInit () {
  sliderElement.noUiSlider.on('update', function(values, handle) {
    inputs[handle].value = Math.round(values[handle]);
  })
}

sliderValuesInit();
