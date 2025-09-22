document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.getElementById('toggle-menu');
    const mobileNav = document.getElementById('mobile-nav');
    const sections = document.querySelectorAll('.section');
    const navLinks = document.querySelectorAll('.nav-link');

    // Toggle mobile navigation visibility
    if (hamburger && mobileNav) {
        hamburger.addEventListener('click', () => {
            mobileNav.classList.toggle('active');
        });
    }

    // Close mobile nav when a link is clicked
    const mobileNavLinks = mobileNav.querySelectorAll('.nav-link');
    mobileNavLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileNav.classList.remove('active');
        });
    });

    // Set current year in footer
    const yearSpan = document.getElementById('year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    // Default Project Tab: Hide all sections except 'projects' on page load
    const projectsSection = document.getElementById('projects');
    sections.forEach(section => {
        if (section.id !== 'projects') {
            section.classList.add('hidden-section');
        }
    });

    // Handle navigation clicks to show/hide sections
    navLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            sections.forEach(section => {
                if (section.id === targetId) {
                    section.classList.remove('hidden-section');
                } else {
                    section.classList.add('hidden-section');
                }
            });
            // Scroll to the top of the newly visible section
            document.getElementById(targetId).scrollIntoView({ behavior: 'smooth' });
        });
    });

    // Initialize AOS after all elements are loaded
    AOS.init({
        duration: 1000,
        once: true,
    });
});
