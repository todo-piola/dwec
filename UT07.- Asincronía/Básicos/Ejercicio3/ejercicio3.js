const msjError = document.querySelector("#error")

function mostrarError(error) {
  msjError.textContent = `No se han podido cargar los datos debido a un error: ${error}`;
}


fetch("datos.json")
  .then(respuesta => respuesta.json())
  .then(datos => console.log(datos))
  .catch (error =>  mostrarError(error))


