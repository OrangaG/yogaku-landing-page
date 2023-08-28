const closeBtn = document.querySelector("#close-btn");
const menuBtn = document.getElementById("menu-btn");
const nav = document.getElementById("nav");
const links = document.querySelectorAll(".link");
const main = document.querySelector("main");
const footer = document.querySelector("footer");

function toggleMenu(btn) {
  btn.addEventListener("click", () => {
    nav.classList.toggle("active");
  });
}

function closeMenu(tag) {
  tag.addEventListener("click", () => {
    nav.classList.remove("active");
  });
}

links.forEach((link) => {
  closeMenu(link);
});

toggleMenu(closeBtn);
toggleMenu(menuBtn);

closeMenu(main);
closeMenu(footer);
