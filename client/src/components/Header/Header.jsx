// Инструменты
import React from 'react';
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { deleteSessionAC } from '../../redux/actionCreators/sessionAC'

// Стили
import style from './Header.module.css';

function Header(props) {

  const dispatch = useDispatch()
  const { session } = useSelector(state => state.sessionReducer)

  const toLogout = () => {
    fetch('/logout')
      .then(res => res.json())
      .then(data => console.log(data))

    dispatch(deleteSessionAC())
  }

  return (
    <div className={style.headerContainer}>
      <Link to={'/'} className={style.headerText}>Puzzle 15</Link>
      {session.user_login && <div className={style.headerText}>{session.user_login}</div>}
      {session.user_login ? <div onClick={toLogout} className={style.headerText}>Logout</div> : <Link to={'/login'} className={style.headerText}>Login</Link>} 
    </div>
  );
}

export default Header;
