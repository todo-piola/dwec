

function App() {

  return (
    React.createElement(
      'div',
      null,
      React.createElement(Tablero)
    )

  )
}

function esMovimientoValido(origen, destino, color) {

}


function Peon({ index }) {

  if (index >= 8 && index <= 15) {
    return React.createElement(
      'div',
      { style: { fontSize: "40px", textAlign: "center" , cursor: "pointer"} },
      '♟︎'
    )
  } else if (index >= 48 && index <= 55) {
    return React.createElement(
      'div',
      { style: { fontSize: "40px", textAlign: "center" , cursor: "pointer" } },
      '♙'
    )
  }
}



function esBlanca(fila, columna) {
  return (fila + columna) % 2 === 0;
}

function Casilla({ onClick, color, index }) {
  return React.createElement(
    'div',
    {
      style: { border: "1px solid black", width: "50px", height: "50px" },
      className: color ? "white" : "black",
      onClick: onClick
    },
    React.createElement(Peon, { index })
  )
}

function Tablero() {
  let color = true
  let [seleccionada, setSeleccionada] = React.useState(null);

  const manejarClick = (index) => {

    if(seleccionada == null) { // Primer clic
      setSeleccionada(index)
      console.log(index)
    } else {                    // Segundo clic : Comprobar movimiento si es válido
      if (esMovimientoValido(seleccionada, index, color)) {

      }
      setSeleccionada(null) //Limpiar selección tras el segundo clic
    }
  }

  return React.createElement(
    'div',
    {
      style: {
        display: "grid",
        gridTemplateColumns: "repeat(8, 50px)"
      }
    },
    Array(64).fill("").map((_, index) => {
      const blanca = esBlanca(Math.floor(index / 8), index % 8);
      return React.createElement(
        Casilla,
        {
          key: index,
          index: index,
          color: blanca,
          onClick: () => manejarClick(index)
        });
    })
  )
}

const root = ReactDOM.createRoot(document.getElementById('board'));
board.style.display = "flex";
board.style.justifyContent = "center";
board.style.paddingTop = "70px";
root.render(React.createElement(App));