import PokemonCard from './PokemonCard.jsx'
import './PokemonList.css'
import { useEffect, useState } from 'react'

export default function PokemonList () {
  const [pokemons, setPokemons] = useState([]); // Variable reactiva


  useEffect(() => {
    getPokemons(10)
  }, []) // Ejecute nada más arrancar el componente

  const fetchPokemon = async (index) => {   // Retorna una promesa
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${index}`)
    const data = await response.json()
    return data
  }

  const getPokemons = async (quantity) => {
    const pokemonArray = [];

    for (let i = 1; i <= quantity; i++) {
      pokemonArray.push(await fetchPokemon(i))  // Agrega el pokemon a la lista
    }

    setPokemons(pokemonArray) // Actualiza la variable reactiva
  }

  const pokemonCards = pokemons.map((pokemon) => {  // Mapeo los pokemons para renderizarlos
    return <PokemonCard key={pokemon.id} pokemon={pokemon}/>
  })

  return ( // Renderiza el componente con los pokemons
    <ul className="pokemon-list">
      {pokemonCards}
    </ul>
  )
}
