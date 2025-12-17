import {createBoard } from "./board.js";
import {renderPieces, movePiece} from "./pieces.js";
import {isLegalPawnMove} from "./rules.js";

document.addEventListener("DOMContentLoaded", () => {

    const tablero = document.getElementById("board");
    let casillaSeleccionada = null;

    createBoard(tablero);

    // Obtenemos todas las casillas después de crearlas
    const casillas = tablero.querySelectorAll(".square");

    // Ahora sí renderizar las piezas
    renderPieces(casillas);

    tablero.addEventListener("click", (e) => {
        //Lógica para mover la fila de peones blancos
        if (e.target.tagName === "P" && e.target.dataset.tipo === "peon" && e.target.dataset.color === "blanco")    {
            casillaSeleccionada = e.target.parentElement; //Pillas el elemento padre que es el que almacena en realidad los dataset de las fila y las columnas
            casillaSeleccionada.classList.add("highlight");
        }

        if (casillaSeleccionada && e.target.classList.contains("square")){
            const fromRow = parseInt(casillaSeleccionada.dataset.row);
            const toRow = parseInt(e.target.dataset.row);

            if (isLegalPawnMove(fromRow, toRow)){
                movePiece(casillaSeleccionada, e.target);
                casillaSeleccionada.classList.remove("highlight");
            }
            casillaSeleccionada = null;
        }
    });

})