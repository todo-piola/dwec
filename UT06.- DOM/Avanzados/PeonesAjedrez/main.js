
const casillaEstaVacia = (index, piezas) => !piezas[index];

function esCoronacion(pieza, destino) {
  if (pieza.tipo !== 'peon') return false;

  // Blancas llegan a la fila 0 (0-7)
  // Negras llegan a la fila 7 (56-63)
  return (pieza.color === 'blanco' && destino <= 7) || (pieza.color === 'negro' && destino >= 56);
}

function App() {
  return (
    React.createElement(
      'div',
      null,
      React.createElement(Tablero, {posicionesIniciales})
    )
  )
}

function esMovimientoValidoPeon(origen, destino, pieza, piezas) {
  const direccion = pieza.color === "negro" ? 1 : -1;
  const filaInicial = pieza.color === "negro" ? 1 : 6;
  const filaActual = Math.floor(origen / 8);

  // Definimos los posibles pasos
  const pasoSimple = origen + (8 * direccion);
  const pasoDoble = origen + (16 * direccion);
  const diagonalIzquierda = origen + (7 * direccion);
  const diagonalDerecha = origen + (9 * direccion);

  // REGLA 1: Caminar hacia adelante (1 casilla)
  if (destino === pasoSimple && casillaEstaVacia(destino, piezas)) {
    return true;
  }

  // REGLA 2: Correr al principio (2 casillas)
  if (destino === pasoDoble &&
    filaActual === filaInicial &&
    casillaEstaVacia(pasoSimple, piezas) &&
    casillaEstaVacia(pasoDoble, piezas)) {
    return true;
  }

  // REGLA 3: Cazar en diagonal
  if ((destino === diagonalIzquierda || destino === diagonalDerecha) &&
    piezas[destino] && piezas[destino].color !== pieza.color) { // Compruebo que haya enemigo en la casilla destino
    return true;
  }

  return false; // Si no cumple ninguna, el movimiento es ilegal
}

function validarMovimiento(origen, destino, pieza, piezas) {
  if(!pieza) return false;

  // Si la pieza seleccionada es del mismo color que la pieza a donde quiere ir, no se puede mover
  if (piezas[destino] && piezas[destino].color === pieza.color) {
    return false;
  }

  switch (pieza.tipo) {
    case "peon": return esMovimientoValidoPeon(origen, destino, pieza, piezas);
    default:
      console.log("Movimiento inválido para " + pieza.tipo);
      return false;
  }
}

function Pieza({ tipo, color}) {
  const iconos = {
    peon: { blanco: '♙', negro: '♟︎' },
    torre: { blanco: '♖', negro: '♜' },
    caballo: { blanco: '♘', negro: '♞' },
    alfil: { blanco: '♗', negro: '♝' },
    reina: { blanco: '♕', negro: '♛' },
    rey: { blanco: '♔', negro: '♚' }
  };
  return React.createElement(
    'div',
    { style: { fontSize: "40px" , display: "flex", justifyContent: "center", cursor: "pointer"} },
    iconos[tipo][color]
  )
}

function Casilla({ index, pieza, onClick, seleccionada}) {
  const fila = Math.floor(index / 8);
  const columna = index % 8;
  // Patrón de tablero: las casillas son blancas cuando ambas coordenadas son afines
  const esBlanca =  fila % 2 === 0 && columna % 2 === 0 ||
                            fila % 2 === 1 && columna % 2 === 1;
  const estaSeleccionada = seleccionada === index;

  return React.createElement(
    'div',
    {
      style: { border: "1px solid black", width: "50px", height: "50px", backgroundColor: estaSeleccionada ? "lightgray" : undefined },
      className: esBlanca ? "white" : "black",
      onClick: onClick
    },
    // pieza será: { tipo: "peon", color: "blanco" } o undefined
    pieza ? React.createElement(Pieza, { tipo: pieza.tipo, color: pieza.color }) : null
  )
}

