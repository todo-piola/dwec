// noinspection JSUnresolvedReference

async function cargarDatos(partidas, setPartidas) {
    //setError("");

    if(partidas.length === 0) {
      try {
        const respuesta = await fetch("https://explorer.lichess.ovh/masters");
        if (!respuesta.ok) throw new Error("Error en la petición");

        const datos = await respuesta.json();

        if (datos.moves) {
          setPartidas(datos.moves);
        }

      } catch (err) {
        // setError("No se pudieron cargar los movimientos.");
        console.error(err);
      }
    }
}

function BuscadorPartidas({ busqueda, setBusqueda, partidas }) {
  partidas.filter(p => p.san.toLowerCase().includes(busqueda.toLowerCase()))

  return React.createElement(
    "input",
    { type: "text", placeholder: "Filtrar partida", onChange: (e) => { setBusqueda(e.target.value) }}
  )
}

function App() {
  const [partidas, setPartidas] = React.useState([]);
  const [busqueda, setBusqueda] = React.useState("");
  const [error, setError] = React.useState("");

  cargarDatos(partidas, setPartidas);

  return React.createElement(
    "div",
    null,
    React.createElement("h1", null, "Buscador de partidas"),
    React.createElement(BuscadorPartidas, { busqueda: busqueda, setBusqueda: setBusqueda, partidas: partidas }),
    React.createElement(
      "ul",
      null,
      partidas.map((partida, index) =>
        React.createElement("li", { key: index }, `${partida.san}`)
      )
    )
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(React.createElement(App));