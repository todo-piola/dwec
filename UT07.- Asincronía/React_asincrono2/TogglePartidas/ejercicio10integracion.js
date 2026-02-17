
async function obtenerDatos() {
  const respuesta = await fetch("movimientos.json")
  return await respuesta.json()
}

function BotonMovimientos({partidas, cargado, setCargado}) {
  const onClickHandler = () => {
    !cargado ? setCargado(true) : setCargado(false)
  }

  return React.createElement("button", { onClick: onClickHandler }, "toggle partidas")
}

function App() {
  const [partidas, setPartidas] = React.useState([])
  const [cargado, setCargado] = React.useState(false)

  React.useEffect(() => {
    obtenerDatos().then(datos => setPartidas(datos)).catch(err => console.log(err))
  }, [])

  return React.createElement("div", null,
    React.createElement(BotonMovimientos, {partidas: partidas, setCargado: setCargado, cargado: cargado }),
    cargado && React.createElement("ul", null, partidas.map((partida, index) =>
      React.createElement("li", { key: index }, `${partida.id}. ${partida.jugada} => ${partida.descripcion}`))
    )
  )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(React.createElement(App))