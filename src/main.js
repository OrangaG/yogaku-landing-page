const closeBtn = document.querySelector("#close-btn");
const menuBtn = document.getElementById("menu-btn");
const nav = document.getElementById("nav");

function toggleMenu(btn) {
  btn.addEventListener("click", () => {
    nav.classList.toggle("active");
    console.log("clicked");
  });
}

toggleMenu(closeBtn);
toggleMenu(menuBtn);

// closeBtn.addEventListener("click", () => {
//   console.log("clicked");
// });
