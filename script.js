function sumar() {
  this.alert("2 + 2 es igual a " + 4);
}

const btn = document.getElementById("btn");

btn.addEventListener("click", sumar.bind(window));
