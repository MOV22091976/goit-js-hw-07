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
  counterValue += 1;
  span.textContent = counterValue;
};
const decrement = () => {
  counterValue -= 1;
  span.textContent = counterValue;
};

buttonIncrement.addEventListener('click', increment);
buttonDecrement.addEventListener('click', decrement);
