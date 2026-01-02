import { useEffect } from 'react'

export default function MovieList () {
  const movies = ["Señor de los Anillos", "Star Wars", "Dune"]

  const HTMLMovies = movies.map((movie, index) => {
    return <p key={movie}> {index + 1} - {movie} </p>
  })

  useEffect(() => {
    console.log("Ejecución cuando MovieList se monta")
  }, [])

  useEffect(() => {
    return () => {
      console.log("Movielist unmounted")
    }
  }, [])

  return (
    <section>
      <h2>Movies</h2>
      {HTMLMovies}
    </section>
  )
}
