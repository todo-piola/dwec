import {updatePanel} from './Ejercicio8.js'

let coordenadaSeleccionada = null;
let target = ""
export let color = null
export let contadorMovimientos = 0
export let turnoBlancas = true

export let casillaOrigen = ""
export let square = ""
export let piece = ""

const PIECES = {
  WHITE: "♙",
  BLACK: "♟"
};

export function resetEstadoJuego() {
  contadorMovimientos = 0
  turnoBlancas = true
}

function limpiarHighlights() {
  document.querySelectorAll(".highlight")
    .forEach(sq => sq.classList.remove("highlight"));
}

function movePiece(from, to, piece) {
  from.textContent = "";
  if(color) to.textContent = PIECES.WHITE
  else to.textContent = PIECES.BLACK
  contadorMovimientos++;
  turnoBlancas = !turnoBlancas
}

export function deshaceMovimiento(from, to, piece) {
  from.textContent = piece;
  to.textContent = "";
  contadorMovimientos--;
  turnoBlancas = !turnoBlancas
  updatePanel()
}

board.addEventListener("click", (event) => {
  square = event.target;

  if (!square.classList.contains("square")) return;

  if(square.classList.contains("highlight")) {
    casillaOrigen = document.querySelector(`[data-pos="${coordenadaSeleccionada}"]`);

    movePiece(casillaOrigen, square, square.textContent);
    limpiarHighlights();
    updatePanel()
    return  // importante salir del evento para que no se active otra vez el highlight una vez se ha movido la pieza
  } else limpiarHighlights();

  // Si es peón...
  if (square.textContent === PIECES.WHITE || square.textContent === PIECES.BLACK ) {
    piece = square.textContent;
    color = piece === PIECES.WHITE; //color es true si el contenido de la casilla pulsada es peón blanco, si no color es false

    const isWhitePiece = piece === PIECES.WHITE;

    // Verificar si es el turno correcto
    if (isWhitePiece !== turnoBlancas) {
      console.log(`No es el turno de las ${isWhitePiece ? 'blancas' : 'negras'}`);
      return;
    }

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