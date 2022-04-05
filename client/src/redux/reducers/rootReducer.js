import { combineReducers } from "redux";
import { usersReducer } from './usersReducer'
import { sessionReducer } from "./sessionReducer";
import { errorsReducer } from './errorsReducer'
 
export const rootReducer = combineReducers({
  usersReducer,
  sessionReducer,
  errorsReducer
 })
