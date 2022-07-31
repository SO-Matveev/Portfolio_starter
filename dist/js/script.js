const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".menu");
const closeMenu = document.querySelector(".menu__close");
const menuLink = document.querySelectorAll(".menu__link");

hamburger.addEventListener("click", () => {
  menu.classList.add("active");
});

closeMenu.addEventListener("click", () => {
  menu.classList.remove("active");
});

menuLink.forEach((link) => {
  link.onclick = function () {
    menu.classList.remove("active");
  };
});

const counters = document.querySelectorAll(".skills__ratings-counter");
const lines = document.querySelectorAll(".skills__ratings-line span");

counters.forEach((item, i) => {
  lines[i].style.width = item.innerHTML;
});
