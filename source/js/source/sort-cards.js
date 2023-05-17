const productList = document.querySelector('.result-list');
const sort = document.querySelector('.result-sort');
const sortItems = sort.querySelectorAll('.dropdown-group__list-item');
const checkedItem = sort.querySelector('.dropdown-group__input');

function checkSortValues() {
  sortItems.forEach(function(item) {
    item.addEventListener('click', function() {
      const productItems = document.getElementsByClassName('result-list__item');

      if (checkedItem.value == 'default') {
        for (let li of productItems) {
          productList.appendChild(li);
        }
      } else if (checkedItem.value == 'expensive') {
        let sortedByMaxPrice = [...productItems].sort(function(a, b) {
          return b.dataset.price - a.dataset.price ;
        })
        productList.innerHTML = '';
        for (let li of sortedByMaxPrice) {
          productList.appendChild(li);
        }
      } else if (checkedItem.value == 'cheap') {
        let sortedByMinPrice = [...productItems].sort(function(a, b) {
          return a.dataset.price - b.dataset.price;
        })
        productList.innerHTML = '';
        for (let li of sortedByMinPrice) {
          productList.appendChild(li);
        }
      } else if (checkedItem.value == 'high-raiting') {
        let sortedByRaiting = [...productItems].sort(function(a, b) {
          return a.dataset.raiting - b.dataset.raiting;
        })
        productList.innerHTML = '';
        for (let li of sortedByRaiting) {
          productList.appendChild(li);
        }
      }
    })
  })
}

checkSortValues();
