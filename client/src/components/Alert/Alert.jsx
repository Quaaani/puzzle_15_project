// Инструменты
import React from 'react';

// Стили
import style from './Alert.module.css'

function Alert({ check, message }) {
  return (
    <div className={style.alertForm}>
      <div className={check ? style.alertSuccessText : style.alertFailText}>
        {message}
      </div>
    </div>
  );
}

export default Alert;
