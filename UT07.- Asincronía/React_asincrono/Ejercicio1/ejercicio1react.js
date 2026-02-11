const e = React.createElement;

function App() {
  const [partidas, setPartidas] = React.useState([])
  const [error, setError] = React.useState("");

  async function cargarDatos() {
    setError("")
    try {
      const respuesta = await fetch("https://explorer.lichess.ovh/masters")
      if (!respuesta.ok) throw new Error()

      const datos = await respuesta.json()

      if (datos.moves && Array.isArray(datos.moves)) {
        setPartidas(datos.moves.slice(0, 5));
        console.log(datos.moves.slice(0, 5));
      }

    } catch(error) {
      console.error('Error al cargar los movimientos:', error);
    }
  }

  return (
      React.createElement("div", null,
        React.createElement("h2", null, "Movimientos populares"),
        React.createElement("button", {onClick: cargarDatos}, "Cargar"),
        error && React.createElement("p", {style: {color: "red"}}, error),
        React.createElement(
          "ul",
          null,
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

function botonCargar({onClick}) {
  return (
    React.createElement(
      'button',
      { onClick: onClick },
      'Cargar datos'
    )
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(React.createElement(App));