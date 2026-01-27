import { Jugador , aumentarElo } from './components/Jugador.js';

function App() {
  return React.createElement(
      'div',
      null,
      React.createElement(Titulo),
      React.createElement(Jugador,({ nombre: 'Ana', elo: 1850 })),
      React.createElement(Jugador,({ nombre: 'Felipe', elo: 2026 })),
      React.createElement(ContadorClicks)
    );
}

function Titulo() {
  return React.createElement('h1', null, 'Bienvenido al torneo de ajedrez');
}

console.log(aumentarElo({ nombre: 'Ana', elo: 1850}))

const root = ReactDOM.createRoot(document.getElementById('board'));
root.render(React.createElement(App));