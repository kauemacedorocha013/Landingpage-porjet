document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.getElementById("n-icon-menu");
  const navLinks = document.querySelector(".c-menu");
  const getStartedButton = document.getElementById("bt-comecar");

  hamburger.addEventListener("click", () => {navLinks.classList.toggle("active");
    getStartedButton.classList.toggle("active");
  });
  
});
