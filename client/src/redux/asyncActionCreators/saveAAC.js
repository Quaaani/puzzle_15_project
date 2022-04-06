import { saveBoardAC } from '../actionCreators/saveAC'
import axios from 'axios'

export const axiosSaveBoard = (payload) => {
  return async (dispatch) => {
    try {
      const response = await axios.post('/save', payload)
      console.log('save Response =>', response)
    } catch (error) {
      throw error
    }
  }
}
