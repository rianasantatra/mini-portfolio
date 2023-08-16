/*=============== FILTERS tabs ===============*/
const tabs = document.querySelectorAll("[data-target]"),
  tabContents = document.querySelectorAll("[data-content]");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const target = document.querySelector(tab.dataset.target);

    tabContents.forEach((tc) /** tc = tab content */ => {
      tc.classList.remove("filters__active");
    });

    target.classList.add("filters__active");

    tabs.forEach((t) => {
      t.classList.remove("filter-tab-active");
    });
    tab.classList.add("filter-tab-active");
  });
});

/*=============== DARK LIGHT THEME ===============*/
const themeButton = document.getElementById("theme-button");
const darkTheme = "dark-theme";
const iconTheme = "bi-cloud-sun";

const selectedTheme = localStorage.getItem("selected-theme");
const selectedIcon = localStorage.getItem("selected-icon");

const getCurrentTheme = () =>
  document.body.classList.contains(darkTheme) ? "dark" : "light";
const getCurrentIcon = () =>
  document.body.classList.contains(iconTheme)
    ? "bi-cloud-sun"
    : "bi-cloud-moon";

if (selectedTheme) {
  document.body.classList[selectedTheme === "dark" ? "remove" : "add"](
    darkTheme
  );
  themeButton.classList[selectedIcon === "bi-cloud-sun" ? "remove" : "add"](
    iconTheme
  );
}

themeButton.addEventListener("click", () => {
  document.body.classList.toggle(darkTheme);
  themeButton.classList.toggle(iconTheme);

  localStorage.setItem("selected-theme", getCurrentTheme);
  localStorage.setItem("selected-icon", getCurrentIcon);
});
/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: "2500",
  delay: "400",
});
sr.reveal(".profile__border");
sr.reveal(".profile__name", { delay: 500 });
sr.reveal(".profile__profession", { delay: 600 });
sr.reveal(".profile__social", { delay: 700 });
sr.reveal(".profile__info-group", { interval: 100, delay: 700 });
sr.reveal(".profile__buttons", { delay: 800 });
sr.reveal(".filters__content", { delay: 900 });
sr.reveal(".filters", { delay: 1000 });
