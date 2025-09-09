// Smooth scrolling and navigation
document.addEventListener('DOMContentLoaded', function() {
    const navbar = document.getElementById('navbar');
    const rsvpForm = document.getElementById('rsvpForm');
    const attendanceSelect = document.getElementById('attendance');
    const guestsGroup = document.getElementById('guestsGroup');
    const successMessage = document.getElementById('rsvpSuccess');

    // Show/hide navigation bar on scroll
    let lastScrollTop = 0;
    window.addEventListener('scroll', function() {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (scrollTop > 100) {
            navbar.classList.add('visible');
        } else {
            navbar.classList.remove('visible');
        }
        
        lastScrollTop = scrollTop;
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const offsetTop = target.offsetTop - 80; // Account for navbar height
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Show/hide guest number field based on attendance
    attendanceSelect.addEventListener('change', function() {
        if (this.value === 'yes') {
            guestsGroup.style.display = 'block';
        } else {
            guestsGroup.style.display = 'none';
        }
    });

    // Let Netlify handle RSVP form submission naturally
    // No JavaScript interference needed


    // Add floating hearts animation
    function createFloatingHeart() {
        const heart = document.createElement('div');
        heart.innerHTML = '💕';
        heart.style.cssText = `
            position: fixed;
            font-size: 20px;
            color: #D4A574;
            pointer-events: none;
            z-index: 9999;
            animation: floatUp 4s linear infinite;
            left: ${Math.random() * 100}vw;
            top: 100vh;
            opacity: 0.7;
        `;
        
        document.body.appendChild(heart);
        
        setTimeout(() => {
            heart.remove();
        }, 4000);
    }

    // Add CSS for floating animation
    if (!document.getElementById('floating-animation')) {
        const style = document.createElement('style');
        style.id = 'floating-animation';
        style.textContent = `
            @keyframes floatUp {
                0% {
                    transform: translateY(0) rotate(0deg);
                    opacity: 0.7;
                }
                50% {
                    opacity: 1;
                }
                100% {
                    transform: translateY(-100vh) rotate(360deg);
                    opacity: 0;
                }
            }
        `;
        document.head.appendChild(style);
    }

    // Create floating hearts periodically
    setInterval(createFloatingHeart, 5000);

    // Add scroll reveal animation
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe sections for scroll animations
    document.querySelectorAll('.section').forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(section);
    });

    // Active navigation link highlighting
    const sections = document.querySelectorAll('.section');
    const navLinks = document.querySelectorAll('.nav-link');

    window.addEventListener('scroll', () => {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            const sectionHeight = section.clientHeight;
            
            if (window.pageYOffset >= sectionTop && 
                window.pageYOffset < sectionTop + sectionHeight) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });

    // Add active link style
    const activeStyle = document.createElement('style');
    activeStyle.textContent = `
        .nav-link.active {
            color: #D4A574 !important;
        }
        .nav-link.active::after {
            width: 100% !important;
        }
    `;
    document.head.appendChild(activeStyle);

    // Parallax effect for hero section
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const heroContent = document.querySelector('.hero-content');
        if (heroContent) {
            heroContent.style.transform = `translateY(${scrolled * 0.2}px)`;
        }
    });

    // Add click effects to buttons and cards
    document.querySelectorAll('.detail-card, .contact-card, .gallery-item').forEach(card => {
        card.addEventListener('click', function() {
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = '';
            }, 150);
        });
    });

    // Add hover effect to timeline items
    document.querySelectorAll('.timeline-item').forEach((item, index) => {
        item.style.animationDelay = `${index * 0.2}s`;
        item.classList.add('fade-in-timeline');
    });

    // Add timeline animation styles
    const timelineStyle = document.createElement('style');
    timelineStyle.textContent = `
        .fade-in-timeline {
            opacity: 0;
            animation: fadeInUp 0.6s ease forwards;
        }
    `;
    document.head.appendChild(timelineStyle);
});

// Email integration for RSVP (optional - requires backend)
function sendRSVPEmail(data) {
    // Example integration with EmailJS or similar service
    // Replace with your actual email service configuration
    
    /*
    emailjs.send('service_id', 'template_id', {
        name: data.name,
        email: data.email,
        attendance: data.attendance,
        guests: data.guests,
        dietary: data.dietary,
        message: data.message
    }).then(function(response) {
        console.log('RSVP sent successfully!', response);
    }, function(error) {
        console.log('Failed to send RSVP...', error);
    });
    */
}

// Google Analytics integration (optional)
function initializeAnalytics() {
    // Add Google Analytics or similar tracking
    /*
    gtag('config', 'GA_MEASUREMENT_ID', {
        page_title: 'Jose & Kir Wedding',
        page_location: window.location.href
    });
    */
}
