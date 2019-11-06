const imgBox = document.querySelector('.img-box');
const currentImage = document.querySelector('.current-image');
const overlay = document.querySelector('.overlay');
const btn = document.querySelector('.btn');
const thumbnails = document.querySelector('.thumbnails');

for (let i = 1; i <= 5; i++) {
  const newImg = document.createElement('img');
  newImg.setAttribute('src', './images/pic' + [i] + '.jpg');
  thumbnails.appendChild(newImg);
}