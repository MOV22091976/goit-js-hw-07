'use strict';

const images = [
  {
    url:
      'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url:
      'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url:
      'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const ulRef = document.querySelector('#gallery');

// images.map((el) => {
//   const li = document.createElement('li');
//   const img = document.createElement('img');
//   img.setAttribute('src', `${el.url}`);
//   img.setAttribute('alt', `${el.alt}`);
//   img.style.display = 'flex';
//   img.style.width = '100px';
//   img.style.padding = '10px';

//   // img.style.cssText = `display: flex; padding: 10px; width: 100px;`;
//   li.append(img);
//   ulRef.append(li);
// });

ulRef.insertAdjacentHTML(
  'afterbegin',
  images.reduce(
    (acc, img) =>
      acc +
      `<li style = "display: flex; padding: 10px;"><img alt="${img.alt}" src="${img.url}" width="100px"></li>`,
    ''
  )
);
