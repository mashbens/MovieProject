import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchMovie } from '../../redux/reducer';
import MovieCard from '../MovieCard';
import Spinner from '../layout/Spinner';
import './Landing.scss';

const Landing = ({ movie, fetchMovie }) => {
  useEffect(() => {
    fetchMovie();
  }, []);

  return movie.loading ? (
    <Spinner />
  ) : movie.error ? (
    <h2>{movie.error}</h2>
  ) : (
    <div>
      <div className='movie-wrapper'>
        <div className='movie-list'>
          <h2 className='title'>Show your favorite movies</h2>

          <div className='movie-container'>
            {movie.movies &&
              movie.movies.Search.map((movie, i) => {
                return <MovieCard key={i} movie={movie} />;
              })}
          </div>
        </div>
      </div>
    </div>
  );
};
const mapStateProps = (state) => {
  return {
    movie: state.movie,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchMovie: () => dispatch(fetchMovie()),
  };
};
export default connect(mapStateProps, mapDispatchToProps)(Landing);
