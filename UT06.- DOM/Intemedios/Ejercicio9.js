const regexNombre = /[a-zA-ZñÑáéíóúÁÉÍÓÚ ]{3,}$/
const regexPass = /[\w]{6,}$/

const login =  document.getElementById('login')
const usuario = document.getElementById('user')
const contrasenia = document.getElementById('pass')
const mensaje = document.getElementById('msg')

login.addEventListener('submit', (ev) => {
  ev.preventDefault()

  // Validar ambos campos antes de enviar
  const nombreValido = regexNombre.test(usuario.value)
  const passValida = regexPass.test(contrasenia.value)

  if (nombreValido && passValida) {
    mensaje.style.color = 'green'
    mensaje.textContent = 'Login exitoso'
    login.reset()
  } else {
    mensaje.style.color = 'red'
    if (!nombreValido && !passValida) {
      mensaje.textContent = 'El nombre y la contraseña no son válidos'
    } else if (!nombreValido) {
      mensaje.textContent = 'El nombre debe tener al menos 3 letras'
    } else {
      mensaje.textContent = 'La contraseña debe tener al menos 6 caracteres'
    }
  }
})

usuario.addEventListener('input', () => {
  if (regexNombre.test(usuario.value)) {
    mensaje.textContent = ''
    mensaje.style.color = ''
  } else {
    mensaje.style.color = 'red'
    mensaje.textContent = 'El nombre debe tener al menos 3 letras'
  }
})

contrasenia.addEventListener('input', () => {
  if (regexPass.test(contrasenia.value)) {
    mensaje.textContent = ''
    mensaje.style.color = ''
  } else {
    mensaje.style.color = 'red'
    mensaje.textContent = 'La contraseña debe tener al menos 6 caracteres'
  }
})
