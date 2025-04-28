//Carrosel - Destaque de carros

let index = 0;
const slide = document.getElementById("carousel-slide");
const images = slide.querySelectorAll("img");
const imageWidth = 500; // Aqui é a largura do container
//Função para que o carrosel se movimente ao clicar o botão
function moveSlide(direction) {
  index += direction;
  if (index < 0) index = images.length - 1;
  if (index >= images.length) index = 0;
  slide.style.transform = `translateX(${-index * imageWidth}px)`;
}

//Efeito - Cabeçalho
window.addEventListener("scroll", function () {
  let header = this.document.querySelector("#header");
  header.classList.toggle("rolagem", window.scrollY > 99);

  let whatsapp = this.document.querySelector(".btn-whatsapp");
  whatsapp.classList.toggle("wpp", window.scrollY > 400);
});