import products from "./mocks.js";
const productList = document.querySelector('.result-list');

function generateProduct() {
  const cards = [];
  for (let i = 0; i < products.length; i++) {
    const productItem = document.createElement('li');
    productItem.classList.add('result-list__item');
    productItem.dataset.raiting = `${products[i].infos.raiting}`;
    productItem.dataset.price = `${products[i].infos.price}`;
    productItem.innerHTML = `
      <a class="result-list__item-link" href="#">
        <picture>
          <source type="image/webp" srcset="${products[i].image.webp1x} 1x, ${products[i].image.webp2x} 2x">
          <img class="result-list__picture" src="${products[i].image.src}" srcset="${products[i].image.srcset}" alt="фотография напитка декаф флэт уайт" width="130" height="188">
        </picture>
      </a>
      <a class="result-list__name" href="#">${products[i].name}</a>
      <p class="result-list__text">${products[i].description}</p>
      <div class="order-panel">
        <span class="order-panel__prise prise">${products[i].infos.price} ₽</span>
        <button class="order-panel__order-button order-button" type="button">В корзину
          <svg class="order-panel__button-icon" width="20" height="16">
            <use href="img/icons/stack.svg#add-to-basket"></use>
          </svg>
        </button>
      </div>
    `
    cards.push(productItem);
  }

  return cards;
}

const cardsArr = generateProduct();

function createCards() {
  cardsArr.forEach((elem) => {
    productList.appendChild(elem);
  })
}

createCards();

export { createCards };
