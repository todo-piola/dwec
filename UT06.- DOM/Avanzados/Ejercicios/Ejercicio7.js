let selectedPosition = null;
let target = ""
let color = null

board.addEventListener("click", (event) => {
  const square = event.target;
  if (!square.classList.contains("square")) return;

  if(square.classList.contains("highlight")) {
    if(color) {
      square.textContent = "♙"
      target.classList.remove("highlight");
      return
    }
    else if(!color) {
      square.textContent = "♟"
      target.classList.remove("highlight");
      return
    }
  }

  document.querySelectorAll(".highlight")
    .forEach(sq => sq.classList.remove("highlight"));

  if (square.textContent === "♙" || square.textContent === "♟") {
    let nextRank = ""
    selectedPosition = square.dataset.pos;
    if(square.textContent === "♙") color = true
    else color = false

    const col = selectedPosition[0];
    const fila = selectedPosition[1];
    if(color) nextRank = parseInt(fila) + 1;
    else nextRank = parseInt(fila) - 1;

    target = document.querySelector(`[data-pos="${col}${nextRank}"]`);
    if (target.textContent === "") target.classList.add("highlight");
  }
});