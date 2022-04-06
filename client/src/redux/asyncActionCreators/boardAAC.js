import { initSavedBoardAC } from "../actionCreators/boardAC";
import axios from 'axios'

export const axiosInitSavedBoard = (payload) => {
  return async (dispatch) => {
    try {
      const response = await axios.get('/save')
      dispatch(initSavedBoardAC(response.data))
    } catch (error) {
      throw error
    }
  }
}
