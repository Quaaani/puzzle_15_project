// Инструменты
import React from 'react';
import { Link } from 'react-router-dom'

// Стили
import style from './Header.module.css';

function Header(props) {
  return (
    <div className={style.headerContainer}>
      <Link to={'/'} className={style.headerText}>Puzzle 15</Link>
      <Link to={'/personal'} className={style.headerText}>Player</Link>
      <div className={style.headerText}>Logout</div>
    </div>
  );
}

export default Header;
