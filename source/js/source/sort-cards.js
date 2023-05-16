import { createCards } from "./products.js";

const productItems = document.getElementsByClassName('result-list__item');
const productList = document.querySelector('.result-list');
const sort = document.querySelector('.result-sort');
const sortItems = sort.querySelectorAll('.dropdown-group__list-item');
const checkedItem = sort.querySelector('.dropdown-group__input');

function checkSortValues() {
  sortItems.forEach(function(item) {
    item.addEventListener('click', function() {
      if (checkedItem.value == 'default') {
        productList.innerHTML = '';

        createCards();
      } else if (checkedItem.value == 'expensive') {
        let sorted = [...productItems].sort(function(a, b) {
          return b.dataset.price - a.dataset.price ;
        })

        productList.innerHTML = '';
        for (let li of sorted) {
          productList.appendChild(li);
        }
      } else if (checkedItem.value == 'cheap') {
        let sorted = [...productItems].sort(function(a, b) {
          return a.dataset.price - b.dataset.price;
        })

        productList.innerHTML = '';
        for (let li of sorted) {
          productList.appendChild(li);
        }
      } else if (checkedItem.value == 'high-raiting') {
        let sorted = [...productItems].sort(function(a, b) {
          return a.dataset.raiting - b.dataset.raiting;
        })

        productList.innerHTML = '';
        for (let li of sorted) {
          productList.appendChild(li);
        }
      }
    })
  })
}

checkSortValues();