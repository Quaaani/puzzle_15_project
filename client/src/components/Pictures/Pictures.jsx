// Инструменты
import React, { useState } from 'react';

// Стили
import style from './Pictures.module.css';

// Компоненты
import Buttons from '../Buttons/Buttons';

function Pictures(props) {
  const [url, setUrl] = useState('');

  const toCat = (event) => {
    event.preventDefault();

    fetch('http://aws.random.cat/meow')
      .then((res) => res.json())
      .then((data) => {
        setUrl(data.file);
      });
  };

  return (
    <div className={style.picturesContainer}>
      <div className={style.picturesForm}>
        <Buttons />
        <div className={style.picturesContainer}>
          <div className={style.addPicturesForm}>
            <img className={style.imgContainer} src={url ? url : '/img/cat.png'} />
            <button onClick={toCat} className={style.buttonTextContainer}>
              More cats!
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pictures;
