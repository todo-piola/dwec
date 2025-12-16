import { movimientoPeonValido } from './peon.js'

let origen = null;

export function manejarClick(casilla) {
  if (!origen) {  // Primer click gestiona el origen del movimiento
    const pieza = casilla.querySelector('p');

    if (!pieza) return; // Si <p> está vacío, no hay pieza dentro y sale de la función
    if (pieza.textContent !== '♙') return; // Si no es un peón blanco, también sale de la función

    origen = casilla; // Guardo la casilla como origen del movimiento
    casilla.classList.add('seleccionada');
    return;
  }

  if (origen === casilla) { // Si el segundo clic es en la misma casilla, se cancela el movimiento
    cancelarSeleccion();
    return;
  }

  if (movimientoPeonValido(origen, casilla)) {
    console.log("Movimiento válido");
    moverPieza(origen, casilla);
  } else {
    console.log("Movimiento NO válido");
  }

  cancelarSeleccion();  // Después del intento de movimiento se limpia la selección
}


function moverPieza(origen, destino) {
  const pieza = origen.querySelector('p');
  destino.append(pieza);

}

function cancelarSeleccion() {
  origen.classList.remove('seleccionada'); // Elimino la clase previamente añadida
  origen = null;
}
