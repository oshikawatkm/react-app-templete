import api from '../utils/api';
import {
 GET_USERS_REQUEST,
 GET_USER_REQUEST,
 POST_USER_REQUEST,
 LOGIN_USER_REQUEST,
 GET_USERS_REQUEST_ERROR,
 GET_USER_REQUEST_ERROR,
 POST_USER_REQUEST_ERROR,
 LOGIN_USER_REQUEST_ERROR,
} from './types';


export const postUserRequest = formData => async dispatch => {
  try {
    const res = await api.post('/users', formData);

    dispatch({
      type: POST_USER_REQUEST,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: POST_USER_REQUEST_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
}

export const getUsersRequest = () => async dispatch => {
  try {
    const res = await api.get('/users');

    dispatch({
      type: GET_USERS_REQUEST,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: GET_USERS_REQUEST_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
}

export const getUserRequest = id => async dispatch => {
  try {
    const res = await api.get(`/users/${id}`);

    dispatch({
      type: GET_USER_REQUEST,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: GET_USER_REQUEST_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
}


export const loginUserRequest = formData => async dispatch => {
  try {
    const res = await api.post('/users/login', formData);

    dispatch({
      type: LOGIN_USER_REQUEST,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: LOGIN_USER_REQUEST_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
}