import "./scss/main.scss";

document.addEventListener("DOMContentLoaded", () => {
  const snowGlobeEl = document.getElementById("snowglobe");

  window.addEventListener("keydown", (event) => {
    switch (event.key) {
      case "ArrowLeft":
        snowGlobeEl?.classList.add("move--left");
        break;
      case "ArrowRight":
        snowGlobeEl?.classList.add("move--right");
        break;
      case "ArrowUp":
        snowGlobeEl?.classList.add("move--up");
        break;
      case "ArrowDown":
        snowGlobeEl?.classList.add("move--down");
        break;
    }
  });

  window.addEventListener("keyup", (event) => {
    switch (event.key) {
      case "ArrowLeft":
        snowGlobeEl?.classList.remove("move--left");
        break;
      case "ArrowRight":
        snowGlobeEl?.classList.remove("move--right");
        break;
      case "ArrowUp":
        snowGlobeEl?.classList.remove("move--up");
        break;
      case "ArrowDown":
        snowGlobeEl?.classList.remove("move--down");
        break;
    }
  });
});
