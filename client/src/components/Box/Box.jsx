import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { findPressedAC, availableAC } from '../../redux/actionCreators/boardAC'

import style from './Box.module.css'

function Box({ num, ind }) {

  const dispatch = useDispatch()

  const { pressed } = useSelector(state => state.boardReducer)

  const toPress = () => {
    dispatch(findPressedAC(num))
    dispatch(availableAC(pressed))
  }

  return (
    <div onClick={toPress} className={style.boxContainer}>
      {num ? num : null}
    </div>
  );
}

export default Box;
