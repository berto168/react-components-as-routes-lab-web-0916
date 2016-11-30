import React from 'react'
import { movies } from '../data'

const Movies = () => {
  const data = movies.map((movie) => {
    return (
      <div>
        {movie.title} - {movie.time} minutes
        <ul>
          {movie.genres.map((genre) => {
            return (
              <li>
                {genre}
              </li>
            )
          })}
        </ul>
      </div>
    )
  })

  return (
    <div>
      <h1>Movies Page</h1>
      {data}
    </div>
  )
}

module.exports = Movies
