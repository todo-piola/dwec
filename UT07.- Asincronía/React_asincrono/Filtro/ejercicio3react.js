
function BotonCargar({ onClick, loading }) {
  return React.createElement(
    'button',
    { onClick: onClick, disabled: loading },
    loading ? "Cargando..." : "Cargar datos"
  );
}

function ErrorMensaje({ error }) {
  if (!error) return null;
  return React.createElement("p", { style: { color: "red" } }, error);
}

function ListaMovimientos({ partidas }) {
  return React.createElement(
    "ul",
    null,
    partidas.map((partida, index) =>
      React.createElement("li", { key: index }, `${partida.san}`)
    )
  );
}

function BuscadorMovimientos({ setBusqueda, partidas }) {
  return React.createElement(
    "input",
    { type: "text", placeholder: "Filtrar movimiento", onChange: (e) => { setBusqueda(e.target.value) }}
  )
}

function App() {
  const [partidas, setPartidas] = React.useState([]);
  const [error, setError] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const [busqueda, setBusqueda] = React.useState("");

  const partidasFiltradas = partidas.filter(p =>
    p.san.toLowerCase().includes(busqueda.toLowerCase())
  );

  // La función solo se encarga de la lógica
  async function cargarDatos() {
    setLoading(true)
    setError("");
    try {
      const respuesta = await fetch("https://explorer.lichess.ovh/masters");
      if (!respuesta.ok) throw new Error("Error en la petición");

      const datos = await respuesta.json();

      if (datos.moves) {
        setPartidas(datos.moves);
      }

    } catch (err) {
      setError("No se pudieron cargar los movimientos.");
      console.error(err);
    } finally {
      setLoading(false)
    }
  }

  return React.createElement(
    "div",
    null,
    React.createElement("h2", null, "Movimientos populares"),
    React.createElement(BotonCargar, { onClick: cargarDatos , loading: loading}),
    !loading && React.createElement(ListaMovimientos, { partidas: partidasFiltradas }),
    React.createElement(BuscadorMovimientos, { setBusqueda: setBusqueda, partidas: partidas }),
    React.createElement(ErrorMensaje, { error: error })
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(React.createElement(App));