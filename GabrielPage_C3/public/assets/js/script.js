let index = 0;
const slide = document.getElementById("carousel-slide");
const images = slide.querySelectorAll("img");
const imageWidth = 500; // largura do container

function moveSlide(direction) {
  index += direction;
  if (index < 0) index = images.length - 1;
  if (index >= images.length) index = 0;
  slide.style.transform = `translateX(${-index * imageWidth}px)`;
}
