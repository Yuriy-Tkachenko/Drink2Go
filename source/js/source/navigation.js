// Pagination
const buttonNavActive = document.querySelector('.result-navigation__button--active');
const buttonNavNext = document.querySelector('.result-navigation__button-next');
const buttonNavBack = document.querySelector('.result-navigation__button-back');
// Main navigation
const siteNavigation = document.querySelector('.site-navigation');
const buttonClose = document.querySelector('.close-button');
const buttonOpen = document.querySelector('.open-button');
// Custom select
const dropDownButton = document.querySelector('.dropdown');
const dropDownList = document.querySelector('.dropdown-group__list');
const dropDownItems = dropDownList.querySelectorAll('.dropdown-group__list-item');
const dropDownInput = document.querySelector('.dropdown-group__input');
const dropDownButtonIcon = document.querySelector('.dropdown-group__sort-button');

const getMainNavigation = () => {
  siteNavigation.classList.remove('site-navigation--nojs');
  buttonClose.classList.add('button-disable');
  buttonOpen.classList.remove('button-disable');

  buttonOpen.addEventListener('click', function() {
    if(siteNavigation.classList.contains('site-navigation--closed')) {
      siteNavigation.classList.remove('site-navigation--closed');
      buttonOpen.classList.add('button-disable');
      buttonClose.classList.remove('button-disable');
    }
  })

  buttonClose.addEventListener('click', function() {
    siteNavigation.classList.add('site-navigation--closed');
    buttonClose.classList.add('button-disable');
    buttonOpen.classList.remove('button-disable');
  })
}

const getCustomSelect = () => {
  dropDownButton.addEventListener('click', function() {
    if(dropDownList.classList.contains('visually-hidden')) {
      dropDownList.classList.remove('visually-hidden');
      dropDownButtonIcon.classList.add('dropdown-group__list-item--checked');
    } else {
      dropDownList.classList.add('visually-hidden');
      dropDownButtonIcon.classList.remove('dropdown-group__list-item--checked');
    }
  })

  dropDownItems.forEach(function(listItem) {
    listItem.addEventListener('click', function(evt) {
      evt.stopPropagation();

      dropDownButton.innerText = this.innerText;
      dropDownInput.value = this.dataset.value;

      for(let i = 0; i < dropDownItems.length; i++) {
        dropDownItems[i].classList.remove('dropdown-group__list-item--checked');
      }

      this.classList.add('dropdown-group__list-item--checked');

      dropDownList.classList.add('visually-hidden');
      dropDownButtonIcon.classList.remove('dropdown-group__list-item--checked');
    })
  })

  document.addEventListener('click', function(evt) {
    if(evt.target !== dropDownButton) {
      dropDownList.classList.add('visually-hidden');
      dropDownButtonIcon.classList.remove('dropdown-group__list-item--checked');
    }
  })

  document.addEventListener('keydown', function(evt) {
    if(evt.key === 'Tab' || evt.key === 'Escape') {
      dropDownList.classList.add('visually-hidden');
      dropDownButtonIcon.classList.remove('dropdown-group__list-item--checked');
    }
  })
}

const getPagination = () => {
  if(buttonNavActive.previousElementSibling == buttonNavBack) {
    buttonNavBack.remove();
  }

  if(buttonNavActive.nextElementSibling == buttonNavNext) {
    buttonNavNext.remove();
  }
}

getMainNavigation();
getCustomSelect();
getPagination();

export { getMainNavigation, getCustomSelect, getPagination }
