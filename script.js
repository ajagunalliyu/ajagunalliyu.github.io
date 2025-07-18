document.addEventListener("DOMContentLoaded", function () {
  // Year in footer
  document.getElementById("year").textContent = new Date().getFullYear();

  // Toggle menu
  const menuToggle = document.getElementById("menu-toggle");
  const navMenu = document.getElementById("nav-menu");
  menuToggle.addEventListener("click", function () {
    navMenu.classList.toggle("show");
  });

  // Back to Top button
  const backToTop = document.getElementById("backToTop");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      backToTop.style.display = "block";
    } else {
      backToTop.style.display = "none";
    }
  });

  backToTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  // Intelligent Favicon Switching
  const favicon = document.getElementById("favicon");
  if (window.location.href.includes("resume")) {
    favicon.href = "profile.jpg";
  } else {
    favicon.href = "favicon-tech.png";
  }
});
