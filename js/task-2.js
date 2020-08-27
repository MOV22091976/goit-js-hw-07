'use strict';
const ulRef = document.querySelector('#ingredients');

ingredients.forEach((elem) => {
  console.log(elem);
  const li = document.createElement('li');
  ulRef.append(li);
  li.textContent = elem;
});
