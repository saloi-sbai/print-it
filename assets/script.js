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

const bannerImg = document.querySelector(".banner-img");
const arrowLeft = document.querySelector(".arrow_left");
const arrowRight = document.querySelector(".arrow_right");
const dots = document.querySelectorAll(".dot"); // Sélectionnez tous les points

let currentIndex = 0;

// Fonction pour mettre à jour les points indicateurs
function updateDots(index) {
  dots.forEach((dot, i) => {
    if (i === index) {
      dot.classList.add("dot_selected"); // Ajoutez la classe pour le point actuel
    } else {
      dot.classList.remove("dot_selected"); // Supprimez la classe pour les autres points
    }
  });
}

// Fonction pour mettre à jour les points indicateurs, l'image et le texte
function updateCarousel(index, direction) {
      //correction du bug pour la première et la dernière image
      if (currentIndex === -1 && direction === 'left') {
        currentIndex = slides.length - 1;
    } else if (currentIndex === slides.length && direction === 'right') {
        currentIndex = 0;
    }

    // Mettre à jour l'image
    const imagePath = `assets/images/slideshow/${slides[currentIndex].image}`;
    bannerImg.src = imagePath;
    bannerImg.alt = `Slide ${currentIndex + 1}`;

    // Mettre à jour le texte
    const tagLine = slides[currentIndex].tagLine;
    document.querySelector('p').innerHTML = tagLine;

    console.log(`Clic sur la flèche ${direction}`);
}











// au chargement de la page la premiere image et le premier point sont selectionnés
const points = document.querySelectorAll(".dot");
const carousel__item = document.querySelectorAll(".carousel__item");

points[0].classList.add("dot_selected");
carousel__item[0].classList.add("carousel__item__active");

let index = 0;

left.addEventListener("click", function () {
  console.log(left);
  //je recupere l'indexe actuel, si c'est le premier  on va a la derniere
  if (index == 0) {
    index = slides.length - 1;
  } else {
    index--;
  }
  // pour éviter d'avoir plusieurs image selectionner en meme temps
  // pour afficher les images
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


