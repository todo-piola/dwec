const esPar = num => num % 2 === 0

export function crearTablero(tablero){
  for (let i = 8; i >= 1; i--) {
    for (let j = 1; j <= 8; j++) {
      const casilla = document.createElement("div")
      casilla.classList.add('square', 'casilla')
      casilla.style.border = "1px solid black"
      if (esPar(j + i)) casilla.classList.add('light')
      else casilla.classList.add('dark')
      inscribirPosicion(i, j, casilla)

      tablero.append(casilla)
    }
  }
  return tablero
}

function inscribirPosicion (fila, col, casilla) {
  switch (col) {
    case 1:
      casilla.dataset.posicion = `a${fila}`
      break
    case 2:
      casilla.dataset.posicion = `b${fila}`
      break
    case 3:
      casilla.dataset.posicion = `c${fila}`
      break
    case 4:
      casilla.dataset.posicion = `d${fila}`
      break
    case 5:
      casilla.dataset.posicion = `e${fila}`
      break
    case 6:
      casilla.dataset.posicion = `f${fila}`
      break
    case 7:
      casilla.dataset.posicion = `g${fila}`
      break
    case 8:
      casilla.dataset.posicion = `h${fila}`
      break
  }
  return casilla
}