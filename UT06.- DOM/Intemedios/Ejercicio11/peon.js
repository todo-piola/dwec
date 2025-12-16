export function movimientoPeonValido(origen, destino) {

  const filaOrigen = parseInt(origen.dataset.posicion[1]);
  const filaDestino = parseInt(destino.dataset.posicion[1]);
  const columnaOrigen = origen.dataset.posicion[0];
  const columnaDestino = destino.dataset.posicion[0];

  if (columnaOrigen !== columnaDestino) return false; // No cambia de columnas

  // Lógica avance 1 casilla
  if (filaDestino === filaOrigen + 1 && destino.children.length === 0) {
    return true;
  }

  // Lógica avance 2 casillas
  if (filaOrigen === 2 && filaDestino === 4) {
    const casillaIntermedia = document.querySelector(`[data-posicion="${columnaOrigen}3"]`);
    if (casillaIntermedia.children.length === 0 && destino.children.length === 0) return true
  }

  return false;
}
