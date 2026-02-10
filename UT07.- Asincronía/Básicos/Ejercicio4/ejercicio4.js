
const buscador = document.querySelector("#buscador")
const lista = document.querySelector("#resultados")

buscador.addEventListener("input", () => {
  lista.innerHTML = ""
  buscarServicio(buscador.value)
})

async function buscarServicio() {
  const respuesta = await fetch("servicios.json")

  if(!respuesta.ok) return

  const data = await respuesta.json()

  data.servicios.forEach(servicio => {
    if(servicio.nombre.toLowerCase().includes(buscador.value.toLowerCase())) {
      const li = document.createElement("li")
      li.textContent = servicio.nombre
      lista.append(li)
    }
  })

}