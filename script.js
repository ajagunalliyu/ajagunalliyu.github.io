document.addEventListener('DOMContentLoaded', function() {
  // Set current year in footer
  document.getElementById('year').textContent = new Date().getFullYear();

  // Mobile menu toggle
  const mobileMenu = document.getElementById('mobile-menu');
  const navbarMenu = document.querySelector('.navbar-menu');

  mobileMenu.addEventListener('click', function() {
    mobileMenu.classList.toggle('active');
    navbarMenu.classList.toggle('active');
  });

  // Close mobile menu when clicking on a link
  const navbarLinks = document.querySelectorAll('.navbar-link');
  navbarLinks.forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.remove('active');
      navbarMenu.classList.remove('active');
    });
  });

  // Scroll animations for projects
  const projects = document.querySelectorAll('.project');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1 });

  projects.forEach(project => {
    observer.observe(project);
  });

  // Smooth scrolling for navigation links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 80,
          behavior: 'smooth'
        });
      }
    });
  });
});
