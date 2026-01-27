export function generarPeones(casillas) {
  casillas.forEach((casilla) => {
    if (casilla.dataset.posicion.endsWith("2") || casilla.dataset.posicion.endsWith("7")) {
      const p = document.createElement("p");

      if (casilla.dataset.posicion.endsWith("2")) p.textContent = "♙"
      else p.textContent = "♟"

      p.style.textAlign = "center"
      casilla.append(p)
    }
  })
  return casillas
}

