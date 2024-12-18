const angle_down = document.querySelector(".dropdown");
const specs = document.querySelector(".pc-spex-categories");
// console.log(specs);
angle_down.addEventListener("click", () => {
  specs.classList.toggle("down");
});
