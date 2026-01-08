import './App.css'
import PokemonList from './components/PokemonList.jsx'
import { useState } from 'react'
import PokemonCard from './components/PokemonCard.jsx'
import PokemonDetails from './components/PokemonDetails.jsx'

function App() {

  const [selectedPokemon, setSelectedPokemon] = useState()


  return (
    <>
      {selectedPokemon && ( // Si hay pokemon seleccionado...
        <div>
          <h2 className='selected-pokemon'>Pokemon seleccionado</h2>
          <PokemonDetails pokemon={selectedPokemon}/>
        </div>
      )}
      <br/>
      <br/>
      <h1>Lista de Pokemons</h1>
      <PokemonList selectPokemon={setSelectedPokemon}/>
    </>
  )
}

export default App
