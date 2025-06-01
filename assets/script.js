// Gestion JS du caroussel
const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

// Gestion des flèches du carrousel
// Récupérations des élements html nécessaires du caroussel
let currentIndex = 0; // Index de base
let bannerImg = document.querySelector(".banner-img");
let bannerText = document.querySelector("#banner p");
let dots = document.querySelectorAll(".dot"); // Les points du carrousel
let arrowLeft = document.querySelector(".arrow_left");
let arrowRight = document.querySelector(".arrow_right");

// Met à jour les informations src et p du carrousel
function updateSlide() {
	let slide = slides[currentIndex];
	bannerImg.src = "./assets/images/slideshow/" + slide.image;
	bannerText.innerHTML = slide.tagLine;

	// Boucle sur le "tableau" des dots. Si l'index du dot correspond à celui de l'image affiché (currentIndex) 
	// il prend la class "dot_selected", sinon il le perd/ne le prend pas
	dots.forEach((dot, index) => {
		dot.classList.toggle("dot_selected", index === currentIndex);
	});
}
// Initialisation au démarrage
updateSlide();


// Flèche droite
arrowRight.addEventListener("click", function() {
	currentIndex++;
	if (currentIndex >= slides.length) {
		currentIndex = 0; // s'il dépasse la fin, revient au début
	}
	updateSlide(); // Met à jour les informations
});

// Flèche gauche
arrowLeft.addEventListener("click", function() {
	currentIndex--;
	if (currentIndex < 0) {
		currentIndex = slides.length - 1; // s'il dépasse le début, revient à la fin
	}
	updateSlide(); // Met à jour les informations
});

