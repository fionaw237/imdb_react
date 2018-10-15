import React from 'react';
import MovieList from './MovieList';
import MoreMoviesLink from './MoreMoviesLink';

const TopContainer = (props) => {
  return (
    <div className="top-container">
      <MovieList data={props.data}/>
      <MoreMoviesLink/>
    </div>
  )
}

export default TopContainer;
