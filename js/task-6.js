'use strict';

const input = document.querySelector('#validation-input');

input.addEventListener('blur', (event) => {
  if (event.target.value.length === 6) {
    event.target.classList.add('valid');
    event.target.classList.remove('invalid');
    return;
  } else {
    event.target.classList.add('invalid');
    event.target.classList.remove('valid');
  }
});
