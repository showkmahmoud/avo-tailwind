const btn = document.getElementById("menu-btn");
const nav = document.getElementById("menu");

btn.addEventListener("click", () => {
  nav.classList.toggle("hidden");
  nav.classList.toggle("flex");
});
