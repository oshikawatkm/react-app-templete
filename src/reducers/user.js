import {
  USER_LOADING,
  GET_USERS_REQUEST,
  GET_USER_REQUEST,
  POST_USER_REQUEST,
  GET_USERS_REQUEST_ERROR,
  GET_USER_REQUEST_ERROR,
  POST_USER_REQUEST_ERROR,
} from '../actions/types';

const initialState = {
  users: [],
  user: null,
  loading: true,
  error: {}
};


function userReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case USER_LOADING:
      return {
        ...state,
        loading: true
      };
    case GET_USER_REQUEST:
      return {
        ...state,
        user: payload,
        loading: false
      };
    case GET_USERS_REQUEST:
      return {
        ...state,
        users: payload,
        loading: false
      };
    case GET_USER_REQUEST_ERROR:
      return {
        ...state,
        error: payload,
        loading: false
      };
    case GET_USERS_REQUEST_ERROR:
      return {
        ...state,
        error: payload,
        loading: false
      };
    case POST_USER_REQUEST:
      return {
        ...state,
        user: payload,
        loading: false
      };
    case POST_USER_REQUEST_ERROR:
      return {
        ...state,
        error: payload,
        loading: false
      };
    default:
      return state;
  }
}

export default userReducer;