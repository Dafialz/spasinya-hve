(() => {
  const navToggle = document.querySelector(".nav-toggle");
  const navDrawer = document.querySelector(".nav-drawer");
  const yearNode = document.getElementById("year");

  if (navToggle && navDrawer) {
    navToggle.addEventListener("click", () => {
      navToggle.classList.toggle("is-open");
      navDrawer.classList.toggle("hidden");
      navDrawer.classList.toggle("is-open");
    });

    navDrawer.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        navToggle.classList.remove("is-open");
        navDrawer.classList.add("hidden");
        navDrawer.classList.remove("is-open");
      });
    });
  }

  if (yearNode) {
    yearNode.textContent = new Date().getFullYear();
  }
})();
