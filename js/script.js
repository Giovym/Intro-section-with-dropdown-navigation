"use strict";

const nav = document.querySelector(".nav");
const openMenu = document.getElementById("open-menu");
const closeMenu = document.getElementById("close-menu");

const mediaQuery = window.matchMedia("(max-width: 650px)");

openMenu.addEventListener("click", function () {
  nav.style.display = "flex";
  openMenu.style.display = "none";
});

closeMenu.addEventListener("click", function () {
  nav.style.display = "none";
  openMenu.style.display = "block";
});

if (!mediaQuery) {
  nav.style.display = "flex";
}
