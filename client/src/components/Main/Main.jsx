// Инструменты
import React from 'react';
import { Link } from 'react-router-dom';

// Стили
import style from './Main.module.css';

// Компоненты
import Buttons from '../Buttons/Buttons';

function Main(props) {
  return (
    <div className={style.mainContainer}>
      <div className={style.mainForm}>
        <Buttons />
        <Link to={'/profile'} className={style.photoContainer}>
          <img className={style.photo} src="/img/main.png" />
        </Link>
      </div>
    </div>
  );
}

export default Main;
