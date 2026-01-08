import './PokemonCard.css'

function PokemonCard (props) {
  const { pokemon, selectPokemon } = props; // Recoge la propiedad pokemon del componente padre

  return (
    pokemon.id ? (  // Comprueba si existe el id
    <li className="pokemon-card" onClick={() => selectPokemon(pokemon)}>
      <h2 className="pokemon-name">{pokemon.name}</h2>
      <img
        src={pokemon.sprites.front_default} // Recoge la url de la imagen
        alt="pokemon img"
        className="pokemon-img"
      />
      <h3 className="text">HP: {pokemon.stats[0].base_stat}</h3>
    </li>
    ) : ( // Si no existe ese id...
      <p>Cargando...</p>
    )
  )
}

export default PokemonCard
