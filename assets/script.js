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

// Fonction pour mettre à jour les points 
function updateDots(index) {
  dots.forEach((dot, i) => {
    if (i === index) {
      dot.classList.add("dot_selected"); // Ajout de classe pour le point actuel
    } else {
      dot.classList.remove("dot_selected"); // Supprimer la classe pour les autres points
    }
  });
}

// Fonction pour mettre à jour les points, l'image et le texte
function updateCarousel(index, direction) {
  if (currentIndex === -1 && direction === "left") {
    currentIndex = slides.length - 1;
  } else if (currentIndex === slides.length && direction === "right") {
    currentIndex = 0;
  }

  // Mettre à jour l'image
  const imagePath = `assets/images/slideshow/${slides[currentIndex].image}`;
  bannerImg.src = imagePath;
  bannerImg.alt = `Slide ${currentIndex + 1}`;

  // Mettre à jour le texte
  const tagLine = slides[currentIndex].tagLine;
  document.querySelector("p").innerHTML = tagLine;

  console.log(`Clic sur la flèche ${direction}`);
}

arrowLeft.addEventListener("click", function () {
  currentIndex = currentIndex - 1;
  updateCarousel(currentIndex, "left"); // pour mettre a jour l'affichage du carousel
  updateDots(currentIndex); // Mettre à jour les points 
});


arrowRight.addEventListener('click', function () {
    currentIndex = (currentIndex + 1) ;
    updateCarousel(currentIndex, 'right');
    updateDots(currentIndex); // Mettre à jour les points 
});


// Afficher la première diapositive au chargement de la page
updateCarousel(currentIndex, 'démarrage');
updateDots(currentIndex); // Mettre à jour les points pour la première diapositive












