document.addEventListener("DOMContentLoaded", () => {
  const tabs = document.querySelectorAll(".tab-link");
  const contents = document.querySelectorAll(".tab-content");
  const mobileSelect = document.getElementById("mobile-tab-select");
  const heroSection = document.getElementById("hero");
  const favicon = document.getElementById("favicon");
  const hamburger = document.getElementById("toggle-menu");
  const mobileNav = document.getElementById("mobile-nav");

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

  // Hamburger menu toggle
  if (hamburger && mobileNav) {
    hamburger.addEventListener("click", () => {
      mobileNav.classList.toggle("active");
    });

    // Optional: Close menu on link click
    const navLinks = mobileNav.querySelectorAll("button");
    navLinks.forEach(link => {
      link.addEventListener("click", () => {
        mobileNav.classList.remove("active");
      });
    });
  }

  // Tab switching logic
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

    if (heroSection) {
      heroSection.style.display = tabId === "resume" ? "none" : "flex";
    }

    if (favicon) {
      favicon.href = tabId === "resume" ? "profile.jpg" : "favicon-tech.png";
    }
  }

  // Set year in footer
  const yearSpan = document.getElementById("year");
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }
});
