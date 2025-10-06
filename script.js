// Cookie Banner
document.addEventListener('DOMContentLoaded', function() {
    const cookieBanner = document.getElementById('cookie-banner');
    const acceptButton = document.getElementById('accept-cookies');

    // Check if user has already accepted cookies
    if (!localStorage.getItem('cookiesAccepted')) {
        cookieBanner.classList.add('show');
    }

    acceptButton.addEventListener('click', function() {
        localStorage.setItem('cookiesAccepted', 'true');
        cookieBanner.classList.remove('show');
    });
});

// Mobile Navigation Toggle
const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

navToggle.addEventListener('click', function() {
    navMenu.classList.toggle('active');

    // Animate hamburger icon
    const spans = navToggle.querySelectorAll('span');
    if (navMenu.classList.contains('active')) {
        spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
        spans[1].style.opacity = '0';
        spans[2].style.transform = 'rotate(-45deg) translate(7px, -6px)';
    } else {
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
    }
});

// Close mobile menu when clicking on a link
navLinks.forEach(link => {
    link.addEventListener('click', function() {
        navMenu.classList.remove('active');
        const spans = navToggle.querySelectorAll('span');
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
    });
});

// Navbar scroll effect
window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Countdown Timer
function updateCountdown() {
    const weddingDate = new Date('2025-10-18T17:00:00').getTime();
    const now = new Date().getTime();
    const distance = weddingDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById('days').textContent = days;
    document.getElementById('hours').textContent = hours;
    document.getElementById('minutes').textContent = minutes;
    document.getElementById('seconds').textContent = seconds;

    if (distance < 0) {
        document.getElementById('countdown').innerHTML = '<p style="font-size: 24px;">¡Ya nos casamos!</p>';
    }
}

// Update countdown every second
setInterval(updateCountdown, 1000);
updateCountdown(); // Initial call

// Language Switcher
const langEs = document.getElementById('lang-es');
const langEn = document.getElementById('lang-en');

// Translation object
const translations = {
    es: {
        // Navigation
        'Bienvenidos': 'Bienvenidos',
        'El Día': 'El Día',
        'RSVP': 'RSVP',
        'Recomendaciones': 'Recomendaciones',
        'Invitados Internacionales': 'Invitados Internacionales',
        'Lista de Regalos': 'Lista de Regalos',

        // Countdown labels
        'Días': 'Días',
        'Horas': 'Horas',
        'Minutos': 'Minutos',
        'Segundos': 'Segundos',
    },
    en: {
        // Navigation
        'Bienvenidos': 'Welcome',
        'El Día': 'The Day',
        'RSVP': 'RSVP',
        'Recomendaciones': 'Recommendations',
        'Invitados Internacionales': 'International Guests',
        'Lista de Regalos': 'Gift Registry',

        // Countdown labels
        'Días': 'Days',
        'Horas': 'Hours',
        'Minutos': 'Minutes',
        'Segundos': 'Seconds',
    }
};

let currentLang = 'es';

langEs.addEventListener('click', function() {
    switchLanguage('es');
});

langEn.addEventListener('click', function() {
    switchLanguage('en');
});

function switchLanguage(lang) {
    currentLang = lang;

    // Update active button
    if (lang === 'es') {
        langEs.classList.add('active');
        langEn.classList.remove('active');
    } else {
        langEn.classList.add('active');
        langEs.classList.remove('active');
    }

    // Update countdown labels
    document.querySelectorAll('.countdown-label').forEach((label, index) => {
        const labels = ['Días', 'Horas', 'Minutos', 'Segundos'];
        label.textContent = translations[lang][labels[index]];
    });

    // Note: For a full implementation, you would translate all content
    // This is a basic example showing the structure
    console.log('Language switched to:', lang);
}

// RSVP Form Handling
const rsvpForm = document.getElementById('rsvp-form');

rsvpForm.addEventListener('submit', function(e) {
    e.preventDefault();

    // Get form data
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        guests: document.getElementById('guests').value,
        attendance: document.querySelector('input[name="attendance"]:checked').value,
        dietary: document.getElementById('dietary').value,
        message: document.getElementById('message').value
    };

    // In a real implementation, you would send this data to a server
    // For now, we'll just log it and show a confirmation
    console.log('RSVP Data:', formData);

    // Show confirmation message
    alert('¡Gracias por confirmar tu asistencia! Recibirás un correo de confirmación pronto.');

    // Reset form
    rsvpForm.reset();

    // You can integrate with services like:
    // - Google Forms
    // - Formspree
    // - EmailJS
    // - Your own backend

    // Example with EmailJS (you would need to set this up):
    // emailjs.send("service_id", "template_id", formData)
    //     .then(function(response) {
    //         alert('¡Gracias por confirmar!');
    //         rsvpForm.reset();
    //     }, function(error) {
    //         alert('Hubo un error. Por favor, inténtalo de nuevo.');
    //     });
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 70; // Account for navbar height
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Scroll reveal animation (optional enhancement)
function revealOnScroll() {
    const reveals = document.querySelectorAll('.section');

    reveals.forEach(section => {
        const windowHeight = window.innerHeight;
        const elementTop = section.getBoundingClientRect().top;
        const elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
            section.classList.add('active');
        }
    });
}

window.addEventListener('scroll', revealOnScroll);
revealOnScroll(); // Initial check

// Form validation enhancement
const requiredFields = document.querySelectorAll('[required]');

requiredFields.forEach(field => {
    field.addEventListener('invalid', function(e) {
        e.preventDefault();
        this.classList.add('error');
    });

    field.addEventListener('input', function() {
        if (this.validity.valid) {
            this.classList.remove('error');
        }
    });
});

// Add animation to elements when they come into view
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all timeline items and cards
document.querySelectorAll('.timeline-item, .recommendation-card, .gift-option, .info-block').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});
