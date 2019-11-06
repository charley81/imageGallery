const imgBox = document.querySelector('.img-box');
const currentImage = document.querySelector('.current-image');
const overlay = document.querySelector('.overlay');
const btn = document.querySelector('.btn');
const thumbnails = document.querySelector('.thumbnails');

for (let i = 1; i <= 5; i++) {
  const newImage = document.createElement('img');
  newImage.setAttribute('src', './images/pic' + [i] + '.jpg');
  thumbnails.appendChild(newImage);

  newImage.onclick = function (e) {
    const imageSrc = e.target.getAttribute('src');
    displayImage(imageSrc);

    function displayImage() {
      currentImage.setAttribute('src', imageSrc);
    }
  }
}