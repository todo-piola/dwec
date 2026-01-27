import { crearTablero } from './tablero.js'
import { generarPeones } from './piezas.js'
import { manejarClick } from './movimientos.js'


const tablero = document.getElementById('board')

inicializarTablero()




function inicializarTablero() {
  crearTablero(tablero)

  const casillas = document.querySelectorAll('.casilla')
  generarPeones(casillas)
  recorrerTablero(casillas) // Añade un eventListener a cada casilla
}

function recorrerTablero(casillas) {
  casillas.forEach(casilla => {
    casilla.addEventListener("click", () => {
      manejarClick(casilla)
    })
  })
}