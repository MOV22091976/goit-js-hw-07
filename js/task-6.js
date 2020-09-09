'use strict';

const input = document.querySelector('#validation-input');

input.addEventListener('blur', (event) => {
  if (event.target.value.length === +input.dataset.length) {
    event.target.classList.add('valid');
    event.target.classList.remove('invalid');
    return;
  }
  event.target.classList.add('invalid');
  event.target.classList.remove('valid');
});
