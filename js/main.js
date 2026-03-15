(() => {
  const root = document.documentElement;
  const savedLang = localStorage.getItem("site-lang") || "uk";
  const navToggle = document.querySelector(".nav-toggle");
  const navDrawer = document.querySelector(".nav-drawer");
  const yearNode = document.getElementById("year");

  const applyLanguage = (lang) => {
    root.lang = lang;
    document.querySelectorAll("[data-lang]").forEach((node) => {
      node.classList.toggle("hidden", node.dataset.lang !== lang);
    });
    document.querySelectorAll("[data-lang-choice]").forEach((button) => {
      button.classList.toggle("is-active", button.dataset.langChoice === lang);
    });
    localStorage.setItem("site-lang", lang);
  };

  document.querySelectorAll("[data-lang-choice]").forEach((button) => {
    button.addEventListener("click", () => applyLanguage(button.dataset.langChoice));
  });

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

  applyLanguage(savedLang);
})();
