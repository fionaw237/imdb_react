import React from 'react';

const Movie = (props) => {
  return (
    <li className="movie">
      {props.title + " "}
      <a className="showtimes-link" href=".">Showtimes</a>
    </li>
  )
}

export default Movie;
