import { INIT_BOARD, INIT_MATRIX, FIND_EMPTY, FIND_PRESSED, AVAILABLE } from '../actionTypes/boardAT'

export const initBoardAC = () => {
  return {
    type: INIT_BOARD,
  }
}

export const initMatrixAC = () => {
  return {
    type: INIT_MATRIX
  }
}

export const findEmptyAC = () => {
  return {
    type: FIND_EMPTY
  }
}

export const findPressedAC = (payload) => {
  return {
    type: FIND_PRESSED,
    payload
  }
}

export const availableAC = (payload) => {
  return {
    type: AVAILABLE,
    payload
  }
}
