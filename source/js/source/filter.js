import products from "./mocks.js";
import {createCards} from "./products.js";

// Product elements
const productList = document.querySelector('.result-list');
// Filter
const filterForm = document.querySelector('.catalog__form');
const switchInputs = filterForm.querySelectorAll('.filter-item__option-switch-input');
const submitButton = filterForm.querySelector('.submit-button');
const resetButton = filterForm.querySelector('.reset-button');
const sliderElement = document.querySelector('.range-filter__slider');
const radioInputs = filterForm.querySelectorAll('.filter-item__option-input');
//Sort
const dropdownButton = document.querySelector('.dropdown');
const checkedItem = document.querySelector('.dropdown-group__input');
const sortItems = document.querySelectorAll('.dropdown-group__list-item');

function checkPriceValues(range, number) {
  if (number >= range[0] && number <= range[1]) {
    return true;
  } else {
    return false;
  }
}

submitButton.addEventListener('click', function(evt) {
  evt.preventDefault();

  const selectedInputsValue = Array.from(filterForm.querySelectorAll('.filter-item__option-switch-input:checked'), n => n.value);
  const selectedRadioValue = Array.from(filterForm.querySelectorAll('.filter-item__option-input:checked'), n => n.value);
  const priceValues = sliderElement.noUiSlider.get();

  productList.innerHTML = products
    .filter(product =>
      checkPriceValues(priceValues, product.infos.price) && selectedInputsValue.includes(product.infos.maker) && selectedRadioValue.includes(product.infos.milk) ||
      checkPriceValues(priceValues, product.infos.price) && selectedInputsValue.includes(product.infos.maker) && selectedRadioValue.includes(product.infos.important))
    .map(products => `
      <li class="result-list__item" data-raiting=${products.infos.raiting} data-price=${products.infos.price}>
        <a class="result-list__item-link" href="#">
          <picture>
            <source type="image/webp" srcset="${products.image.webp1x} 1x, ${products.image.webp2x} 2x">
            <img class="result-list__picture" src="${products.image.src}" srcset="${products.image.srcset}" alt="фотография напитка декаф флэт уайт" width="130" height="188">
          </picture>
        </a>
        <a class="result-list__name" href="#">${products.name}</a>
        <p class="result-list__text">${products.description}</p>
        <div class="order-panel">
          <span class="order-panel__prise prise">${products.infos.price} ₽</span>
          <button class="order-panel__order-button order-button" type="button">В корзину
            <svg class="order-panel__button-icon" width="20" height="16">
              <use href="img/icons/stack.svg#add-to-basket"></use>
            </svg>
          </button>
        </div>
      </li>
    `)
    .join('');
})

resetButton.addEventListener('click', function() {
  sliderElement.noUiSlider.reset();
  switchInputs.forEach(element => {
    element.removeAttribute('checked');
  })

  for (let i = 0; i < radioInputs.length; i++) {
    radioInputs[i].removeAttribute('checked');
    radioInputs[0].setAttribute('checked', 'true');
  }

  dropdownButton.textContent = 'по умолчанию';
  checkedItem.value = 'default';
  for (let i = 0; i < sortItems.length; i++) {
    sortItems[i].classList.remove('dropdown-group__list-item--checked');
    sortItems[0].classList.add('dropdown-group__list-item--checked');
  }

  productList.innerHTML = '';
  createCards();
})
