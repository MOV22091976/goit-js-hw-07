'use strict';

let counterValue = 0;

const buttonIncrement = document.querySelector(
  'button[data-action="increment"]'
);
const buttonDecrement = document.querySelector(
  'button[data-action="decrement"]'
);
const span = document.querySelector('#value');

const increment = () => {
  span.textContent = counterValue += 1;
};
const decrement = () => {
  span.textContent = counterValue -= 1;
};

buttonIncrement.addEventListener('click', increment);
buttonDecrement.addEventListener('click', decrement);
