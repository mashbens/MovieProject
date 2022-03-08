import React, { useState } from 'react';
import { fetchMovie } from '../../redux/movie/movieAction';
import { useDispatch } from 'react-redux';
// import { fetchMovie } from '../../redux/reducer';
import './SearchForm.scss';

export const SearchForm = () => {
  const [term, setTerm] = useState('');
  const dispatch = useDispatch();
  const submitHendler = (e) => {
    e.preventDefault();
    dispatch(fetchMovie(term));

    console.log(term);
  };

  return (
    <div className='container'>
      <form onSubmit={submitHendler}>
        <input type='text' value={term} placeholder='Search Movies, TV Series ...' onChange={(e) => setTerm(e.target.value)} />
        <button type='submit'>Search</button>
      </form>
    </div>
  );
};

export default SearchForm;
