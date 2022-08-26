color = "";
const div01 = document.querySelector("#div01"),
  div02 = document.querySelector("#div02"),
  div03 = document.querySelector("#div03"),
  div04 = document.querySelector("#div04"),
  currentColor = document.querySelector(".currentColor");

document.addEventListener("keydown", (event) => {
  keyValue = event.key;
  if (keyValue === "a") {
    color = "#00FFFF";
    swapColor(currentColor);
  } else if (keyValue === "s") {
    color = "#adff2f";
    swapColor(currentColor);
  } else if (keyValue === "d") {
    color = "#6a5acd";
    swapColor(currentColor);
  }
});

const swapColor = function (element) {
  element.style.backgroundColor = color;
};

div01.addEventListener("click", () => {
  swapColor(div01);
});
div02.addEventListener("click", () => {
  swapColor(div02);
});
div03.addEventListener("click", () => {
  swapColor(div03);
});
div04.addEventListener("click", () => {
  swapColor(div04);
});
