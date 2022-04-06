import { SAVE_BOARD } from '../actionTypes/saveAT'

export const saveBoardAC = (payload) => {
  return {
    type: SAVE_BOARD,
    payload
  }
}
