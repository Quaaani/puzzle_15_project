import { addUserAC } from '../actionCreators/usersAC';
import { initSessionAC } from '../actionCreators/sessionAC';
import { addErrorAC } from '../actionCreators/errorsAC';
import axios from 'axios';

export const fetchAddUser = (payload) => {
  return async (dispatch) => {
    dispatch({ type: 'LOADING', payload: true })
    try {
      const response = await axios.post('/profile', payload);

      console.log('response =>', response )
      dispatch(addUserAC(response.data.data))
      dispatch(initSessionAC(response.data.data))
      dispatch({ type: 'LOADED', payload: true })
    } catch (error) {
      dispatch({ type: 'FAILED', payload: true })
      throw error
    } finally {
      dispatch({ type: 'LOADING', payload: false })
    }
  };

};
