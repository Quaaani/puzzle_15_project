// Инструменты
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { initBoardAC } from '../../redux/actionCreators/boardAC';
import Box from '../Box/Box';

// Стили
import style from './Example.module.css';

const Example = () => {
  const dispatch = useDispatch();

  const { board } = useSelector((state) => state.boardReducer);

  useEffect(() => {
    dispatch(initBoardAC());
  }, []);

  console.log('board =>', board);

  return (
    <div className={style.borderContainer}>
      <div className={style.boxContainer}>
        {board.length ? (
          board.map((num, ind) => <Box key={ind} num={num} ind={ind}/>)
        ) : (
          <div>No data</div>
        )}
      </div>
    </div>
  );
};

export default Example;
