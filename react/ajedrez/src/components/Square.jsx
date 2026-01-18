import React from 'react'
import Piece from './Piece.jsx'

function Square({ casilla, piece }) {
  return (
    <div className={`square ${casilla.color}`}>
      {piece && <Piece type={piece.type} color={piece.color} />}
    </div>
  )
}

export default Square