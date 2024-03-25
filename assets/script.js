const slides = [
  {
    image: "slide1.jpg",
    tagLine: "Impressions tous formats <span>en boutique et en ligne</span>",
  },
  {
    image: "slide2.jpg",
    tagLine:
      "Tirages haute définition grand format <span>pour vos bureaux et events</span>",
  },
  {
    image: "slide3.jpg",
    tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>",
  },
  {
    image: "slide4.png",
    tagLine: "Autocollants <span>avec découpe laser sur mesure</span>",
  },
];

// pour ajouter les images dans la div banner
const carousel = document.querySelector(".carousel");

slides.forEach((item) => {
  const carousel__item = document.createElement("div");
  carousel__item.classList.add("carousel__item");
  carousel__item.style.backgroundImage = `url(assets/images/slideshow/${item.image})`;
  carousel__item.innerHTML = `<p class="tagline">${item.tagLine}</p>`;
  carousel.appendChild(carousel__item);
});

let left = document.querySelector(".arrow_left");
let right = document.querySelector(".arrow_right");
let activeDot = document.querySelectorAll(".dots");

// étape 3 les bullet point
let dots = document.querySelector(".dots");
for (let i = 0; i < slides.length; i++) {
  let dot = document.createElement("span");
  dot.classList.add("dot");
  dots.appendChild(dot);
}

// au chargement de la page la premiere image et le premier point sont selectionnés
const points = document.querySelectorAll(".dot");
const carousel__item = document.querySelectorAll(".carousel__item");

points[0].classList.add("dot_selected");
carousel__item[0].classList.add("carousel__item__active");

let index = 0;

left.addEventListener("click", function () {
  //console.log(left);
  if (index == 0) {
    index = slides.length - 1;
  } else {
    index--;
  }
  // pour éviter d'avoir plusieurs image selectionner en meme temps
  carousel__item.forEach((item) => {
    item.classList.remove("carousel__item__active");
  });
  points.forEach((point) => {
    point.classList.remove("dot_selected");
  });
  points[index].classList.add("dot_selected");
  carousel__item[index].classList.add("carousel__item__active");
});

right.addEventListener("click", function () {
  if (index == slides.length - 1) {
    index = 0;
  } else {
    index++;
  }
  // pour éviter d'avoir plusieurs image selectionner en meme temps
  carousel__item.forEach((item) => {
    item.classList.remove("carousel__item__active");
  });
  points.forEach((point) => {
    point.classList.remove("dot_selected");
  });
  points[index].classList.add("dot_selected");
  carousel__item[index].classList.add("carousel__item__active");
});
