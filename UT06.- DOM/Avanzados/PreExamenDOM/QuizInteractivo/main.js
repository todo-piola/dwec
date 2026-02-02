
const preguntasTech = {
  "¿Cuál es el resultado de '5' + 3 en JavaScript?":
    ["'53'", "8", "TypeError", "NaN"],

  "¿Qué técnica permite que un elemento hijo transmita un evento a su padre para ser manejado allí?":
    ["Event Delegation", "Event Bubbling", "Hoisting", "Strict Mode"],

  "En el DOM, ¿cuál es la diferencia principal entre 'textContent' e 'innerHTML'?":
    ["'textContent' devuelve solo texto, 'innerHTML' devuelve el marcado HTML", "'innerHTML' es más rápido", "No hay diferencia", "'textContent' permite ejecutar scripts"],

  "¿Qué estructura de datos sigue el principio LIFO (Last In, First Out)?":
    ["Stack (Pila)", "Queue (Cola)", "Linked List", "Array"],

  "Si una función se llama a sí misma hasta alcanzar una condición de parada, estamos ante una:":
    ["Recursión", "Iteración infinita", "Clausura (Closure)", "Callback"]
};

const pregunta = document.getElementById("pregunta");
const textos = document.querySelectorAll("#texto-respuesta1, #texto-respuesta2, #texto-respuesta3, #texto-respuesta4");
const btnSiguiente = document.getElementById("siguiente");

let contador = 0
let arrayPreguntas = Object.keys(preguntasTech);
let arrayRespuestas = Object.values(preguntasTech);

document.addEventListener("DOMContentLoaded", () => {

    mostrarPregunta(pregunta, arrayRespuestas, contador);

    btnSiguiente.addEventListener("click", (e) => {
      e.preventDefault();

      const seleccionado = document.querySelector('input[name="respuesta"]:checked');

      if (!seleccionado) {
        alert("Por favor selecciona una respuesta");
        return;
      }

      contador++

      if(contador < arrayPreguntas.length) {
        mostrarPregunta(pregunta, arrayRespuestas, contador);
        seleccionado.checked = false;
      } else {
        alert("Quiz terminado")
      }

      e.reset()
    })

});

function mostrarPregunta(){
  pregunta.textContent = arrayPreguntas[contador];

  for (let i = 0; i < 4; i++) {
    textos[i].textContent = arrayRespuestas[contador][i];
  }
}
