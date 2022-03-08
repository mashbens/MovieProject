import { FETCH_MOVIE_FAILURE, FETCH_MOVIE_SUCCESS, FETCH_MOVIE_REQUEST } from './movieTypes';

const initialState = {
  loading: false,
  movie: [],
  eror: '',
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_MOVIE_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_MOVIE_SUCCESS:
      return {
        ...state,
        loading: false,
        movies: action.payload,
        error: '',
      };
    case FETCH_MOVIE_FAILURE:
      return {
        ...state,
        loading: false,
        movies: [],
        error: action.payload,
      };

    default:
      return state;
  }
};

export default reducer;
