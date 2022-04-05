import { ADD_ERROR } from '../actionTypes/errorsAT'
const initialState = { errors: [] }

export const errorsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ERROR:
      // return { ...state, errors: [...state.errors, action.payload] }
      return { ...state, errors: action.payload }
      
    default:
      return state
  }
}
