const e = React.createElement;

function App() {
  const [partidas, setPartidas] = React.useState([])
  const [error, setError] = React.useState("");
  let [loading, setLoading] = React.useState(false);

  async function cargarDatos() {
    setLoading(true)
    setError("")

    try {
      const respuesta = await fetch("https://explorer.lichess.ovh/masters")

      if (!respuesta.ok) throw new Error()

      const datos = await respuesta.json()

      if (datos.moves && Array.isArray(datos.moves)) { // Comprobación de objeto array para trabajar con el mét\odo slice
        setPartidas(datos.moves.slice(0, 5));
      }

    } catch(error) {
      console.error('Error al cargar los movimientos:', error);
    } finally { // Cuando termina...
      setLoading(false);
    }
  }

  return (
      React.createElement("div", null,
        React.createElement("h2", null, "Movimientos populares"),
        React.createElement("button", {onClick: cargarDatos}, "Cargar"),
        React.createElement(
          "input",
          {
            type: "text",
            placeholder: "Buscar movimiento...",
            onChange: comprobarMovimiento()
            },
          null),
        React.createElement("br", null, ""),
        error && React.createElement("p", {style: {color: "red"}}, error),
        loading
          ? React.createElement("p", null, "Cargando...")
          : React.createElement("ul", null,
              partidas.map((partida, index) =>
              React.createElement(
                "li",
                {key: index},
              `${partida.san}`
              )
          )
        )

      )
  )
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(React.createElement(App));