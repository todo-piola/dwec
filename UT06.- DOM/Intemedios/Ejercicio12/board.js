// Coordenadas del tablero
const filas = ["a", "b", "c", "d", "e", "f", "g", "h"];
const columnas = [8, 7, 6, 5, 4, 3, 2, 1];

// Crea el tablero dinámicamente
export function createBoard(tablero) {
    columnas.forEach((rango, filIndex) => {
        filas.forEach((fila, colIndex) => {
            const square = document.createElement("div");
            square.classList.add("square");

            // Alternamos los colores
            const isDark = (filIndex + colIndex) % 2 !== 0;
            square.classList.add(isDark ? "dark" : "light");

            // Identificador tipo "e2"
            square.dataset.position = `${fila}${rango}`;

            // También guardamos fila y columna como números para facilitar la lógica
            square.dataset.fila = filIndex;
            square.dataset.columna = colIndex;
            square.dataset.row = rango;

            tablero.appendChild(square);
        });
    });
}