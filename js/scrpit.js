document.addEventListener("DOMContentLoaded", function AbreFechaMenu() {
  const hamburger = document.querySelector(".icon-hamburger");
  const navLinks = document.querySelector(".navbar-container-links");

  hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });
});
