
const letras = ["a", "b", "c", "d", "e", "f", "g", "h"];

let gameState = {
  pieces: [
    ...letras.map(letra => ({ tipo: "peon", color: "blanco", pos: `${letra}2`, emoji: "♙" })),
    { tipo: "torre", color: "blanco", pos: "a1", emoji: "♖" },
    { tipo: "caballo", color: "blanco", pos: "b1", emoji: "♘" },
    { tipo: "alfil", color: "blanco", pos: "c1", emoji: "♗" },
    { tipo: "reina", color: "blanco", pos: "d1", emoji: "♕" },
    { tipo: "rey", color: "blanco", pos: "e1", emoji: "♔" },
    { tipo: "alfil", color: "blanco", pos: "f1", emoji: "♗" },
    { tipo: "caballo", color: "blanco", pos: "g1", emoji: "♘" },
    { tipo: "torre", color: "blanco", pos: "h1", emoji: "♖" },

    ...letras.map(letra => ({ tipo: "peon", color: "negro", pos: `${letra}7`, emoji: "♟" })),
    { tipo: "torre", color: "negro", pos: "a8", emoji: "♜" },
    { tipo: "caballo", color: "negro", pos: "b8", emoji: "♞" },
    { tipo: "alfil", color: "negro", pos: "c8", emoji: "♝" },
    { tipo: "reina", color: "negro", pos: "d8", emoji: "♛" },
    { tipo: "rey", color: "negro", pos: "e8", emoji: "♚" },
    { tipo: "alfil", color: "negro", pos: "f8", emoji: "♝" },
    { tipo: "caballo", color: "negro", pos: "g8", emoji: "♞" },
    { tipo: "torre", color: "negro", pos: "h8", emoji: "♜" }
  ]
};

renderPieces(gameState);

function renderPieces(state) {
  const tablero = document.getElementsByClassName("tablero");

  for(const pieza of state.pieces) {
    const casilla = document.querySelector(`[data-pos="${pieza.pos}"]`)
    if (casilla) {
      casilla.textContent = pieza.emoji;
      casilla.style.textAlign = "center";
      casilla.style.fontSize = "40px";
    } else {
      console.warn(`No se encontró la casilla para la posición: ${pieza.pos}`);
    }
  }
}