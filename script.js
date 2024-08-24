document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll('.navbar .textcont a');
    const sections = document.querySelectorAll('section');
    const navbar = document.querySelector('.navbar');

    function navigateToSection(targetId) {
        sections.forEach(section => {
            if (section.getAttribute('id') === targetId) {
                section.style.display = 'block';
            } else {
                section.style.display = 'none';
            }
        });

        if (targetId === 'login') {
            navbar.style.display = 'none';
        } else {
            navbar.style.display = 'flex';
        }

        navLinks.forEach(link => link.classList.remove('active'));

        const targetNavLink = document.querySelector(`.navbar .textcont a[href="#${targetId}"]`);
        if (targetNavLink) {
            targetNavLink.classList.add('active');
        }
    }

    navigateToSection('login');

    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            navigateToSection(targetId);
        });
    });

    const masukButton = document.querySelector('.masukbox a');
    masukButton.addEventListener('click', function(event) {
        event.preventDefault();
        navigateToSection('dashboard');
    });

    const loginNavButton = document.querySelector('#loginButton');
    loginNavButton.addEventListener('click', function(event) {
        event.preventDefault();
        navigateToSection('login');
    });

    const slides = document.querySelectorAll('.boxcontent > div');
    let currentSlide = 0;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.style.display = i === index ? 'block' : 'none';
        });
    }

    document.getElementById('nextButton').addEventListener('click', function() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    });

    document.getElementById('prevButton').addEventListener('click', function() {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        showSlide(currentSlide);
    });

    showSlide(currentSlide);
});