// Guardar cookie con el tema del tablero ("oscuro" o "claro") y última pieza movida
setCookie("tema_tablero", "oscuro", 7)
setCookie("ultima_pieza", "caballo", 7)

// ----- MOSTRAR ULTIMA VISITA COOKIE -----
let ultima_visita = getCookie("ultima_visita")
if(ultima_visita){
    alert("/////////////////// VISITA ANTERIOR \n" + ultima_visita.toLocaleString())
    let hora_actual = new Date()
    ultima_visita = new Date(hora_actual)
    setCookie("ultima_visita", hora_actual, 7)
} else {
    let hora_actual = new Date()
    setCookie("ultima_visita", hora_actual, 7)
}


// ----- PERSONALIZAR TEXTOS CON ALMACENAMIENTO LOCAL-----
let idioma = localStorage.getItem("idioma")

// TODO: Modificar el siguiente bloque de código con diccionario de traducciones para cada idioma
if(idioma === "es") {
    const trabajando = document.getElementById("trabajando")
    const cambiarlenguaje = document.getElementById("cambiarlenguaje")
    const restablecer = document.getElementById("restablecer")
    trabajando.textContent = "Trabajando con Cookies"
    cambiarlenguaje.textContent = "Cambiar lenguaje"
    restablecer.textContent = "Reiniciar preferencias"
} else if(idioma === "en") {
    const trabajando = document.getElementById("trabajando")
    const cambiarlenguaje = document.getElementById("cambiarlenguaje")
    const restablecer = document.getElementById("restablecer")
    trabajando.textContent = "Working with Cookies"
    cambiarlenguaje.textContent = "Change language"
    restablecer.textContent = "Reset preferences"
} else {
    localStorage.setItem("idioma", "es")
}

const cambiar_lenguaje = document.getElementById("cambiarlenguaje")
cambiar_lenguaje.addEventListener("click", () => {
    let idioma = localStorage.getItem("idioma")

    if(idioma === "es") {
        localStorage.setItem("idioma", "en")
        location.reload()
    } else if(idioma === "en") {
        localStorage.setItem("idioma", "es")
        location.reload()
    } else {
        localStorage.setItem("idioma", "es")
        location.reload()
    }
})


// ----- BOTÓN RESTABLECER PREFERENCIAS -----
const boton_reestablecer = document.getElementById("reestablecer")

boton_reestablecer.addEventListener("click", () => {
    localStorage.clear() // Limpiamos el almacenamiento local
    deleteCookie("tema_tablero")
    deleteCookie("ultima_visita")
    alert("Datos reiniciados. Se recargará la página.")
    location.reload() // recarga la página después del borrado
})


// ----- FUNCIONES ÚTILES DE COOKIES ------
// Crear una cookie
function setCookie(nombre, valor, dias) {
    const fecha = new Date();
    fecha.setTime(fecha.getTime() + dias * 24 * 60 * 60 * 1000);
    const expiracion = "expires=" + fecha.toUTCString();
    document.cookie = `${nombre}=${encodeURIComponent(valor)}; ${expiracion}; path=/`;
}

// Leer una cookie
function getCookie(nombre) {
    const nameEQ = nombre + "=";
    const cookies = document.cookie.split(";");

    for (let cookie of cookies) {
        cookie = cookie.trim();
        if (cookie.startsWith(nameEQ)) {
            return decodeURIComponent(cookie.substring(nameEQ.length));
        }
    }
    return null;
}

// Borrar una cookie
function deleteCookie(nombre) {
    document.cookie = `${nombre}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
}