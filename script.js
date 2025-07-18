document.addEventListener("DOMContentLoaded", function () {
  // Tab switching
  const tabLinks = document.querySelectorAll(".tab-link");
  const tabContents = document.querySelectorAll(".tab-content");

  tabLinks.forEach((btn) => {
    btn.addEventListener("click", function () {
      tabLinks.forEach((btn) => btn.classList.remove("active"));
      tabContents.forEach((tab) => tab.classList.remove("active"));

      this.classList.add("active");
      document.getElementById(this.dataset.tab).classList.add("active");
    });
  });

  // Favicon switching
  const favicon = document.getElementById("favicon");
  const observer = new MutationObserver(() => {
    if (document.getElementById("resume").classList.contains("active")) {
      favicon.href = "profile.jpg";
    } else {
      favicon.href = "favicon-tech.png";
    }
  });

  observer.observe(document.body, { attributes: true, childList: true, subtree: true });
});
