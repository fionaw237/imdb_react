import React from 'react';
import Movie from '../components/Movie';

const MovieList = (props) => {

  const movies = props.data.map((movie) => {
    return (
      <Movie title={movie.title} key={movie.id}/>
    )
  })

  return (
    <ul className="movie-list">
      {movies}
    </ul>
  )
}

export default MovieList;
