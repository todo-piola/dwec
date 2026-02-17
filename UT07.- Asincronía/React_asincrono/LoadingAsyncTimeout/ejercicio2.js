
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

function App() {
  const [partidas, setPartidas] = React.useState([]);
  const [error, setError] = React.useState("");
  const [loading, setLoading] = React.useState(false);

  // La función solo se encarga de la lógica
  async function cargarDatos() {
    setLoading(true)
    setError("");
    setTimeout(async () => {
      try {
        const respuesta = await fetch("https://explorer.lichess.ovh/masters");
        if (!respuesta.ok) throw new Error("Error en la petición");

        const datos = await respuesta.json();

        if (datos.moves) {
          setPartidas(datos.moves.slice(0, 5));
        }

      } catch (err) {
        setError("No se pudieron cargar los movimientos.");
        console.error(err);
      } finally {
        setLoading(false)
      }
    }, 2000)
  }

  // EL RETURN SIEMPRE AL FINAL DE LA FUNCIÓN APP
  return React.createElement(
    "div",
    null,
    React.createElement("h2", null, "Movimientos populares"),
    React.createElement(BotonCargar, { onClick: cargarDatos , loading: loading}),
    !loading && React.createElement(ListaMovimientos, { partidas: partidas }),
    React.createElement(ErrorMensaje, { error: error })
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(React.createElement(App));