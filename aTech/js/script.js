let menu = document.querySelector("#menu-bar");
let navbar = document.querySelector(".link");

navbar.onclick = () => {
  var logo = this.document.querySelector(".logo");
  logo.classList.toggle("moveRight");
  var link = this.document.querySelector(".link");
  link.classList.toggle("moveLeft");
};

menu.onclick = () => {
  menu.classList.toggle("fa-times");
  navbar.classList.toggle("active");
};

window.addEventListener("scroll", function () {
  var header = this.document.querySelector("header");
  header.classList.toggle("sticky", this.window.scrollY > 0);
});
