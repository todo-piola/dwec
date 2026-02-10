fetch("movimientos.json")
  .then(response => response.json())
  .then(data => {
    data.movimientos.forEach(movimiento => {
      console.log(`${movimiento.pieza} ${movimiento.from} a ${movimiento.to}`);
    })
  });