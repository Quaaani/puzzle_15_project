import { addUserAC, deleteUserAC } from '../actionCreators/userAC';
import axios from 'axios';

export const axiosAddUser = (payload) => {
  return async (dispatch) => {
    dispatch({ type: 'LOADING', payload: true });

    try {
      const response = await axios.post('/profile', payload);

      dispatch(addUserAC(response.data.data));
      dispatch({ type: 'LOADED', payload: true });
    } catch (error) {
      dispatch({ type: 'FAILED', payload: true });
      throw error;
    } finally {
      dispatch({ type: 'LOADING', payload: false });
    }
  };
};

export const axiosCheckUser = (payload) => {
  return async (dispatch) => {
    try {
      const response = await axios.get('/session');
      dispatch(addUserAC(response.data.data));
    } catch (error) {
      throw error;
    }
  };
};

export const axiosLoginUser = (payload) => {
  return async (dispatch) => {
    dispatch({ type: 'LOADING', payload: true });

    try {
      const response = await axios.post('/login', payload);

      dispatch(addUserAC(response.data.data));
      dispatch({ type: 'LOADED', payload: true });
    } catch (error) {
      dispatch({ type: 'FAILED', payload: true });
      throw error;
    } finally {
      dispatch({ type: 'LOADING', payload: false });
    }
  };
};

export const axiosDeleteSession = () => {
  return async (dispatch) => {
    try {
      await axios.get('/logout');
      dispatch(deleteUserAC());
      localStorage.clear();
    } catch (error) {
      throw error;
    }
  };
};
