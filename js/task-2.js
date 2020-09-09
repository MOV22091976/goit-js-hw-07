'use strict';

const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];
const ulRef = document.querySelector('#ingredients');

const newIngredients = ingredients.map((elem) => {
  const li = document.createElement('li');
  li.textContent = elem;
  return li;
});

ulRef.append(...newIngredients);
