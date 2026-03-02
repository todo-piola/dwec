/* =====================================================
   CONFIGURACIÓN INICIAL
   ===================================================== */
const initialBoard = {
  a1: "♖", b1: "♘", c1: "♗", d1: "♕", e1: "♔", f1: "♗", g1: "♘", h1: "♖",
  a2: "♙", b2: "♙", c2: "♙", d2: "♙", e2: "♙", f2: "♙", g2: "♙", h2: "♙",
  a7: "♟", b7: "♟", c7: "♟", d7: "♟", e7: "♟", f7: "♟", g7: "♟", h7: "♟",
  a8: "♜", b8: "♞", c8: "♝", d8: "♛", e8: "♚", f8: "♝", g8: "♞", h8: "♜"
};

function ChessApp() {
  const [board, setBoard] = React.useState(initialBoard);
  const [gameList, setGameList] = React.useState([]); // Estado para las partidas
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    async function loadGameInfo() {
      setLoading(true);
      try {
        const response = await fetch("partidas.json");
        if (!response.ok) throw new Error();
        const data = await response.json();
        setGameList(data); // Guardamos el array de partidas
        setLoading(false);
      } catch (error) {
        console.error('Problema al cargar el archivo');
        setLoading(false);
      }
    }
    loadGameInfo();
  }, []);

  if (loading) return <div>Cargando partidas...</div>;
  if (gameList.length === 0) return <div>No hay datos disponibles</div>;

  const info = gameList[0];

  return (
    <div className="container">
      <Board board={board} />

      <ul className="info-list">
        <li><strong>Jugador blancas:</strong> {info.white}</li>
        <li><strong>Jugador negras:</strong> {info.black}</li>
        <li><strong>Total movimientos:</strong> {info.moves.length}</li>
      </ul>
    </div>
  );
}

/* =====================================================
   COMPONENTES DEL TABLERO (SINTAXIS JSX)
   ===================================================== */

function Board({ board }) {
  const files = ["a", "b", "c", "d", "e", "f", "g", "h"];
  const squares = [];

  for (let row = 8; row >= 1; row--) {
    for (let col = 0; col < 8; col++) {
      const pos = files[col] + row;
      const dark = (row + col) % 2 === 1;

      squares.push(
        <Square
          key={pos}
          piece={board[pos]}
          dark={dark}
        />
      );
    }
  }

  return <div className="board">{squares}</div>;
}

function Square({ piece, dark }) {
  return (
    <div className={`square ${dark ? "dark" : "light"}`}>
      {piece || ""}
    </div>
  );
}

// Renderizado final
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<ChessApp />);