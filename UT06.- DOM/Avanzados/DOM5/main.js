import { Jugador , aumentarElo } from './components/Jugador.js';

function App() {
  const [contador, setContador] = React.useState(0);


  return React.createElement(
      'div',
      null,
      React.createElement(Titulo),
      React.createElement(Jugador,{ nombre: 'Ana', elo: 1850 }),
      React.createElement(Jugador,{ nombre: 'Felipe', elo: 2026 }),
      React.createElement(ContadorClicks, {contador , setContador}),
      React.createElement(TeGustaClicks, {contador})
    );
}

function ContadorClicks({contador, setContador}) {

  return React.createElement(
    'button',
    { onClick: () => setContador(contador + 1) },
    `Clicks: ${contador}`
  );
}

function TeGustaClicks({ contador}) {
  if(contador >= 5) return React.createElement('h2', null, '¡Te gusta hacer Clicks!');
  else return React.createElement('h2', null, 'Necesitas más clicks...');
}

function Titulo() {
  return React.createElement('h1', null, 'Bienvenido al torneo de ajedrez');
}

console.log(aumentarElo({ nombre: 'Ana', elo: 1850}))

const root = ReactDOM.createRoot(document.getElementById('board'));
root.render(React.createElement(App));