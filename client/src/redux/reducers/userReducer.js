import { ADD_USER, DELETE_USER } from '../actionTypes/userAT'
const initialState = { user: null, isLoading: false, isLoaded: false, isFailed: false }

export const userReducer = (state = initialState, action) => {
  switch (action.type) {

    case 'LOADING': 
      return { ...state, isLoading: action.payload }

    case 'LOADED':
      return { ...state, isLoaded: action.payload }

    case 'FAILED': 
      return { ...state, isFailed: action.payload }

    case ADD_USER: 
      return { ...state, user: action.payload }

    case DELETE_USER:
      return initialState
      
    default:
      return state
  }
}
