// noinspection JSUnresolvedReference

async function obtenerMovimientos(busqueda) {
  const respuesta = await fetch("https://explorer.lichess.ovh/masters");
  if (!respuesta.ok) throw new Error("Error en la petición");
  const datos = await respuesta.json();
  return datos.moves || [];
}

function BuscadorPartidas({ busqueda, setBusqueda }) {
  return React.createElement(
    "input",
    {
      type: "text",
      placeholder: "Filtrar partida...",
      value: busqueda,
      onChange: (e) => { setBusqueda(e.target.value) }
    }
  )
}

function ListaDinamica({ busqueda, partidasFiltradas }) {
  if (!busqueda) return null;

  return React.createElement("ul", null, partidasFiltradas.map((partida, index) =>
      React.createElement("li", { key: index }, `${partida.san}`)))
}

function App() {
  const [partidas, setPartidas] = React.useState([]);
  const [busqueda, setBusqueda] = React.useState("");

  React.useEffect(() => { // useEffect asegura que la API solo se llame AL MONTAR el componente
    obtenerMovimientos()
      .then(moves => setPartidas(moves))
      .catch(err => console.error(err));
  }, []); // El array vacío como segundo argumento hace que el efecto solo se ejecute una vez

  const partidasFiltradas = partidas.filter(p =>             //Filtrado dinámico se ejecuta en cada render
    p.san.toLowerCase().includes(busqueda.toLowerCase())
  );

  return React.createElement("div", null,

    React.createElement("h1", null, "Buscador de partidas"),
    React.createElement(BuscadorPartidas, { busqueda: busqueda, setBusqueda: setBusqueda }),
    React.createElement(ListaDinamica, {busqueda: busqueda, partidasFiltradas: partidasFiltradas}
    )
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(React.createElement(App));