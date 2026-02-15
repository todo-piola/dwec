

async function obtenerDatos() {
  const respuesta = await fetch("movimientox.json")
  const datos = await respuesta.json()
  return datos || []
}

function App() {
  const [msjError, setMsjError] = React.useState("")

  React.useEffect(() => {
    obtenerDatos()
      .then(datos => console.log(datos))
      .catch(err => setMsjError("Error al cargar los datos: " + err.message))
  }, [])

  return React.createElement("div", null,
    React.createElement("h1", null, "Movimientox desde archivo .json"),
    React.createElement("p", { style: { color: "red" } }, msjError))
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(React.createElement(App));