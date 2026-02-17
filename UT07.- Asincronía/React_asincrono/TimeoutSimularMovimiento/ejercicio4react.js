// noinspection JSUnresolvedReference

function BotonSimular({setHistorial, contador, setContador, movimientos, mensaje, setMensaje }) {

  const enProgreso = mensaje === "Simulando movimiento..."

  const onClick = async () => {
    if (contador < movimientos.length) {
      setMensaje("Simulando movimiento...");

      setTimeout(() => {
        setMensaje("Movimiento simulado");

        const nuevoMovimiento = `Movimiento ${contador+1}: ${movimientos[contador]}`;

        setHistorial((prevHistorial) => [...prevHistorial, nuevoMovimiento]); // Añado el nuevo movimiento al final del array anterior
        setContador(contador + 1)
      }, 1000)
    }
  }

  return React.createElement(
    "div",
    null,
    React.createElement(
      "button",
      { onClick: onClick, disabled: mensaje === "Simulando movimiento..." },
      contador >= movimientos.length ? "Fin de la secuencia" : "Simular movimiento"
    ),
    React.createElement(
      "h4",
      { style: enProgreso ? { color: "red" } : { color: "green"} },
      mensaje
    )
  )
}

function Historial({ historial }) {
  return React.createElement(
    "ul",
    null,
    historial.map((movimiento, index) => React.createElement("li", { key: index }, movimiento))
  );
}

function App() {
  const [movimientos, setMovimientos] = React.useState(["e4", "d4", "Nf3"]);
  const [historial, setHistorial] = React.useState([]);
  const [contador, setContador] = React.useState(0);
  const [mensaje, setMensaje] = React.useState("");

  return React.createElement(
    "div",
    null,
    React.createElement(
      BotonSimular,
      {
        setHistorial: setHistorial,
        movimientos: movimientos,
        contador: contador,
        setContador: setContador,
        mensaje: mensaje,
        setMensaje: setMensaje
      }
    ),
    React.createElement(Historial, { historial: historial })
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(React.createElement(App));