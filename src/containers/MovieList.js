import React from 'react';
import Movie from '../components/Movie';

const MovieList = (props) => {

  const movies = props.data.map((movie) => {
    return (
      <Movie title={movie.title} key={movie.id}/>
    )
  })

  return (
    <div className="movie-list">
      {movies}
    </div>
  )
}

export default MovieList;
