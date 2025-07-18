document.addEventListener("DOMContentLoaded", () => {
  const tabs = document.querySelectorAll(".tab-link");
  const contents = document.querySelectorAll(".tab-content");
  const mobileSelect = document.getElementById("mobile-tab-select");
  const heroSection = document.getElementById("hero");
  const favicon = document.getElementById("favicon");

  // Initial setup: default to "projects"
  switchTab("projects");

  // Desktop tab click
  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      const tabId = tab.getAttribute("data-tab");
      switchTab(tabId);
    });
  });

  // Mobile select dropdown
  if (mobileSelect) {
    mobileSelect.addEventListener("change", () => {
      switchTab(mobileSelect.value);
    });
  }

  // Core tab switcher
  function switchTab(tabId) {
    // Activate content
    contents.forEach(content => {
      content.classList.remove("active");
      if (content.id === tabId) {
        content.classList.add("active");
      }
    });

    // Highlight selected tab (desktop)
    tabs.forEach(tab => {
      tab.classList.remove("active");
      if (tab.getAttribute("data-tab") === tabId) {
        tab.classList.add("active");
      }
    });

    // Update mobile dropdown value
    if (mobileSelect) {
      mobileSelect.value = tabId;
    }

    // Toggle hero section visibility
    if (heroSection) {
      heroSection.style.display = tabId === "resume" ? "none" : "block";
    }

    // Optional favicon switching
    if (favicon) {
      favicon.href = tabId === "resume" ? "profile.jpg" : "favicon-tech.png";
    }
  }

  // Footer year
  document.getElementById("year").textContent = new Date().getFullYear();
});
