
const lista = document.querySelector("#lista")
const boton = document.querySelector("#boton")

boton.addEventListener("click", cargarMovimientos)

async function cargarMovimientos() {
  try{
    const respuesta = await fetch("movimientos.json")

    if(!respuesta.ok) {
      throw new Error("No hemos podido cargar los movimientos")
    }

    const data = await respuesta.json()

    if(lista.hasChildNodes()) return //Si ya hay elementos en la lista, no hacemos nada

    data.movimientos.forEach(movimiento => {
      const li = document.createElement("li")
      li.textContent = `${movimiento.pieza} ${movimiento.from} a ${movimiento.to}`
      lista.append(li)
    })

  } catch (error) {
    console.log(error)
  }
}