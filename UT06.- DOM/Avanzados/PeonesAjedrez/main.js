
function App() {

  return (
    React.createElement(
      'div',
      null,
      React.createElement(Tablero, {posicionesIniciales})
    )
  )
}

function esMovimientoValidoPeon(origen, destino, color) {
  const direccion = color ? -1 : 1;
  const pasoSimple = origen + (8 * direccion)
  const pasoDoble = origen + (16 * direccion)

  return pasoSimple === destino || pasoDoble === destino;
}

function validarMovimiento(origen, destino, pieza) {

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

function Casilla({ index, pieza, onClick }) {
  const fila = Math.floor(index / 8);
  const columna = index % 8;
  const esBlanca =  fila % 2 === 0 && columna % 2 === 0 || fila % 2 === 1 && columna % 2 === 1;

  // pieza será: { tipo: "peon", color: "blanco" } o undefined
  return React.createElement(
    'div',
    {
      style: { border: "1px solid black", width: "50px", height: "50px" },
      className: esBlanca ? "white" : "black",
      onClick: onClick
    },
    pieza ? React.createElement(Pieza, { tipo: pieza.tipo, color: pieza.color }) : null
  )
}

function Tablero() {
  const casillasTotales = Array(64).fill(null);
  let [seleccionada, setSeleccionada] = React.useState(null);

  const manejarClick = (index) => {
    // seleccionada = ORIGEN **** index = DESTINO
    if(seleccionada == null) { // Primer clic
      setSeleccionada(index)
      console.log(index)
    } else {
      console.log(index)          // Segundo clic : Comprobar movimiento si es válido
      if (validarMovimiento(seleccionada, index, posicionesIniciales[index].tipo)) {
        const tipo = posicionesIniciales[index].tipo;
        switch (tipo) {
          case "peón":

        }
      }
      setSeleccionada(null) //Limpiar selección tras el segundo clic
    }
  }

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
      // Buscamos si en este index hay algo en nuestro estado de piezas
      const datosPieza = posicionesIniciales[index];

      return React.createElement(
        Casilla,
        {
          key: Number(index),
          index: index,
          pieza: datosPieza,
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
  0: { tipo: "torre", color: "negro" },
  1: { tipo: "caballo", color: "negro" },
  2: { tipo: "alfil", color: "negro" },
  3: { tipo: "reina", color: "negro" },
  4: { tipo: "rey", color: "negro" },
  5: { tipo: "alfil", color: "negro" },
  6: { tipo: "caballo", color: "negro" },
  7: { tipo: "torre", color: "negro" },

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
  56: { tipo: "torre", color: "blanco" },
  57: { tipo: "caballo", color: "blanco" },
  58: { tipo: "alfil", color: "blanco" },
  59: { tipo: "reina", color: "blanco" },
  60: { tipo: "rey", color: "blanco" },
  61: { tipo: "alfil", color: "blanco" },
  62: { tipo: "caballo", color: "blanco" },
  63: { tipo: "torre", color: "blanco" }
};