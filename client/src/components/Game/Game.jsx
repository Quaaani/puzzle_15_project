// Инструменты
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { checkBoardAC, findEmptyAC, initBoardAC, initMatrixAC } from '../../redux/actionCreators/boardAC';
import { axiosSaveBoard } from '../../redux/asyncActionCreators/saveAAC'
import { axiosInitSavedBoard } from '../../redux/asyncActionCreators/boardAAC'

// Стили
import style from './Game.module.css';

// Компоненты
import Buttons from '../Buttons/Buttons';
import Box from '../Box/Box';

const Game = (props) => {
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.userReducer);
  const { board, solved, moves } = useSelector((state) => state.boardReducer);
  
  useEffect(() => {
    dispatch(initBoardAC());
    dispatch(findEmptyAC())
    dispatch(checkBoardAC())
  }, [dispatch, board, moves]);
  
  const toSave = async (event) => {
    event.preventDefault()

    const tempBoard = board.join('_')

    const payload = {
      game_board: tempBoard,
      game_moves: moves
    }

    try {
      await dispatch(axiosSaveBoard(payload))
    } catch (error) {
      console.log('save board Error =>', { ...error })
    }

  }

  const toLoad = async (event) => {
    event.preventDefault()

    try {
      await dispatch(axiosInitSavedBoard())
    } catch (error) {
      console.log('load board Error =>', { ...error })
    }
  }

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
                <div>Moves: {moves}</div>
                <div>
                <button onClick={toSave} className={style.buttonTextContainer} style={{marginRight: '10px'}}>Save</button>
                <button onClick={toLoad} className={style.buttonTextContainer}>Load</button>
                </div>
              </div>
            </div>
            <div className={style.boxContainer}>
              {!solved ? (
                board.map((num, ind) => <Box key={ind} num={num} ind={ind} />)
              ) : (
                <div className={style.congratulationsContainer}>
                  <div className={style.congratzText}>
                    <div>Congratulations!</div>
                    <div>Total moves: {moves}</div>
                  </div>
                </div>
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
