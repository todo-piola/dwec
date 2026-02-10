
const lista = document.querySelector('#lista');
const btn10Aperturas = document.querySelector('#aperturas10');
const btn1000Aperturas = document.querySelector('#aperturas1000');
const nombre = document.querySelector('#nombreMovimiento');

btn10Aperturas.addEventListener('click', cargarAperturas)
btn1000Aperturas.addEventListener('click', cargarAperturas)

nombre.addEventListener('input', mostrarAperturas)

async function conexionAPI() {
  const respuesta = await fetch('https://explorer.lichess.ovh/lichess')
  const data = await respuesta.json()

  return {respuesta, data}
}

async function cargarAperturas(event) {
  const modo = event.currentTarget.dataset.modo
  lista.innerHTML = ''

  try{
    const { respuesta, data } = await conexionAPI()

    const movimientos = data.moves
    console.log(movimientos)

    if(modo === 'top10') {
      movimientos.slice(0, 10).forEach((movimiento, index) => {
        const apertura = movimiento.opening.name
        const li = document.createElement('li')
        li.textContent = `${index + 1}. ${apertura}`
        lista.append(li)
      })

    } else if(modo === 'jugadas1000') {
        movimientos.forEach((movimiento, index) => {
          const apertura = movimiento.opening.name
          const aperturaCantidad = movimiento.white + (movimiento.black + movimiento.draws);

          if(aperturaCantidad >= 1000) {
            const li = document.createElement('li')
            li.textContent = `${index+1}. ${apertura} se ha jugado ${aperturaCantidad} veces en total`
            lista.append(li)
          }
      })
    }

  } catch (error) {
    console.log(error)
  }
}

async function mostrarAperturas() {
  lista.innerHTML = ''
  const listaAperturas = []
  let contador = 1

  try {
    const { respuesta, data } = await conexionAPI()

    // Aquí se recorre el array de movimientos y se extrae el nombre de cada apertura
    data.moves.forEach(movimiento => {
      const li = document.createElement('li')
      listaAperturas.push(movimiento.opening.name)
    })

    /* Aquí se recorre el array de aperturas y se muestra solo aquellas
    que coincidan con el valor del input */

    listaAperturas.forEach((apertura) => {

      if(apertura.toLowerCase().includes(nombre.value.toLowerCase())) {
        const li = document.createElement('li')
        li.textContent = `${contador} ${apertura}`
        lista.append(li)
        contador++
      }
    })

  } catch (error) {
    console.log(error)
  }
}
