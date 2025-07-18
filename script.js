document.addEventListener("DOMContentLoaded", () => {
  const tabs = document.querySelectorAll(".tab-link");
  const contents = document.querySelectorAll(".tab-content");
  const mobileSelect = document.getElementById("mobile-tab-select");
  const heroSection = document.querySelector(".hero");
  const favicon = document.getElementById("favicon");
  const menuToggle = document.getElementById("menu-toggle");
  const navMenu = document.getElementById("nav-menu");

  // Tab switching function
  function switchTab(tabId) {
    contents.forEach(content => {
      content.classList.remove("active");
      if (content.id === tabId) {
        content.classList.add("active");
      }
    });

    tabs.forEach(tab => {
      tab.classList.remove("active");
      if (tab.getAttribute("data-tab") === tabId) {
        tab.classList.add("active");
      }
    });

    if (mobileSelect) {
      mobileSelect.value = tabId;
    }

    // Hide hero when on resume
    if (heroSection) {
      heroSection.style.display = tabId === "resume" ? "none" : "flex";
    }

    // Change favicon
    if (favicon) {
      favicon.href = tabId === "resume" ? "profile.jpg" : "favicon-tech.png";
    }
  }

  // Default tab on page load
  switchTab("projects");

  // Handle desktop tab clicks
  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      const tabId = tab.getAttribute("data-tab");
      switchTab(tabId);
    });
  });

  // Handle mobile tab change
  if (mobileSelect) {
    mobileSelect.addEventListener("change", () => {
      switchTab(mobileSelect.value);
    });
  }

  // Handle mobile menu toggle
  if (menuToggle && navMenu) {
    menuToggle.addEventListener("click", () => {
      navMenu.classList.toggle("show");
    });
  }

  // Set current year in footer
  const yearSpan = document.getElementById("year");
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }
});
