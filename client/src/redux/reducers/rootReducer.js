import { combineReducers } from "redux";
import { userReducer } from './userReducer'
import { boardReducer } from "./boardReducer";
 
export const rootReducer = combineReducers({
  userReducer,
  boardReducer
 })
