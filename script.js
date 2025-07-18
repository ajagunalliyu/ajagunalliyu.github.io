// Set the current year dynamically in the footer
document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("year").textContent = new Date().getFullYear();

  // Toggle mobile navigation menu
  const menuToggle = document.getElementById("menu-toggle");
  const navMenu = document.getElementById("nav-menu");

  menuToggle.addEventListener("click", function () {
    navMenu.classList.toggle("show");
  });
});
