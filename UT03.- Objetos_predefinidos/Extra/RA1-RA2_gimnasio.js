/*
Requisitos del JavaScript (gimnasio.js)

1. **NOMBRE DEL USUARIO** (localStorage)
- Si existe `nombre_usuario` en localStorage, muéstralo con un alert
- Si NO existe, pídelo con un `prompt`
- Modifica el `<h1 id="bienvenida">` para mostrar: `"Gimnasio de [NOMBRE]"`, pero el nombre debe aparecer COMPLETAMENTE EN MAYÚSCULAS usando métodos de String
- Guarda el nombre en localStorage
*/

let nombre_usuario = localStorage.getItem("nombre_usuario")
nombre_usuario
    ? alert(`Tu nombre de usuario es ${nombre_usuario}`)
    : nombre_usuario = prompt("¿Cual es tu nombre de usuario?")

document.getElementById("bienvenida").textContent = `Gimnasio de ${nombre_usuario.toUpperCase()}`

localStorage.setItem("nombre_usuario", nombre_usuario)

/*
### 2. **SERIES COMPLETADAS HOY** (sessionStorage)
- Usa `sessionStorage` para llevar el conteo de series completadas en la sesión actual
- Si ya existe `series_hoy`, recupéralo, súmale un número aleatorio entre 3 y 8, y muestra un alert con las series nuevas y el total
- Si NO existe, inicialízalo con un número aleatorio entre 5 y 10
- Muestra en `<h2 id="series_hoy">` el texto: `"Series completadas hoy: X"`
- Guarda el valor actualizado en sessionStorage
*/