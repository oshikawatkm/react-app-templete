import api from '../utils/api';
import {
  USER_LOADED,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIL,
  USER_LOGOUT,
  AUTH_ERROR,
} from './types';

export const loadUser = () => async (dispatch) => {
  try {
    const res = await api.get(`/auth/user`);
    console.log(res)

    dispatch({
      type: USER_LOADED,
      payload: res.data
    })
  } catch (err) {
    dispatch({
      type: AUTH_ERROR
    })
  }
}


export const userLogin = (email, password) => async (dispatch) => {
  const body = { email, password };

  try {
    const res = await api.post('/users/login', body);

    dispatch({
      type: USER_LOGIN_SUCCESS,
      dispatch: res.data
    })
  } catch(err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach((error) => console.log(error));
    }

    dispatch({
      type: USER_LOGIN_FAIL
    })
  }
}


export const userLogout = () => ({ type: USER_LOGOUT });


