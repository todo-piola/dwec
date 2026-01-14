import {board} from "./Ejercicio1.js"

const esPar = num => num % 2 === 0;

const arrayLetras = [ "h", "g", "f", "e", "d", "c", "b", "a"]
const arrayNumeros = [1, 2, 3, 4, 5, 6, 7, 8]
let contadorLetras = 7
let contadorNumeros = 7



let divTablero = document.createElement("div")

divTablero.style.display = "grid"
divTablero.style.gridTemplateColumns = "repeat(8, 50px)"
divTablero.style.width = "400px"
divTablero.className = "tablero"

document.body.append(divTablero)


createBoard(board)


function createBoard(board) {
  let color = true
  for (let i = 1; i <= 64; i++) {
    const casilla = document.createElement("p")

    if (contadorLetras < 0) {
      contadorLetras = 7;
      contadorNumeros--;
    }

    casilla.style.backgroundColor = color ? "beige" : "brown";
    color = !color;

    if (i % 8 === 0) {
      color = !color; // invierte al cambiar de fila
    }

    casilla.dataset.pos = arrayLetras[contadorLetras] + arrayNumeros[contadorNumeros];
    casilla.style.width = "50px";
    casilla.style.height = "50px";
    casilla.style.border = "1px solid black";
    casilla.style.margin = "0";

    divTablero.append(casilla)

    contadorLetras--;
  }
}