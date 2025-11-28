// Permet la fonctionnalité de la barre de navigation //

document.querySelectorAll('.navbar a').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 60,
        behavior: 'smooth'
      });
    }
  });
});

// Animation au scroll
function animateOnScroll() {
  const sections = document.querySelectorAll('section');
  const scrollTop = window.pageYOffset;

  sections.forEach(section => {
    const offset = section.offsetTop - window.innerHeight + 100;
    if (scrollTop > offset) {
      section.style.opacity = '1';
      section.style.transform = 'translateY(0)';
    }
  });
}

window.addEventListener('scroll', animateOnScroll);
window.addEventListener('load', animateOnScroll);

// Animation des compétences au hover
document.querySelectorAll('.skill').forEach(skill => {
  skill.addEventListener('mouseenter', function() {
    this.style.animation = 'pulse 0.6s ease-in-out';
  });
  skill.addEventListener('mouseleave', function() {
    this.style.animation = '';
  });
});

console.log("Portfolio de Wins Aurélien chargé avec animations interactives !");
