export function renderPieces(casillas) {
    //Uso for-each para poder recorrer cada una de las casillaS almacenadas en el array.
    casillas.forEach(casilla => {
        const fila = parseInt(casilla.dataset.fila);
        const columna = parseInt(casilla.dataset.columna);

        //Colocar todos los peones blancos
        if (fila === 6) {
            const pieza = document.createElement("p")
            pieza.textContent = '♙';
            pieza.style.fontSize = '40px';
            pieza.style.display = 'flex';
            pieza.style.alignItems = 'center';
            pieza.style.justifyContent = 'center';
            pieza.style.margin = "0";
            pieza.dataset.tipo = "peon";
            pieza.dataset.color = "blanco";
            casilla.appendChild(pieza);
        }
    })
}

export function movePiece(from, to){
    const pieza = from.querySelector("p");
    if (pieza){
        to.appendChild(pieza);
    }
}
