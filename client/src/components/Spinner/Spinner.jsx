// Инструменты
import React from 'react';

// Стили
import style from './Spinner.module.css'

function Spinner(props) {
  return (
    <div className={style.spinner}>
      <div></div>
      <div></div>
    </div>
  );
}

export default Spinner;
