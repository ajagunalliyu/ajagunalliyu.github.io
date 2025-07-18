document.addEventListener("DOMContentLoaded", () => {
  const tabs = document.querySelectorAll(".tab-link");
  const contents = document.querySelectorAll(".tab-content");
  const mobileSelect = document.getElementById("mobile-tab-select");
  const heroSection = document.getElementById("hero");
  const favicon = document.getElementById("favicon");

  // Default to "projects" tab
  switchTab("projects");

  // Desktop tab click handler
  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      const tabId = tab.getAttribute("data-tab");
      switchTab(tabId);
    });
  });

  // Mobile select change handler
  if (mobileSelect) {
    mobileSelect.addEventListener("change", () => {
      switchTab(mobileSelect.value);
    });
  }

  // Function to switch between tabs
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

    // Hide hero if on resume tab
    if (heroSection) {
      heroSection.style.display = tabId === "resume" ? "none" : "flex";
    }

    // Switch favicon (optional)
    if (favicon) {
      favicon.href = tabId === "resume" ? "profile.jpg" : "favicon-tech.png";
    }
  }

  // Set dynamic year in footer
  const yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
});
