document.addEventListener("DOMContentLoaded", () => {
  const tabs = document.querySelectorAll(".tab-link");
  const contents = document.querySelectorAll(".tab-content");
  const mobileSelect = document.getElementById("mobile-tab-select");
  const heroSection = document.getElementById("hero");
  const favicon = document.getElementById("favicon");
  const menuToggle = document.getElementById("menu-toggle");
  const navMenu = document.getElementById("nav-menu");

  // Default tab
  switchTab("projects");

  // Desktop tab click handler
  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      const tabId = tab.getAttribute("data-tab");
      switchTab(tabId);
    });
  });

  // Mobile tab select change handler
  if (mobileSelect) {
    mobileSelect.addEventListener("change", () => {
      switchTab(mobileSelect.value);
    });
  }

  // Show/hide mobile nav
  if (menuToggle && navMenu) {
    menuToggle.addEventListener("click", () => {
      navMenu.classList.toggle("show");
    });
  }

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

    // Toggle hero section for resume
    if (heroSection) {
      heroSection.style.display = tabId === "resume" ? "none" : "flex";
    }

    // Dynamic favicon switch
    if (favicon) {
      favicon.href = tabId === "resume" ? "profile.jpg" : "favicon-tech.png";
    }
  }

  // Set current year in footer
  const yearSpan = document.getElementById("year");
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }
});
