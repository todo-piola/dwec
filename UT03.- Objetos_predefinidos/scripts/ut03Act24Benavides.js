const demo = document.getElementById("demo");

// Intentamos recuperar los datos del almacenamiento
let nombre_jugador = localStorage.getItem("nombre_jugador");
let dificultad = localStorage.getItem("dificultad");

nombre_jugador
    ? alert(`Su nombre de jugador es ${nombre_jugador}`)
    : nombre_jugador = prompt("Introduzca su nombre: ")

dificultad
    ? alert(`El nivel de dificultad previamente elegido es de: ${dificultad}`)
    : dificultad = prompt("Elige un nivel: fácil, medio o difícil")

// Preguntamos al usuario si quiere iniciar la partida
const empezar_partida = confirm("Desde empezar la partida?")
empezar_partida
   ? alert(`Comienza la partida, ${nombre_jugador.toUpperCase()} con las blancas`)
    : alert(`El jugador ${nombre_jugador.toUpperCase()} ha pospuesto la partida`)

// Almacenamos la variable nombre_jugador y dificultad en Almacenamiento local
// con el valor que el usuario previamente ha introducido
localStorage.setItem("nombre_jugador", nombre_jugador)
localStorage.setItem("dificultad", dificultad)


demo.innerHTML = "<p>Empezamos la partida</p>"