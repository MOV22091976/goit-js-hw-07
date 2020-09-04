'use strict';

const input = document.querySelector('input#name-input');

const span = document.querySelector('span#name-output');

input.addEventListener('input', (event) => {
  event.target.value === ''
    ? (span.textContent = 'незнакомец')
    : (span.textContent = event.target.value);
});
