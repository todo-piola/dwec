// noinspection JSUnresolvedReference

import { Jugador , aumentarElo } from './components/Jugador.js'; //EJERCICIO 2

// Renderizamos el componente principal que engloba el resto de componentes
function App() {
  const [contador, setContador] = React.useState(0);

  return React.createElement(
    'div',
    null,
    React.createElement(Titulo),
    React.createElement(Jugador,{ nombre: 'Ana', elo: 1850 }),
    React.createElement(Jugador,{ nombre: 'Felipe', elo: 2026 }),
    React.createElement(ContadorClicks, {contador , setContador}),
    React.createElement(TeGustaClicks, {contador}),
    React.createElement(SelectorColor),
    React.createElement(RenderListaPiezas),
    React.createElement(RegistroMovimientos),
    React.createElement(RenderTablero),
    React.createElement(Peon)
  );
}

//EJERCICIO 9
function Peon() {
  const [fila, setFila] = React.useState(2);

  return React.createElement(
    React.Fragment,
    null,
      React.createElement(
        'button',
        { onClick: () => { setFila(fila + 1);} },
        'Avanzar fila Peón'
      ),
      React.createElement(
        'h4',
        null,
        `Peon en la fila ${fila}`
      )
  )
}

//EJERCICIO 8
function RenderTablero() {
  //Añado un peón en cualquier posición (0-2) del array de casillas vacío
  const casillas = Array(3).fill("")
  const random = Math.floor(Math.random() * 3)
  casillas.splice(random, 0, "♙")

  return React.createElement(
    'div',
    { style: {display: "grid", gridTemplateColumns: "repeat(2, 30px)", gridTemplateRows: "repeat(2, 30px)"} },
    casillas.map((casilla, index) => React.createElement(
      'div',
      {style: {border: "1px solid black"}, key: index}
      ,casilla)
    )
  );
}

//EJERCICIO 7
function RegistroMovimientos() {
  const movimientos = ["e4", "d4", "f3", "d3", "f1", "a7", "b2"]
  const [listaMovimientos, setListaMovimientos] = React.useState([]);
  const  [contadorMovimientos, setContadorMovimientos] = React.useState(0);
  const maximoMovimientos = movimientos.length;
  if(listaMovimientos.length > maximoMovimientos) return React.createElement(
    'h1',
    null,
    '¡No hay más movimientos disponibles!'
  )

  return React.createElement(
    React.Fragment,
    null,
    React.createElement(
      'button',
      { onClick: () => {
          setListaMovimientos(prev => [...prev, movimientos[contadorMovimientos]]);
          setContadorMovimientos(contadorMovimientos + 1)
        }
      },
      'Añadir movimiento'
    ),
    React.createElement(
      'ul',
      null,
      listaMovimientos.map(movimiento => React.createElement('li', { key : movimiento }, movimiento))
    )
  );
}

//EJERCICIO 6
function RenderListaPiezas() {
  const piezas = ["Rey", "Dama", "Torre", "Alfil", "Caballo", "Peón"];
  return React.createElement('ul', null, piezas.map(pieza => React.createElement('li', { key : pieza }, pieza)));
}

//EJERCICIO 5
function SelectorColor() {
  const [mensaje, setMensaje] = React.useState("Blancas");

  return React.createElement(
      React.Fragment,
      null,
      React.createElement(
        'button',
        { onClick: () => setMensaje("Blancas") },
        'Blancas'
      ),
      React.createElement(
        'button',
        { onClick: () => setMensaje("Negras") },
        'Negras'
      ),
      React.createElement(
        'h5',
        null,
        `Color seleccionado: ${mensaje}`
      )
  );
}

//EJERCICIO 4
function TeGustaClicks({ contador}) {
  if(contador >= 5) return React.createElement('h2', null, '¡Te gusta hacer Clicks!');
  else return React.createElement('h2', null, 'Necesitas más clicks...');
}

//EJERCICIO 3
function ContadorClicks({contador, setContador}) {
  return React.createElement(
    'button',
    { onClick: () => setContador(contador + 1) },
    `Clicks: ${contador}`
  );
}


//EJERCICIO 1
function Titulo() {
  return React.createElement('h1', null, 'Bienvenido al torneo de ajedrez');
}

console.log(aumentarElo({ nombre: 'Ana', elo: 1850})) //Test personal

//Renderizamos el componente en el DOM
const root = ReactDOM.createRoot(document.getElementById('board'));
root.render(React.createElement(App));