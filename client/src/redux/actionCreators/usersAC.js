import { ADD_USER } from '../actionTypes/usersAT'

export const addUserAC = (payload) => {
  return {
    type: ADD_USER,
    payload
  }
}
