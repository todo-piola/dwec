import {gameState, renderPawns, board} from './Ejercicio1.js'

const contadorPeones = document.getElementById('contador-peones')

const btnAdd = crearBotonAdd()
const btnRemove = crearBotonEliminar()

contadorPeones.textContent = gameState.peones.length

btnAdd.addEventListener('click', () => {
    gameState.peones.push("♙")
    renderPawns(gameState)
    renderContador()
})

btnRemove.addEventListener('click', () => {
    gameState.peones.pop()
    renderPawns(gameState)
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
    contadorPeones.textContent = gameState.peones.length
}