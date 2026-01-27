
export let empezarPartida = false

const form = document.querySelector('#formulario')
const minutos = document.querySelector('#minutos')
const incremento = document.querySelector('#incremento')
const color = document.querySelector('#color')
const msjError = document.querySelector('#msg-error')

form.addEventListener('submit', (ev) => {
  ev.preventDefault()

  if(minutos.value < 1 || incremento.value < 0) {
    msjError.textContent = 'Los valores no pueden ser negativos'
    msjError.style.display = 'block'
    msjError.style.color = 'red'
    return false
  } else {
    empezarPartida = true
    msjError.style.display = 'none'
    form.reset()
    document.dispatchEvent(new CustomEvent('empezar-partida'))
  }
})