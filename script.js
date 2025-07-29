// Initialisation des animations AOS
AOS.init({
    duration: 800,
    once: true,
    easing: 'ease-in-out',
    mirror: false
});

// Header sticky au scroll
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 0);
});

// Menu mobile
const menuIcon = document.getElementById('menu-icon');
const navbar = document.querySelector('.navbar');

menuIcon.addEventListener('click', function() {
    menuIcon.classList.toggle('fa-times');
    navbar.classList.toggle('active');
});

// Fermer le menu mobile quand on clique sur un lien
document.querySelectorAll('.navbar a').forEach(link => {
    link.addEventListener('click', function() {
        menuIcon.classList.remove('fa-times');
        navbar.classList.remove('active');
    });
});

// Scroll fluide vers les sections
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 70,
                behavior: 'smooth'
            });
        }
    });
});

// Gestion du formulaire de contact
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Ici vous pourriez ajouter la logique d'envoi du formulaire
        alert('Merci pour votre message! Je vous répondrai dès que possible.');
        this.reset();
    });
}

// Mise à jour automatique de l'année dans le footer
const currentYear = document.getElementById('current-year');
if (currentYear) {
    currentYear.textContent = new Date().getFullYear();
}