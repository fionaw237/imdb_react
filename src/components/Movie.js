import React from 'react';

const Movie = (props) => {
  return (
    <div className="movie">
      - {props.title + " "}
      <a href=".">Showtimes</a>
    </div>
  )
}

export default Movie;
