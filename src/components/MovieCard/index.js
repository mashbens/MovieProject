import React from 'react';
// import { Link } from 'react-router-dom';
import './MovieCard.scss';

const MovieCard = ({ movie }) => {
  return (
    <>
      <div className='card-top'>
        <img src={movie.Poster} alt={movie.Title} />
        <div className='cardTitle'>
          <h4>{movie.Title}</h4>
        </div>
      </div>
    </>
  );
};

export default MovieCard;
