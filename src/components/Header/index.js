import React from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';
import SearchForm from '../SearchForm';
const Header = () => {
  return (
    <div className='header'>
      <Link to={'/'} className='link'>
        <div className='logo'>FinProH8</div>
      </Link>
      <SearchForm />
    </div>
  );
};

export default Header;
