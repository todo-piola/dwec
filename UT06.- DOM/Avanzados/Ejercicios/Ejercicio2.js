import {gameState, renderPawns} from "./Ejercicio1.js";

function movePawn(fromIndex, toIndex) {
  if(toIndex >= 0 && toIndex < 8) {
    console.log("Peón movido de X a Y")
    renderPawns(gameState)
  }
}