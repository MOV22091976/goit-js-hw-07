'use strict';

const input = document.querySelector('input#name-input');

const span = document.querySelector('span#name-output');

input.addEventListener('input', (event) => {
  const targetValue = event.target.value;
  targetValue === ''
    ? (span.textContent = 'незнакомец')
    : (span.textContent = targetValue);
});
