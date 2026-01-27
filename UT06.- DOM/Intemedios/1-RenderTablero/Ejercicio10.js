const board = document.querySelector(".board");
const esPar = num => num % 2 === 0;

const arrayLetras = [ "h", "g", "f", "e", "d", "c", "b", "a"]
const arrayNumeros = [1, 2, 3, 4, 5, 6, 7, 8]
let contadorLetras = 7
let contadorNumeros = 7

for (let i = 1; i <= 64; i++) {

  const p = document.createElement("p");
  p.textContent = arrayLetras[contadorLetras] + arrayNumeros[contadorNumeros];
  contadorLetras--;

  if (contadorLetras < 0) {
    contadorLetras = 7;
    contadorNumeros--;
  }

  const div = document.createElement("div");
  div.classList.add("square", `${p.textContent.toLowerCase()}`);
  div.style.border = "1px solid black";
  if (esPar(i)) div.classList.add("dark");
  else div.classList.add("light");

  if (p.textContent === "e2") {
    p.textContent = "♙"
    p.style.textAlign = "center";
    div.append(p)
  }

  board.append(div);
}

// Recojo casilla e2 y le añado un evento
const seleccionada = document.querySelector(".e2")

seleccionada.addEventListener("click", () => {
  // Recojo casilla e4
  const casillaDestino = document.querySelector(".e4");
  casillaDestino.textContent = seleccionada.textContent;
  casillaDestino.style.textAlign = "center";
  casillaDestino.style.alignItems = "center";
  seleccionada.textContent = "";
})

