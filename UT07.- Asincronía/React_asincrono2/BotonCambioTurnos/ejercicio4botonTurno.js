// noinspection JSUnresolvedReference

function BotonTurno({onClick, setTurno}) {
  return React.createElement("button", {onClick: onClick}, "Cambiar turno")
}

function App() {
  const [turno, setTurno] = React.useState(true)

  return React.createElement("div", null,
    React.createElement("h1", null, "Cambio de turnos"),
    React.createElement(BotonTurno, {onClick: () => setTurno(!turno), setTurno: setTurno}),
    React.createElement("p", null, `Es el turno de ${turno ? "blancas" : "negras"}`)
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(React.createElement(App));