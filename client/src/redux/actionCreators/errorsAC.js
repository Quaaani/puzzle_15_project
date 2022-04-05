import { ADD_ERROR } from '../actionTypes/errorsAT'

export const addErrorAC = (payload) => {
  return {
    type: ADD_ERROR,
    payload
  }
}

