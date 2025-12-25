export default function MovieList () {
  const movies = ["Señor de los Anillos", "Star Wars", "Dune"]

  const HTMLMovies = movies.map((movie, index) => {
    return <p key={movie}> {index + 1} - {movie} </p>
  })

  return (
    <section>
      <h2>Movies</h2>
      {HTMLMovies}
    </section>
  )
}
