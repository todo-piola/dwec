let inicio_turno = new Date(Date.now())
let fin_turno = new Date(inicio_turno)

// Configuramos los minutos del objeto fin_turno
// llamando a los minutos del objeto inicio_turno y sumándole un número aleatorio (0,3)
fin_turno.setMinutes(inicio_turno.getMinutes() + Math.floor(Math.random() * 4))

let diferencia_minutos = fin_turno.getMinutes() - inicio_turno.getMinutes()

console.log(`Hora inicio del turno: ${inicio_turno.toLocaleTimeString()}`)
console.log(`Hora fin de turno: ${fin_turno.toLocaleTimeString()}`)

diferencia_minutos*60 > 60
    ? console.log("Tiempo excedido")
    : console.log(`La diferencia de tiempo en segundos es de: ${diferencia_minutos*60} segundos`)
