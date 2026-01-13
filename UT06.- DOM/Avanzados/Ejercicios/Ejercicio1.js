export const gameState = {
  peones : Array(8).fill("♙")
}

export const board = document.getElementById("board")

export function renderPawns(gameState) {
  board.textContent = ""

  for(const pawn of gameState.peones) {
    const p = document.createElement("p")
    p.textContent = pawn
    p.style.margin = "5px"
    board.append(p)
  }
}

renderPawns(gameState)