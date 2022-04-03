// Инструменты
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

// Стили
import style from './Game.module.css';

// Компоненты
import Buttons from '../Buttons/Buttons';

function Game(props) {
  const dispatch = useDispatch();
  const { session } = useSelector((state) => state.sessionReducer);

  return (
    <div className={style.gameContainer}>
      <div className={style.gameForm}>
        <Buttons />
        {session.id ? (
          <div className={style.gameMainContainer}>
            <div className={style.profileInfoContainer}>
              <img
                className={style.profileImg}
                src={`https://avatars.dicebear.com/api/${session.user_sprite}/${session.user_seed}.svg`}
              />
              <div className={style.profileInfo}>
                <div>{session.user_login}</div>
                <div>Moves: 0</div>
                <button className={style.buttonTextContainer}>Save</button>
              </div>
            </div>
            <div className={style.boxContainer}>
              <div className={style.playBoxContainer}>
                <div className={style.miniBoxContainer}>9</div>
                <div className={style.miniBoxContainer}>13</div>
                <div className={style.miniBoxContainer}>11</div>
                <div className={style.miniBoxContainer}>10</div>
              </div>
              <div className={style.playBoxContainer}>
                <div className={style.miniBoxContainer}>5</div>
                <div className={style.miniBoxContainer}>14</div>
                <div className={style.miniBoxContainer}>4</div>
                <div className={style.miniBoxContainer}></div>
              </div>
              <div className={style.playBoxContainer}>
                <div className={style.miniBoxContainer}>12</div>
                <div className={style.miniBoxContainer}>8</div>
                <div className={style.miniBoxContainer}>3</div>
                <div className={style.miniBoxContainer}>6</div>
              </div>
              <div className={style.playBoxContainer}>
                <div className={style.miniBoxContainer}>15</div>
                <div className={style.miniBoxContainer}>2</div>
                <div className={style.miniBoxContainer}>7</div>
                <div className={style.miniBoxContainer}>1</div>
              </div>
            </div>
          </div>
        ) : (
          <div className={style.NoSessionContainer}>
            <div>Login before game</div>
            <br />
            <div>
              <Link to={'/login'} className={style.buttonTextContainer}>
                Login
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Game;
