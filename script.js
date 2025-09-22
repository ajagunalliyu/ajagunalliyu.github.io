document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.getElementById('toggle-menu');
    const mobileNav = document.getElementById('mobile-nav');

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
});
