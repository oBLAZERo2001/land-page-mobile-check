window.addEventListener("scroll", function () {
  var header = document.querySelector(".nav");
  header.classList.toggle("sticky", window.scrollY > 0);
});

const burger = document.querySelector(".burger");
const nav = document.querySelector(".page-list");

burger.addEventListener("click", () => {
  nav.classList.toggle("nav-active");
});

document.querySelector(".black").addEventListener("click", () => {
  document.querySelector(".ALL").classList.toggle("clgChange");
});
