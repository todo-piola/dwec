
// noinspection JSUnresolvedReference

async function obtenerDatos() {
  const respuesta = await fetch("movimientos.json")
  const datos = await respuesta.json()
  return datos || []
}

function BotonMovimientos({loading, setLoading, terminado, setTerminado}) {
  const onClickHandler = async() => {
    setTerminado(true)
    await esperar(3000).then(() => setLoading(true))

  }

  const esperar = (ms) => new Promise(resolve => setTimeout(resolve, ms));

  return React.createElement("button", { onClick: onClickHandler, disabled: terminado }, "Cargar partidas")
}

function App() {
  const [partidas, setPartidas] = React.useState([])
  const [loading, setLoading] = React.useState(false)
  const [terminado, setTerminado] = React.useState(false)

  React.useEffect( () => {
    const ejecutarCarga = async () => {
      if (loading) {
        try {
          const datos = await obtenerDatos()
          setPartidas(datos)
        } catch (err) {
          console.error(err)
        } finally {
          setTerminado(false)
          setLoading(false)
        }
      }
    };

    ejecutarCarga();
  }, [loading]);

  return React.createElement("div", null,
      React.createElement(BotonMovimientos, { loading: loading, setLoading: setLoading, terminado: terminado, setTerminado: setTerminado }),
      React.createElement("ul", null, partidas.map((partida, index) =>
        React.createElement("li", { key: index }, `${partida.san} ${partida.name}`))),
      React.createElement("p", null, terminado ? "Cargando..." : "")
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(React.createElement(App));