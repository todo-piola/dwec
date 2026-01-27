import { useEffect, useState } from 'react'
import './FactosList.css'

function FactosList () {
  const [factos, setFactos] = useState([])

  useEffect(() => {
    getFactos()
  }, [])

  const getFactos = async () => {
    const arrayFactos = []

    for (let i = 0; i < 3; i++) {
      const response = await fetch('https://catfact.ninja/fact')
      const data = await response.json()
      arrayFactos.push(data)
    }

    setFactos(arrayFactos)
  }

  const factosHTML = factos.map((facto, index) => {
    return (
      <li className="facto-item" type="circle" key={index}>
        {facto.fact}
      </li>
    )
  })

  return (
    <div className="factos-container">
      <h1> Factos List </h1>
      <div className="contenedor-centrado">
        <ul>
          {factosHTML}
        </ul>
      </div>
      <div className="contenedor-btn">
        <button className="btn-refrescar">Refrescar</button>
      </div>
    </div>
  )
}

export default FactosList
