

async function obtenerDatos() {
  const respuesta = await fetch("movimientos.json")
  return await respuesta.json()
}


/* La nueva forma de hacer AJAX con fetch es mucho más simple de usar y de leer,
* ya que no hay que preocuparnos por el manejo de errores ni de la respuesta.
* Sin embargo, la forma tradicional es mucho más verbosa, más difícil de entender y está en desuso */

function App() {
  const [datos, setDatos] = React.useState([]);
  const [datosXML, setDatosXML] = React.useState([]);
  const [error, setError] = React.useState("");

  // FETCH
  React.useEffect(() => {
    obtenerDatos()
      .then(data => setDatos(data))
      .catch(err => console.log(err))
  }, [])

  // AJAX clásico
  React.useEffect(() => {
    const xhr = new XMLHttpRequest();

    xhr.open("GET", "movimientos.json", true);

    xhr.onload = function () {
      if (xhr.status === 200) {
        const resultado = JSON.parse(xhr.responseText);
        setDatosXML(resultado);
      } else {
        setError("Error al cargar los datos");
      }
    };

    xhr.onerror = function () {
      setError("Error de red");
    };

    xhr.send();
  }, []);
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(React.createElement(App));