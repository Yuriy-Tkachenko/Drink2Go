import products from"./mocks.js";import{createCards}from"./products.js";const productList=document.querySelector(".result-list"),filterForm=document.querySelector(".catalog__form"),switchInputs=filterForm.querySelectorAll(".filter-item__option-switch-input"),submitButton=filterForm.querySelector(".submit-button"),resetButton=filterForm.querySelector(".reset-button"),sliderElement=document.querySelector(".range-filter__slider");function checkPriceValues(e,t){return t>=e[0]&&t<=e[1]}submitButton.addEventListener("click",(function(e){e.preventDefault();const t=Array.from(filterForm.querySelectorAll(".filter-item__option-switch-input:checked"),(e=>e.value)),r=Array.from(filterForm.querySelectorAll(".filter-item__option-input:checked"),(e=>e.value)),i=sliderElement.noUiSlider.get();productList.innerHTML=products.filter((e=>checkPriceValues(i,e.infos.price)&&t.includes(e.infos.maker)&&r.includes(e.infos.milk)||checkPriceValues(i,e.infos.price)&&t.includes(e.infos.maker)&&r.includes(e.infos.important))).map((e=>`\n      <li class="result-list__item" data-raiting=${e.infos.raiting}>\n        <a class="result-list__item-link" href="#">\n          <picture>\n            <source type="image/webp" srcset="${e.image.webp1x} 1x, ${e.image.webp2x} 2x">\n            <img class="result-list__picture" src="${e.image.src}" srcset="${e.image.srcset}" alt="фотография напитка декаф флэт уайт" width="130" height="188">\n          </picture>\n        </a>\n        <a class="result-list__name" href="#">${e.name}</a>\n        <p class="result-list__text">${e.description}</p>\n        <div class="order-panel">\n          <span class="order-panel__prise prise">${e.infos.price} ₽</span>\n          <button class="order-panel__order-button order-button" type="button">В корзину\n            <svg class="order-panel__button-icon" width="20" height="16">\n              <use href="img/icons/stack.svg#add-to-basket"></use>\n            </svg>\n          </button>\n        </div>\n      </li>\n    `)).join("")})),resetButton.addEventListener("click",(function(){sliderElement.noUiSlider.reset(),switchInputs.forEach((e=>{e.removeAttribute("checked")})),productList.innerHTML="",createCards()}));