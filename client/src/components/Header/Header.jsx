// Инструменты
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { axiosCheckUser, axiosDeleteSession } from '../../redux/asyncActionCreators/userAAC'

// Стили
import style from './Header.module.css';

function Header(props) {
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.userReducer);

  useEffect(async () => {
    try {
      await dispatch(axiosCheckUser());
    } catch (error) {
      console.log('Error Header =>', error.response.data.message);
    }
  }, []);

  const toLogout = async () => {
    await dispatch(axiosDeleteSession())
  };

  return (
    <div className={style.headerContainer}>
      <Link to={'/'} className={style.headerText}>
        Puzzle 15
      </Link>
      <Link to={'/example'} className={style.headerText}>Example</Link>
      {user && (
        <Link to={'/game'} className={style.headerText}>{user.user_login}</Link>
      )}
      {user ? (
        <div onClick={toLogout} className={style.headerText}>
          Logout
        </div>
      ) : (
        <Link to={'/login'} className={style.headerText}>
          Login
        </Link>
      )}
    </div>
  );
}

export default Header;
