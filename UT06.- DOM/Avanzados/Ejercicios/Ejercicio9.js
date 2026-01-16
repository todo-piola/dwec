import {gameState, renderPieces} from './Ejercicio6.js'
import {resetEstadoJuego, deshaceMovimiento, casillaOrigen, square, piece} from './Ejercicio7.js'
import { updatePanel } from './Ejercicio8.js'

const board = document.querySelector("#board");

addEventListener("keydown", (e) => {
  const letraPulsada = e.key;
  if(letraPulsada === "r") {
    board.querySelectorAll(".square").forEach(casilla => casilla.textContent = "")
    renderPieces(gameState)
    resetEstadoJuego()
    updatePanel()
  } else if(letraPulsada === "u") {
    deshaceMovimiento(casillaOrigen, square, piece)
  }
})