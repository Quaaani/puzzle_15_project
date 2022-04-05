// Инструменты
import React, { useState } from 'react';
import axios from 'axios'

// Стили
import style from './Pictures.module.css';

// Компоненты
import Buttons from '../Buttons/Buttons';

function Pictures(props) {
  const [url, setUrl] = useState('');

  const toCat = async (event) => {
    event.preventDefault();
    const response = await axios.get('https://api.thecatapi.com/v1/images/search')
    setUrl(response.data[0].url);
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
