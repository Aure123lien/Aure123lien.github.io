// Animation des compétences
document.querySelectorAll('.skill').forEach(skill => {
  skill.addEventListener('mouseenter', function() {
    this.style.animation = 'pulse 0.6s ease-in-out';
  });
  skill.addEventListener('mouseleave', function() {
    this.style.animation = '';
  });
});

// Pour faire des animations fluides quand on scroll vers le bas
const slides = document.querySelectorAll('.slide');

const observerOptions = {
  threshold: 0.5, // Quand la slide est à moitié visible
  rootMargin: '0px 0px -10% 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    const animElements = entry.target.querySelectorAll('.animate-1, .animate-2, .animate-3, .animate-4, .animate-5, .animate-6, .animate-7');
    if (entry.isIntersecting) {
      // Lancer les animations
      animElements.forEach(el => {
        el.style.animationPlayState = 'running';
      });
    } else {
      // Pauser les animations
      animElements.forEach(el => {
        el.style.animationPlayState = 'paused';
      });
    }
  });
}, observerOptions);

// Préparer chaque slide
slides.forEach(slide => {
  const animElements = slide.querySelectorAll('.animate-1, .animate-2, .animate-3, .animate-4, .animate-5, .animate-6, .animate-7');
  animElements.forEach(el => {
    el.style.animationPlayState = 'paused'; // Commencer en pause
  });
  observer.observe(slide);
});

console.log("Portfolio de Wins Aurélien chargé avec animations interactives et scroll fluide !");
