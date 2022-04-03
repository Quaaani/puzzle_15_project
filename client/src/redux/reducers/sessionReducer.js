import { INIT_SESSION, DELETE_SESSION } from '../actionTypes/sessionAT'
const initialState = { session: [] }

export const sessionReducer = (state = initialState, action) => {
  switch (action.type) {
    case INIT_SESSION:
      return { ...state, session: action.payload }

    case DELETE_SESSION:
      return { ...state, session: [] }

    default: 
      return state
  }
}
