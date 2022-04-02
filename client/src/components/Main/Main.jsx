// Инструменты
import React from 'react';

// Стили
import style from './Main.module.css'

// Компоненты
import Buttons from '../Buttons/Buttons'

function Main(props) {
  return (
    <div className={style.mainContainer}>
      <div className={style.mainForm}>
        <Buttons />
      </div>
    </div>
  );
}

export default Main;
