const test = document.querySelector('#test');

const VALORES = ["Mas", "Menos", "Reset"]

let contador = localStorage.getItem("contador");

document.addEventListener("DOMContentLoaded", () => {
  console.log(test);

  for (let i = 0; i < 3; i++) {
    const boton = document.createElement("button");
    boton.textContent = VALORES[i];
    test.appendChild(boton);
  }

  test.addEventListener("click", (e) => {
    if (e.target.tagName !== 'BUTTON') return;

    const valor = e.target.textContent;

    if(valor === VALORES[0] && contador+15 <= 100) {
      contador+=15
    } else if(valor === VALORES[1] && contador-15 >= 0) {
      contador-=15
    } else if(valor === VALORES[2]){
      contador = 0
    } else {
      console.log("Valor no válido. Prueba otra opción")
    }
    localStorage.setItem("contador", contador);
    console.log(contador);
  })

});