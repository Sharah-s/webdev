const images = document.querySelectorAll('.slider-image');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');

let currentImage = 0;

function setActiveImage() {
  images.forEach(image => {
    image.classList.remove('active');
  });
  images[currentImage].classList.add('active');
}

function slideNext() {
  currentImage++;
  if (currentImage >= images.length) {
    currentImage = 0;
  }
  setActiveImage();
}

function slidePrev() {
  currentImage--;
  if (currentImage < 0) {
    currentImage = images.length - 1;
  }
  setActiveImage();
}

setActiveImage();
prev.addEventListener('click', slidePrev);
//for reviews
$(document).ready(function () {
  $('.review-carousel').slick({
    dots: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [{
      breakpoint: 768,
      settings: {
        dots: false
      }
    }]
  });
});