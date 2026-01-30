window.addEventListener("DOMContentLoaded", main);

function main() {
  const nav = document.querySelector("nav");
  const headerHamberger = document.querySelector(".header-hamberger-menu");

  headerHamberger.addEventListener("click", (e) => {
    e.preventDefault();
    nav.classList.add("show");
  });

  nav.addEventListener("click", (e) => {
    nav.classList.remove("show");
  });
}
