import {gameStatePeones, renderPawns} from './Ejercicio1.js'

const contadorPeones = document.getElementById('contador-peones')

const btnAdd = crearBotonAdd()
const btnRemove = crearBotonEliminar()

contadorPeones.textContent = gameStatePeones.peones.length

btnAdd.addEventListener('click', () => {
    gameStatePeones.peones.push("♙")
    renderPawns(gameStatePeones)
    renderContador()
})

btnRemove.addEventListener('click', () => {
    gameStatePeones.peones.pop()
    renderPawns(gameStatePeones)
    renderContador()
})

function crearBotonAdd() {
    const botonAdd = document.createElement('button')
    botonAdd.innerHTML = "Añadir Peón"
    document.body.appendChild(botonAdd)
    return botonAdd
}

function crearBotonEliminar() {
    const botonEliminar = document.createElement('button')
    botonEliminar.innerHTML = "Eliminar Peón"
    document.body.appendChild(botonEliminar)
    return botonEliminar
}

function renderContador() {
    contadorPeones.textContent = gameStatePeones.peones.length
}