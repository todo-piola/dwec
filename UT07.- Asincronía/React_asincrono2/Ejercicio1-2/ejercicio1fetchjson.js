
// noinspection JSUnresolvedReference

async function obtenerDatos() {
  const respuesta = await fetch("movimientos.json")
  const datos = await respuesta.json()
  return datos || []
}

function MensajeCargando({ loading }) {
  return loading ? React.createElement("p", null, "Cargando...") : null
}

function App() {
  const [partidas, setPartidas] = React.useState([])
  const [loading, setLoading] = React.useState(false)
  const [buscador, setBuscador] = React.useState("")

  const partidasFiltradas = partidas.filter(p => p.san.toLowerCase().includes(buscador.toLowerCase()))

  React.useEffect(() => {
    setLoading(true)
    obtenerDatos()
      .then(datos => setPartidas(datos))
      .finally(() => setLoading(false))
  }, [buscador])

  return React.createElement("div", null,
    React.createElement("h1", null, "Movimientos desde archivo .json"),
    React.createElement(MensajeCargando, { loading: loading }),
    React.createElement("input", { type: "text", placeholder: "Filtrar partida...", value: buscador, onChange: e => setBuscador(e.target.value) }),
    React.createElement("ul", null, partidasFiltradas.map((partida, index) =>
        React.createElement("li", { key: index }, `${partida.san} ${partida.name}`))
    )
  )}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(React.createElement(App));