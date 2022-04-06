import { INIT_BOARD, INIT_MATRIX, FIND_EMPTY, FIND_PRESSED, AVAILABLE, CHECK_BOARD, INIT_SAVED_BOARD } from '../actionTypes/boardAT'

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

export const checkBoardAC = () => {
  return {
    type: CHECK_BOARD,
  }
}

export const initSavedBoardAC = (payload) => {
  return {
    type: INIT_SAVED_BOARD,
    payload
  }
}
