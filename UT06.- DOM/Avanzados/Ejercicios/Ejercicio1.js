export const gameStatePeones = {
  peones : Array(8).fill("♙")
}

export const peonesColumna = document.getElementById("peones")

export function renderPawns(gameState) {
  peonesColumna.textContent = ""

  for(const pawn of gameState.peones) {
    const p = document.createElement("p")
    p.textContent = pawn
    p.style.margin = "5px"
    peonesColumna.append(p)
  }
}

renderPawns(gameStatePeones)