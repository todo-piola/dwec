/* 1
  const mensaje = document.querySelector('.msg');
  mensaje.innerText = "Mensaje actualizado"
  console.log(mensaje)
*/

/* 2
  const items = document.querySelectorAll('#lista .item')
  let contador = 1

  for (const item of items) {
    item.innerText = `Elemento ${contador}`
    contador++
  }
*/

/* 3
  const titulo = document.querySelector('#title')
  titulo.style.color = 'blue'
  titulo.style.fontSize = '28px'
  titulo.innerText = "Perfil de usuario"
*/

/* 4
const btnTema = document.querySelector('#themeBtn')
const panel = document.querySelector('#panel')
let esOscuro = false

btnTema.addEventListener('click', () => {
  if (esOscuro) {
    panel.style.cssText = `
      background-color: white;
      color: black;
      `
  }
  else{
    panel.style.cssText = `
      background-color: black;
      color: white;
      `
  }

  esOscuro = !esOscuro
})
 */

const btnTema = document.querySelector('#themeBtn')
const panel = document.querySelector('#panel')

btnTema.addEventListener('click', () => {
  panel.classList.toggle('oscuro')
})