document.addEventListener("DOMContentLoaded", () => {
  const tabs = document.querySelectorAll(".tab-link");
  const contents = document.querySelectorAll(".tab-content");
  const yearSpan = document.getElementById("year");

  // Handle tab switching
  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      tabs.forEach(t => t.classList.remove("active"));
      contents.forEach(c => c.classList.remove("active"));

      tab.classList.add("active");
      const tabId = tab.getAttribute("data-tab");
      document.getElementById(tabId).classList.add("active");

      // Change favicon if resume tab
      const favicon = document.getElementById("favicon");
      if (tabId === "resume") {
        favicon.setAttribute("href", "profile.jpg");
      } else {
        favicon.setAttribute("href", "favicon-tech.png");
      }
    });
  });

  // Set footer year dynamically
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }
});
