// src/components/Piece.jsx
import React from 'react'

function Piece({ type, color }) {
  if (!type) return null
  return (
    <div className={`piece ${color} ${type}`}>
      {type[0].toUpperCase()}
    </div>
  )
}

export default Piece
