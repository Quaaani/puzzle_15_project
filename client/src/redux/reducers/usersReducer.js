import { ADD_USER } from '../actionTypes/usersAT'
const initialState = { users: [] }

export const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_USER:
      return { ...state, users: [...state.users, action.payload] }
      
    default:
      return state
  }
}
