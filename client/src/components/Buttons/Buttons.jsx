// Инструменты
import React from 'react';
import { Link } from 'react-router-dom'

// Стили
import style from './Buttons.module.css'

function Buttons(props) {
  return (
    <div className={style.buttonContainer}>
      <Link to={'/profile'} className={style.buttonTextContainer}>
        Profile
      </Link>
      <Link to={'/game'} className={style.buttonTextContainer}>
        Game
      </Link>
      <Link to={'/pictures'} className={style.buttonTextContainer}>
        Pictures
      </Link>
    </div>
  );
}

export default Buttons;
