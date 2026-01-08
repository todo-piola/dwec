import PokemonCard from './PokemonCard.jsx'
import './PokemonList.css'
import { useEffect, useState } from 'react'
import GetForm from './GetForm.jsx'

export default function PokemonList (props) {
  const [pokemons, setPokemons] = useState([]); // Variable reactiva


  useEffect(() => {
    getPokemons(1, 10)
  }, []) // Ejecute nada más arrancar el componente

  const fetchPokemon = async (index) => {   // Retorna una promesa
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${index}`)
    const data = await response.json()
    return data
  }

  const getPokemons = async (from, to) => {
    const pokemonArray = [];

    for (let i = from; i <= to; i++) {
      pokemonArray.push(await fetchPokemon(i))  // Agrega el pokemon a la lista
    }

    setPokemons(pokemonArray) // Actualiza la variable reactiva
  }

  const pokemonCards = pokemons.map((pokemon) => {  // Mapeo los pokemons para renderizarlos
    return (
    <PokemonCard
      key={pokemon.id}
      pokemon={pokemon}
      selectPokemon={props.selectPokemon}
    />
    )
  })

  return (
    <div>
      <GetForm getPokemons={getPokemons}/>
      <ul className="pokemon-list">{pokemonCards}</ul>
    </div>
  )
}
