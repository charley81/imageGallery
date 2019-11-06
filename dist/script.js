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

btn.onclick = function () {
  const btnClass = btn.getAttribute('class');
  if (btnClass === 'dark') {
    btn.setAttribute('class', 'light');
    btn.textContent = 'Lighten';
    overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';
  } else {
    btn.setAttribute('class', 'dark');
    btn.textContent = 'Darken';
    overlay.style.backgroundColor = 'rgba(0,0,0,0)';
  }
}