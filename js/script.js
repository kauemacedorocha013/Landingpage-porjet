document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.getElementById("n-icon-menu");
  const navLinks = document.querySelector(".c-menu");

  hamburger.addEventListener("click", () => {navLinks.classList.toggle("active");});
});
