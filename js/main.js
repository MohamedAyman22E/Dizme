let navList = document.querySelector(".navlist");
let button_x = document.querySelector(".button-x");

button_x.addEventListener("click", () => {
  button_x.classList.toggle("active");
  navList.classList.toggle("active");
});
