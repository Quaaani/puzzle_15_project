import { ADD_USER, DELETE_USER } from '../actionTypes/userAT'

export const addUserAC = (payload) => {
  return {
    type: ADD_USER,
    payload
  }
}

export const deleteUserAC = () => {
  return {
    type: DELETE_USER
  }
}
