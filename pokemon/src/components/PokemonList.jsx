import PokemonCard from './PokemonCard.jsx'
import './PokemonList.css'
import { useEffect, useState } from 'react'

export default function PokemonList () {
  const [pokemons, setPokemons] = useState([]);


  useEffect(() => {
    getPokemons(10)
  }, []) // Ejecute nada más arrancar el componente

  const fetchPokemon = async (index) => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${index}`)
    const data = await response.json()
    return data
  }

  const getPokemons = async (quantity) => {
    const pokemonArray = [];

    for (let i = 1; i <= quantity; i++) {
      pokemonArray.push(await fetchPokemon(i))
    }

    setPokemons(pokemonArray)
  }

  const pokemonCards = pokemons.map((pokemon) => {
    return <PokemonCard key={pokemon.id} pokemon={pokemon}/>
  })

  return (
    <ul className="pokemon-list">
      {pokemonCards}
    </ul>
  )
}
