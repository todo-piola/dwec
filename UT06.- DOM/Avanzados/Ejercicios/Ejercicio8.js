import {color, contadorMovimientos} from './Ejercicio7.js'

createPanel()

function createPanel() {
  const panel = document.createElement("div")
  panel.classList.add("panel");
  document.body.append(panel)
}


export function updatePanel() {
  const panel = document.querySelector(".panel")
  panel.textContent = `Turno actual: ${color ? "Negras" : "Blancas"} - Total de Movimientos: ${contadorMovimientos }`
}

