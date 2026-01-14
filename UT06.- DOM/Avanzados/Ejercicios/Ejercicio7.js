import {gameState} from "./Ejercicio6.js"
import { handleTableroClick } from "./Ejercicio5.js"

let selectedPosition = null;

board.addEventListener("click", (event) => {
  const square = event.target;
  if (!square.classList.contains("square")) return;

  document.querySelectorAll(".highlight")
    .forEach(sq => sq.classList.remove("highlight"));

  if (square.textContent === "♙") {
    selectedPosition = square.dataset.pos;

    const file = selectedPosition[0];
    const nextRank = Number(selectedPosition[1]) + 1;

    const target = document.querySelector(`[data-pos="${file}${nextRank}"]`);
    if (target) target.classList.add("highlight");
  }
});