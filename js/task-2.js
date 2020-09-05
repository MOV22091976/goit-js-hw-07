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

ingredients.forEach((elem) => {
  const li = document.createElement('li');
  ulRef.append(li);
  li.textContent = elem;
});
