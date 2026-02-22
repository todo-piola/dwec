/*************************************************
 * EXAMEN RA7 – ASINCRONÍA
 * Archivo de partida para el alumno.
 * NOMBRE: Alberto Llera, Mónica Cortés, Franco Benavides
 *************************************************/

/* ===============================
   EJERCICIO 1 — DOM + FETCH
   =============================== */

const loadBtn = document.getElementById("load");
const listado = document.getElementById("dom-list");


loadBtn.addEventListener("click", () => {
    /* TODO EJERCICIO 1
       1. Cargar partidas.json con fetch
       2. Guardar el resultado en 'partidas'
       3. Mostrar Blancas vs Negras en el <ul>*/

    async function loadMoves(){
        listado.textContent = ""
        try{
            const response = await fetch("partidas.json")
            if (!response.ok) throw new Error();
            const data = await response.json();

            data.forEach((item) => {
                const li = document.createElement("li");
                li.textContent = `${item["white"]} VS ${item["black"]}`
                listado.appendChild(li);
            })

        }
        catch(err){
            console.log('No se ha podido abrir el archivo de las partidas')
        }

    }

    loadMoves();

});


/* =====================================================
   EJERCICIOS 2–5 — REACT SIN JSX
   ===================================================== */

const e = React.createElement;
const {useState, useEffect} = React;

const initialBoard = {
    a1: "♖", b1: "♘", c1: "♗", d1: "♕", e1: "♔", f1: "♗", g1: "♘", h1: "♖",
    a2: "♙", b2: "♙", c2: "♙", d2: "♙", e2: "♙", f2: "♙", g2: "♙", h2: "♙",
    a7: "♟", b7: "♟", c7: "♟", d7: "♟", e7: "♟", f7: "♟", g7: "♟", h7: "♟",
    a8: "♜", b8: "♞", c8: "♝", d8: "♛", e8: "♚", f8: "♝", g8: "♞", h8: "♜"
};

function ChessApp() {
    /* -----------------------------
      ESTADOS
      ----------------------------- */
    const [board, setBoard] = React.useState(initialBoard);
    const [gameList, setGameList] = React.useState([]);
    const [filteredPlayer, setFilteredPlayer] = React.useState([]);
    const [loading, setLoading] = React.useState(false);
    const [infoInput, setInfoInput] = React.useState('');
    const [selectedGame, setSelectedGame] = React.useState(null);

    useEffect (() => {
        async function loadGameInfo(){
            try{
                const response = await fetch("partidas.json")
                if (!response.ok) throw new Error();
                const data = await response.json();
                setGameList(data);
            }
            catch (error){
                console.log('Problema al cargar el archivo')
            }
        }
        loadGameInfo();
    }, [])


    /* =================================================
       EJERCICIO 3 — useEffect
       ================================================= */
    useEffect(() => {
        if (!selectedGame) return;
        setLoading(true);
        const timeOut = setTimeout(() => {
            setLoading(false);
        }, 2000)
        return () => clearTimeout(timeOut);
    }, [selectedGame])

    useEffect(() => {
        if (infoInput.trim() === '') return;
        const filter = gameList.filter(info =>
            info.white.toLowerCase().includes(infoInput.trim().toLowerCase()) ||
            info.black.toLowerCase().includes(infoInput.trim().toLowerCase())
        )
        setFilteredPlayer(filter);
    }, [infoInput])


    /* =================================================
       EJERCICIO 5 — Aplicar movimientos
       ================================================= */

    function applyMoves() {
        // TODO EJERCICIO 5
        // Aplicar los movimientos de la partida seleccionada
        // y actualizar el "tablero"

        if (!selectedGame || !selectedGame.moves) return;

        let newBoard = { ...initialBoard };

        selectedGame.moves.forEach(move => {
            const from = move.from;
            const to = move.to;

            if (newBoard[from]) {
                newBoard[to] = newBoard[from];
                delete newBoard[from];
            }
        });

        setBoard(newBoard);
    }

    /* =================================================
       RENDER
       ================================================= */

    return e("div", null,

        e("h2", null, "Aplicación React"),

        /* ===============================
           EJERCICIO 4 — Buscador
           =============================== */
        e('input', {
            type: 'text',
            placeholder: 'Buscar movimiento...',
            value: infoInput,
            onChange: (e) => setInfoInput(e.target.value)
        }),
        filteredPlayer.length > 0 &&
        e("ul", null,
            filteredPlayer.map((item, index) =>
                e('li', { key: "filter-" + index }, `Busqueda del input: ${item.white} VS ${item.black}`)
            )
        ),

        /* ===============================
           EJERCICIO 2 — Lista de partidas
           =============================== */
        gameList.length > 0 &&
        e("ul", null,
            gameList.map((item, index) =>
                e(
                    "li",
                    {
                        key: index,
                        onClick: () => setSelectedGame(item)
                    },
                    `${item.white} VS ${item.black}`
                )
            )
        ),

        /* ===============================
          EJERCICIO 2 — Detalle partida
         =============================== */
        selectedGame && !loading &&
        e("div", { className: "game-detail" },
            e("h3", null, "Detalle de la partida"),
            e("p", null, `Blancas: ${selectedGame.white}`),
            e("p", null, `Negras: ${selectedGame.black}`),
            e("p", null, `Resultado: ${selectedGame.moves.length ? selectedGame.moves.length : 0}`)
        ),

        /* ===============================
           EJERCICIO 3 — Mensaje
           =============================== */
        loading && e("p", null, "Partida cargada correctamente"),

        /* ===============================
           EJERCICIO 5 — Tablero
           =============================== */
        e("button", { onClick: applyMoves }, "Aplicar movimientos"),
        e(Board, { board })
    );
}


/* =====================================================
   COMPONENTES TABLERO (FUNCIONALES)
   ===================================================== */

function Board({ board }) {
    const files = ["a","b","c","d","e","f","g","h"];
    const squares = [];

    for (let row = 8; row >= 1; row--) {
        for (let col = 0; col < 8; col++) {
            const pos = files[col] + row;
            const dark = (row + col) % 2 === 1;

            squares.push(
                e(Square, {
                    key: pos,
                    piece: board[pos],
                    dark
                })
            );
        }
    }

    return e("div", { className: "board" }, squares);
}

function Square({ piece, dark }) {
    return e(
        "div",
        { className: `square ${dark ? "dark" : "light"}` },
        piece || ""
    );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(e(ChessApp));
