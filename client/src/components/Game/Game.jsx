// Инструменты
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { findEmptyAC, initBoardAC, initMatrixAC } from '../../redux/actionCreators/boardAC';

// Стили
import style from './Game.module.css';

// Компоненты
import Buttons from '../Buttons/Buttons';
import Box from '../Box/Box';

const Game = (props) => {
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.userReducer);
  const { board, matrix, empty } = useSelector((state) => state.boardReducer);

  useEffect(() => {
    dispatch(initBoardAC());
    dispatch(initMatrixAC())
    dispatch(findEmptyAC())
  }, [dispatch]);

  console.log('board GAME =>', board);
  console.log('matrix GAME =>', matrix)
  console.log('empty GAME =>', empty)

  return (
    <div className={style.gameContainer}>
      <div className={style.gameForm}>
        <Buttons />
        {user ? (
          <div className={style.gameMainContainer}>
            <div className={style.profileInfoContainer}>
              <img
                className={style.profileImg}
                src={`https://avatars.dicebear.com/api/${user.user_sprite}/${user.user_seed}.svg`}
              />
              <div className={style.profileInfo}>
                <div>{user.user_login}</div>
                <div>Moves: 0</div>
                <button className={style.buttonTextContainer}>Save</button>
              </div>
            </div>
            <div className={style.boxContainer}>
              {board.length ? (
                board.map((num, ind) => <Box key={ind} num={num} ind={ind} />)
              ) : (
                <div>No data</div>
              )}
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
