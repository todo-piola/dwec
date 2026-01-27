
function Jugador({ nombre, elo }) {
  return React.createElement('h3', null, `Jugador: ${nombre} (ELO: ${elo})`);
}

function aumentarElo({nombre, elo}) {
  return elo + 10;
}

export { aumentarElo , Jugador }
