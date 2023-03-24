window.addEventListener("scroll", function () {
  var header = this.document.querySelector("header");
  header.classList.toggle("sticky", this.window.scrollY > 0);
});

let links = document.querySelector(".link");

window.addEventListener("click", function () {
  var logo = this.document.querySelector(".logo");
  logo.classList.toggle("moveRight");
});

window.addEventListener("click", function () {
  var link = this.document.querySelector(".link");
  link.classList.toggle("moveLeft");
});
