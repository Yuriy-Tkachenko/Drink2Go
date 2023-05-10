const filterForm = document.querySelector('.catalog__form');
const radioInputs = filterForm.querySelectorAll('.filter-item__option-input');
const switchInputs = filterForm.querySelectorAll('.filter-item__option-switch-input');

switchInputs.forEach( element => {
  element.addEventListener('click', function() {
    if(element.hasAttribute('checked')) {
      element.removeAttribute('checked');
    } else {
      element.setAttribute('checked', 'true');
    }
  })
})

radioInputs.forEach( element => {
  element.addEventListener('click', function() {
    const noMatterInput = filterForm.querySelector('.filter-item__option-input[value="no-matter"]');
    const onlyNaturalInput = filterForm.querySelector('.filter-item__option-input[value="only-natural"]');
    const onlyArtificallInput = filterForm.querySelector('.filter-item__option-input[value="only-artifical"]');

    if (this.value == 'no-matter' && noMatterInput.checked) {
      noMatterInput.setAttribute('checked', 'true');
      onlyNaturalInput.removeAttribute('checked');
      onlyArtificallInput.cremoveAttribute('checked');
      return true;
    }

    if (this.value == 'only-natural' && onlyNaturalInput.checked) {
      onlyNaturalInput.setAttribute('checked', 'true');
      noMatterInput.removeAttribute('checked');
      onlyArtificallInput.removeAttribute('checked');
      return true;
    }

    if (this.value == 'only-artifical' && onlyArtificallInput.checked) {
      onlyArtificallInput.setAttribute('checked', 'true');
      noMatterInput.removeAttribute('checked');
      onlyNaturalInput.removeAttribute('checked');
      return true;
    }
  })
})
