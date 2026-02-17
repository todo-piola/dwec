
async function obtenerDatos(){
  const respuesta = await fetch("datos.json")
  return await respuesta.json()
}

function App() {
  const [datos, setDatos] = React.useState([])

  React.useEffect(() => {
    obtenerDatos().then(datos => setDatos(datos)).then(err => console.log(err))
  }, [])

  return React.createElement("div", null, datos.map((dato, index) =>
    React.createElement("p", { key: index }, `${dato.piece} de ${dato.from} a ${dato.to}`)))
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(React.createElement(App));