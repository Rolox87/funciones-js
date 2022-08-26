// 3.1

// function pintar(elemento) {
//   elemento.style.backgroundColor = "yellow";
// }

// ele = document.getElementById("ele1");
// ele.addEventListener("click", function () {
//   pintar(ele);
// });

// 3.2
function pintar(elemento, color = "green") {
  elemento.style.backgroundColor = color;
}
ele = document.getElementById("ele1");
pintar(ele);
ele.addEventListener("click", function () {
  pintar(ele, "yellow");
});