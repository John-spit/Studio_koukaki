document.addEventListener("DOMContentLoaded", function () {
  /***** Animation des titres *****/

  // Fonction pour vérifier si un élément est visible à l'écran
  function isElementInViewport(el) {
    // Récupère les coordonnées de l'élément par rapport à la fenêtre d'affichage
    const rect = el.getBoundingClientRect();

    // Retourne true si l'élément est dans le viewport (visible)
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  // Fonction pour gérer le scroll et déclencher l'animation pour les éléments .animate-title
  function handleScroll() {
    const titleElements = document.querySelectorAll(".animate-title");

    titleElements.forEach((titleElement) => {
      if (isElementInViewport(titleElement)) {
        titleElement.classList.add("title-visible");
      }
    });
  }

  // Écoute l'événement de défilement (scroll) de la page
  window.addEventListener("scroll", handleScroll);

  // Déclenche la vérification de visibilité au chargement de la page
  window.addEventListener("load", handleScroll);

  /***** Basculement de l'image à la vidéo *****/
  const heroVideo = document.querySelector(".hero-video");
  const banner = document.querySelector(".banner");

  function checkVideoPlayback() {
    if (window.innerWidth > 768) {
      if (heroVideo.readyState >= 3) {
        // Vérifie si la vidéo est prête
        heroVideo.style.display = "block"; // Afficher la vidéo
        heroVideo.style.opacity = "1";
        heroVideo.play();
        banner.style.backgroundImage = "none"; // Cacher l'image de fond
      } else {
        heroVideo.addEventListener("canplaythrough", function () {
          heroVideo.style.display = "block";
          heroVideo.style.opacity = "1";
          heroVideo.play();
          banner.style.backgroundImage = "none";
        });
      }
    } else {
      heroVideo.style.display = "none"; // Cacher la vidéo
      banner.style.backgroundImage = `url(${themeVars.templateDirectoryUri}/assets/images/banner.png)`; // Afficher l'image de fond
    }
  }

  checkVideoPlayback();
  window.addEventListener("resize", checkVideoPlayback);

  /***** Effet parallax logo *****/

  // Sélectionne l'élément de la vidéo et l'image de parallaxe
  const parallaxEffect = document.querySelector(".parallax-effect");

  // Facteur de ralentissement (plus le facteur est petit, plus l'effet est doux)
  const parallaxFactor = 0.2;

  // Limite le translate vers le bas à 150px
  const maxTranslateY = 350;

  // Écoute l'événement de défilement de la page
  window.addEventListener("scroll", () => {
    // Calcule la valeur de défilement de la page
    const scrollValue = window.scrollY;

    // Applique une transformation CSS pour créer l'effet de parallaxe avec ralentissement
    const translateY = Math.min(scrollValue * parallaxFactor, maxTranslateY);

    parallaxEffect.style.transform = `translateY(${translateY}px)`;
  });

  /***** SWIPER JS *****/

  const swiper = new Swiper(".swiper-container", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 3,
    slidesPerGroup: 1,
    loop: true,
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: false,
    },
    pagination: {
      el: ".swiper-pagination",
    },
  });

  /***** Effet parallax nuages *****/

  // Variables pour stocker la position initiale des nuages
  let previousScrollY = window.scrollY;
  let translateX = 0;

  // Sélectionne les nuages
  const littleCloud = document.querySelector(".little-cloud");
  const bigCloud = document.querySelector(".big-cloud");

  // Fonction pour initialiser le parallaxe des nuages
  function initCloudsParallax() {
    // Écoute l'événement de défilement (scroll) de la page
    window.addEventListener("scroll", handleCloudsParallax);
  }

  // Fonction pour gérer le déplacement des nuages en fonction du scroll
  function handleCloudsParallax() {
    const scrollY = window.scrollY;
    const scrollDelta = scrollY - previousScrollY;

    // Met à jour la position de translation en fonction du scrollDelta
    translateX -= scrollDelta * 0.25;

    // Limite le déplacement à un maximum de 300 pixels vers la gauche et 0 pixels vers la droite
    translateX = Math.max(-300, Math.min(0, translateX));

    // Applique la transformation aux nuages
    littleCloud.style.transform = `translateX(${translateX}px)`;
    bigCloud.style.transform = `translateX(${translateX}px)`;

    // Met à jour la position précédente du scroll
    previousScrollY = scrollY;
  }

  // Appelle la fonction d'initialisation du parallaxe des nuages
  initCloudsParallax();
});

// Menu Burger
const openBtn = document.getElementById("openBtn");
const sidenav = document.getElementById("mySidenav");
const burgerIcon = document.querySelector(".burger-icon");

openBtn.addEventListener("click", function (e) {
  e.preventDefault();
  sidenav.classList.toggle("active");
  burgerIcon.classList.toggle("active");

  const sectionLinks = document.querySelectorAll(".animate-section-link");
  sectionLinks.forEach((link) => {
    link.classList.toggle("section-link-visible");
  });
});

// Fermer le menu en cliquant à l'extérieur de celui-ci
window.addEventListener("click", function (e) {
  if (
    sidenav.classList.contains("active") &&
    !sidenav.contains(e.target) &&
    !openBtn.contains(e.target)
  ) {
    sidenav.classList.remove("active");
    burgerIcon.classList.remove("active");

    const sectionLinks = document.querySelectorAll(".animate-section-link");
    sectionLinks.forEach((link) => {
      link.classList.remove("section-link-visible");
    });
  }
});

// Fermer le menu en cliquant sur un lien de section
const sectionLinks = document.querySelectorAll(".animate-section-link");
sectionLinks.forEach((link) => {
  link.addEventListener("click", function () {
    sidenav.classList.remove("active");
    burgerIcon.classList.remove("active");

    sectionLinks.forEach((link) => {
      link.classList.remove("section-link-visible");
    });
  });
});
