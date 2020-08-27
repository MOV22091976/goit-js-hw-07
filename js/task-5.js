'use strict';

const input = document.querySelector('input#name-input');

const span = document.querySelector('span#name-output');

input.addEventListener('input', (event) => {
  if (event.target.value === '') {
    span.textContent = span;
  } else {
    span.textContent = event.target.value;
  }
});