function Tablero() {
  const casillasTotales = Array(64).fill(null);

  // 'piezas' es el valor actual (el objeto con todas las posiciones).
  const [piezas, setPiezas] = React.useState(posicionesIniciales);

  // controlo el orden de juego según color
  let [turno, setTurno] = React.useState("blanco");

  let [seleccionada, setSeleccionada] = React.useState(null);

  const manejarClick = (index) => {
    // Primer clic: selecciona la pieza del turno actual
    if (seleccionada === null) {
      if (piezas[index] && piezas[index].color === turno) {
        setSeleccionada(index);
      }
    } else {
      // Segundo clic: intentar mover la pieza
      const piezaAMover = piezas[seleccionada];

      if (validarMovimiento(seleccionada, index, piezaAMover, piezas)) {
        const nuevasPiezas = { ...piezas }; // Copia del estado actual para no mutarlo directamente

        if (esCoronacion(piezaAMover, index)) {
          nuevasPiezas[index] = { tipo: 'reina', color: piezaAMover.color };
        } else {
          nuevasPiezas[index] = piezaAMover; // Añado la pieza que muevo a la casilla destino
        }

        delete nuevasPiezas[seleccionada]; // Elimino la pieza del origen

        setPiezas(nuevasPiezas)
        setTurno(turno === 'blanco' ? 'negro' : 'blanco'); // Si es válido cambia el turno

      } else {
          console.log("Movimiento inválido para " + piezaAMover.tipo);
      }
      setSeleccionada(null); // Siempre se limpia el segundo clic
    }
  };

  return React.createElement(
    'div',
    {
      style: {
        display: "grid",
        gridTemplateColumns: "repeat(8, 50px)",
        gridTemplateRows: "repeat(8, 50px)"
      }
    },
    casillasTotales.map((_, index) => {
      // Buscamos si en este index hay alguna pieza en el estado de piezas
      const pieza = piezas[index]; // Puede ser undefined si no hay pieza

      return React.createElement(
        Casilla,
        {
          key: Number(index),
          index: index,
          pieza: pieza,
          seleccionada: seleccionada,
          onClick: () => manejarClick(Number(index))
        });
    })
  )
}

const root = ReactDOM.createRoot(document.getElementById('board'));
board.style.display = "flex";
board.style.justifyContent = "center";
board.style.paddingTop = "70px";
root.render(React.createElement(App));

const posicionesIniciales = {
  // --- FILA 0: Piezas Negras (Mayores) ---
  // 0: { tipo: "torre", color: "negro" },
  // 1: { tipo: "caballo", color: "negro" },
  // 2: { tipo: "alfil", color: "negro" },
  // 3: { tipo: "reina", color: "negro" },
  // 4: { tipo: "rey", color: "negro" },
  // 5: { tipo: "alfil", color: "negro" },
  // 6: { tipo: "caballo", color: "negro" },
  // 7: { tipo: "torre", color: "negro" },

  // --- FILA 1: Peones Negros ---
  8: { tipo: "peon", color: "negro" },
  9: { tipo: "peon", color: "negro" },
  10: { tipo: "peon", color: "negro" },
  11: { tipo: "peon", color: "negro" },
  12: { tipo: "peon", color: "negro" },
  13: { tipo: "peon", color: "negro" },
  14: { tipo: "peon", color: "negro" },
  15: { tipo: "peon", color: "negro" },

  // (Las casillas 16 a 47 están vacías)

  // --- FILA 6: Peones Blancos ---
  48: { tipo: "peon", color: "blanco" },
  49: { tipo: "peon", color: "blanco" },
  50: { tipo: "peon", color: "blanco" },
  51: { tipo: "peon", color: "blanco" },
  52: { tipo: "peon", color: "blanco" },
  53: { tipo: "peon", color: "blanco" },
  54: { tipo: "peon", color: "blanco" },
  55: { tipo: "peon", color: "blanco" },

  // --- FILA 7: Piezas Blancas (Mayores) ---
  // 56: { tipo: "torre", color: "blanco" },
  // 57: { tipo: "caballo", color: "blanco" },
  // 58: { tipo: "alfil", color: "blanco" },
  // 59: { tipo: "reina", color: "blanco" },
  // 60: { tipo: "rey", color: "blanco" },
  // 61: { tipo: "alfil", color: "blanco" },
  // 62: { tipo: "caballo", color: "blanco" },
  // 63: { tipo: "torre", color: "blanco" }
};