
const menu = document.querySelector("#menu");
const primerItem = menu.firstElementChild;
const segundoItem = primerItem.nextElementSibling;
const tercerItem = menu.lastElementChild;

menu.addEventListener("mouseover", (ev) => {
  if (ev.target === primerItem) console.log("Has pasado por el primer item");
  if (ev.target === segundoItem) console.log("Has pasado por el segundo item");
  if (ev.target === tercerItem) console.log("Has pasado por el tercer item");
})

/* menu.addEventListener("click", (ev) => {
  const dataOp = ev.target.dataset.op;  // dataset.op es equivalente a data-op

  switch(dataOp) {
    case "perfil":
      console.log("Has clicado en data-op perfil");
      break;
    case "config":
      console.log("Has clicado en data-op config");
      break;
    case "salir":
      console.log("Has clicado en data-op salir");
      break;
    default:
      console.log("Click fuera de los elementos del menú");
  }
}); */
