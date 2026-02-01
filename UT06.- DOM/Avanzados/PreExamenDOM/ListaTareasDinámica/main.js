const input = document.querySelector("#inputTarea");
const btnAgregar = document.querySelector("#btnAgregar");
const btnEliminar = document.querySelector("#btnEliminar");
const lista = document.querySelector("#listaTareas");

const arrayTareas = [];

document.addEventListener("DOMContentLoaded", (ev) => {
  console.log("DOM cargado")

  btnAgregar.addEventListener("click",  () => {
    const tarea = input.value;

    if (tarea === "") {
      alert("Escribe una tarea primero");
      return;
    }

    const nuevoLi = document.createElement("li")
    nuevoLi.textContent = tarea

    arrayTareas.push(tarea)
    lista.appendChild(nuevoLi)

    input.value = ""

    console.log("Tareas:", arrayTareas);
  })



  btnEliminar.addEventListener("click", () => {
    const tarea = input.value;

    for (let i = 0; i < arrayTareas.length; i++) {
      if(tarea === arrayTareas[i]) {
        arrayTareas.splice(i, 1); // ← AÑADE EL 1 AQUÍ
        i--; // ← Retrocede porque el array se acortó
        console.log("Tareas:", arrayTareas);
      }
    }

    const itemsLista = document.querySelectorAll("#listaTareas li");

    itemsLista.forEach(item => {
      if(item.textContent === tarea) {
        item.remove()
      }
    })

    input.value = ""
  })

  input.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      btnAgregar.click();
    }
  });
})