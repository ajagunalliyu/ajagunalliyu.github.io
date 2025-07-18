document.addEventListener("DOMContentLoaded", function() {
  // Set current year in footer
  document.getElementById("year").textContent = new Date().getFullYear();
  
  // Mobile menu toggle
  const menuToggle = document.getElementById("menu-toggle");
  const navMenu = document.getElementById("nav-menu");
  
  menuToggle.addEventListener("click", function() {
    this.classList.toggle("active");
    navMenu.classList.toggle("active");
  });
  
  // Close mobile menu when clicking a link
  const navLinks = document.querySelectorAll(".nav-link");
  navLinks.forEach(link => {
    link.addEventListener("click", () => {
      menuToggle.classList.remove("active");
      navMenu.classList.remove("active");
    });
  });
  
  // Back to top button
  const backToTopBtn = document.getElementById("back-to-top");
  
  window.addEventListener("scroll", function() {
    if (window.pageYOffset > 300) {
      backToTopBtn.classList.add("active");
    } else {
      backToTopBtn.classList.remove("active");
    }
  });
  
  backToTopBtn.addEventListener("click", function(e) {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
  
  // Scroll animations
  const animateElements = document.querySelectorAll(".animate__animated");
  
  function checkScroll() {
    animateElements.forEach(element => {
      const elementPosition = element.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      
      if (elementPosition < windowHeight - 100) {
        element.classList.add("fade-in");
      }
    });
  }
  
  // Initial check
  checkScroll();
  
  // Check on scroll
  window.addEventListener("scroll", checkScroll);
  
  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute("href");
      if (targetId === "#") return;
      
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 80,
          behavior: "smooth"
        });
      }
    });
  });
  
  // Typing effect for hero text
  const typingText = document.querySelector(".typing-text");
  if (typingText) {
    const text = typingText.textContent;
    typingText.textContent = "";
    
    let i = 0;
    function typeWriter() {
      if (i < text.length) {
        typingText.textContent += text.charAt(i);
        i++;
        setTimeout(typeWriter, 50);
      }
    }
    
    setTimeout(typeWriter, 1000);
  }
});
