document.addEventListener("DOMContentLoaded", function () {
  const menuHamburger = document.getElementById("menu-hamburger");
  const sideMenu = document.getElementById("side-menu");

  menuHamburger.addEventListener("click", function () {
    sideMenu.classList.toggle("active");
  });
});
