import './PokemonCard.css'

function PokemonCard (props) {
  const { pokemon } = props; // Recoge la propiedad pokemon del componente padre

  return (
    pokemon.id ? (  // Comprueba si existe el id
    <li className="pokemon-card">
      <h2 className="pokemon-name">{pokemon.name}</h2>
      <img
        src={pokemon.sprites.front_default} // Recoge la url de la imagen
        alt="pokemon img"
        className="pokemon-img"
      />
      <h3 className="text">HP: {pokemon.stats[0].base_stat}</h3>
    </li>
    ) : ( // Si no existe el id
      <p>Cargando...</p>
    )
  )
}

export default PokemonCard
