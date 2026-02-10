
const btnMostrar = document.querySelector('#btn-mostrar');
const historial = document.querySelector('#historial');

btnMostrar.addEventListener('click', cargarDatos); // Ligamos la función de cargar datos al evento clic del botón

async function cargarDatos() {
  historial.innerHTML = '';

  try {
    const respuesta = await fetch('../Ejercicio2/movimientos.json');

    const datos = await respuesta.json();

    let contador = 1

    // Itero sobre los movimientos y creo un elemento <li> para cada uno
    datos.movimientos.forEach((movimiento => {
      const item = document.createElement('li');
      item.textContent = `${contador}. ${movimiento.pieza}: ${movimiento.from} → ${movimiento.to}`
      historial.append(item)
      contador++
    }));

  } catch (error) {
    console.error('Error al cargar los datos:', error);
  }
}