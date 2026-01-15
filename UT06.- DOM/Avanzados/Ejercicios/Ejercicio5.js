import {board} from './Ejercicio4.js'

board.addEventListener('click', (event) => {
  const square = event.target;
  if (!square.classList.contains('square')) return;
  console.log(`Celda clicada: ${square.dataset.pos}`)
})