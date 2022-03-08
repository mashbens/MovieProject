import axios from 'axios';
import { APIKey } from '../../common/apis/APIKey';

import { FETCH_MOVIE_FAILURE, FETCH_MOVIE_SUCCESS, FETCH_MOVIE_REQUEST } from './movieTypes';

export const fetchMovieRequest = () => {
  return {
    type: FETCH_MOVIE_REQUEST,
  };
};
export const fetchMovieSuccess = (movies) => {
  return {
    type: FETCH_MOVIE_SUCCESS,
    payload: movies,
  };
};
export const fetchMovieFailure = (error) => {
  return {
    type: FETCH_MOVIE_FAILURE,
    payload: error,
  };
};

export const fetchMovie = (term) => {
  const text = 'man';
  return (dispatch) => {
    dispatch(fetchMovieRequest);
    axios
      .get(`http://www.omdbapi.com/?s=${term ? term : text}}&apikey=${APIKey}`)
      .then((response) => {
        const movies = response.data;
        dispatch(fetchMovieSuccess(movies));
      })
      .catch((error) => {
        const errorMsg = error.message;
        dispatch(fetchMovieFailure(errorMsg));
      });
  };
};
