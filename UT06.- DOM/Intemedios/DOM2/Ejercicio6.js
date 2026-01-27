
const btnAnnadir = document.querySelector("#add")
const lista = document.querySelector("#tareas")

btnAnnadir.addEventListener("click", () => {
  const tarea = prompt("Ingresa una tarea")
  const li = document.createElement("li")
  li.textContent = tarea
  lista.appendChild(li)
  li.addEventListener("click", () => li.remove())
})


