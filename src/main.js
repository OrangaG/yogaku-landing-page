const closeBtn = document.querySelector("#close-btn");
const menuBtn = document.getElementById("menu-btn");
const nav = document.getElementById("nav");
const links = document.querySelectorAll(".link");
const main = document.querySelector("main");
const footer = document.querySelector("footer");
const scrollBtn = document.querySelector("#scrollup");

function scrollUp() {
  // When the scroll is higher than 350vh add the show-scroll class
  window.scrollY >= 350
    ? scrollBtn.classList.add("show-scroll")
    : scrollBtn.classList.remove("show-scroll");
}

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

window.addEventListener("scroll", scrollUp);
