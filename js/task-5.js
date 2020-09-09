'use strict';

const input = document.querySelector('input#name-input');

const span = document.querySelector('span#name-output');

input.addEventListener('input', (event) => {
  const targetValue = event.target.value;
  span.textContent = targetValue === '' ? 'незнакомец' : targetValue;
});
