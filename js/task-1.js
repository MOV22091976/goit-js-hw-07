'use strict';

const categoriesRef = document.querySelectorAll('.item');
console.log(`В списке ${categoriesRef.length} категорий`);

categoriesRef.forEach((item) => {
  console.log(`Категория: ${item.querySelector('h2').textContent}`);
  const ul = item.querySelector('ul');
  console.log(`Количетво элементов: ${ul.children.length}`);
});
