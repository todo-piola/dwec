import { board } from './Ejercicio1.js'

const tableroReal = document.querySelector('div[style*="grid"]') || board;

tableroReal.addEventListener('click', (ev) => {
  const seleccionada = ev.target.dataset.pos
  alert(`Casilla seleccionada ${seleccionada}`)
})