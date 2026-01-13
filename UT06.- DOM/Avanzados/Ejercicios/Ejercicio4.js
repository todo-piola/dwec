import {gameState, board} from "./Ejercicio1.js"

const esPar = num => num % 2 === 0;

const arrayLetras = [ "h", "g", "f", "e", "d", "c", "b", "a"]
const arrayNumeros = [1, 2, 3, 4, 5, 6, 7, 8]
let contadorLetras = 7
let contadorNumeros = 7



let divTablero = document.createElement("div")
divTablero.classList.add("tableroCasillas")
divTablero.style.display = "flex"
divTablero.style.flexWrap = "wrap"
document.body.append(divTablero)


createBoard(board)


function createBoard(board) {
  for (let i = 1; i <= 64; i++) {
    const casilla = document.createElement("p")

    casilla.textContent = arrayLetras[contadorLetras] + arrayNumeros[contadorNumeros];
    contadorLetras--;

    if (contadorLetras < 0) {
      contadorLetras = 7;
      contadorNumeros--;
      divTablero = document.createElement("div")
      document.body.append(divTablero)
    }

    if (esPar(i)) casilla.style.backgroundColor = "brown";
    else casilla.style.backgroundColor = "beige";
    casilla.dataset.pos = casilla.textContent
    casilla.style.width = "50px";
    casilla.style.height = "50px";
    casilla.style.border = "1px solid black";


    divTablero.append(casilla)
  }
}