import {updatePanel} from './Ejercicio8.js'

let coordenadaSeleccionada = null;
let target = ""
export let color = null
export let contadorMovimientos = 0

const PIECES = {
  WHITE: "♙",
  BLACK: "♟"
};

function limpiarHighlights() {
  document.querySelectorAll(".highlight")
    .forEach(sq => sq.classList.remove("highlight"));
}

function movePiece(from, to, piece) {
  from.textContent = "";
  if(color) to.textContent = PIECES.WHITE
  else to.textContent = PIECES.BLACK
  contadorMovimientos++;
}



board.addEventListener("click", (event) => {
  const square = event.target;

  if (!square.classList.contains("square")) return;

  if(square.classList.contains("highlight")) {
    const casillaOrigen = document.querySelector(`[data-pos="${coordenadaSeleccionada}"]`);

    movePiece(casillaOrigen, square, square.textContent);
    limpiarHighlights();
    return  // importante salir del evento para que no se active otra vez el highlight una vez se ha movido la pieza
  }

  // Si es peón...
  if (square.textContent === PIECES.WHITE || square.textContent === PIECES.BLACK) {
    const piece = square.textContent;
    color = piece === PIECES.WHITE; //color es true si el contenido de la casilla pulsada es peón blanco, si no color es false

    let nextRank = ""
    coordenadaSeleccionada = square.dataset.pos;

    const col = coordenadaSeleccionada[0];
    const fila = coordenadaSeleccionada[1];

    if(color) nextRank = parseInt(fila) + 1;
    else nextRank = parseInt(fila) - 1;

    target = document.querySelector(`[data-pos="${col}${nextRank}"]`); // se almacena la casilla posterior al peón
    if (target.textContent === "") target.classList.add("highlight");   // si esa casilla está vacía, se subraya destacado
  }
});