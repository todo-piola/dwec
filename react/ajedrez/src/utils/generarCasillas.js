export const generarCasillas = () => {
  const letras = ['a','b','c','d','e','f','g','h']
  const numeros = [1,2,3,4,5,6,7,8]
  const casillas = []

  for (let fila = 0; fila < 8; fila++) {
    for (let col = 0; col < 8; col++) {
      const color = (fila + col) % 2 === 0 ? 'white' : 'black'
      const pos = `${letras[col]}${numeros[fila]}`
      casillas.push({ pos, color })
    }
  }

  return casillas
}
