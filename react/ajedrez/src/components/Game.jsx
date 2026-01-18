import React, { useState } from 'react'
import { generarCasillas } from '../utils/generarCasillas'
import { crearPiezasIniciales } from '../utils/crearPiezasIniciales'
import Piece from './Piece.jsx'

function Game() {
  const casillas = generarCasillas()
  const [pieces, setPieces] = useState(crearPiezasIniciales())

  return (
    <div className="container">
      <div className="board">
        {casillas.map((casilla, index) => {
          // Buscar si hay pieza en esta casilla
          const piece = pieces.find(p => p.position === casilla.pos)
          return (
            <div
              key={casilla.pos}
              className={`square ${casilla.color}`}
            >
              {piece && <Piece type={piece.type} color={piece.color} />}
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Game