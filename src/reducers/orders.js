import {
  ORDER_LOADING,
  GET_ORDERS_REQUEST,
  GET_ORDER_REQUEST,
  POST_ORDER_REQUEST,
  GET_ORDERS_REQUEST_ERROR,
  GET_ORDER_REQUEST_ERROR,
  POST_ORDER_REQUEST_ERROR,
  PUT_ORDER_COMMISION_REQUEST,
  PUT_ORDER_COMPLETE_REQUEST,
  PUT_ORDER_COMMISION_REQUEST_ERROR,
  PUT_ORDER_COMPLETE_REQUEST_ERROR
} from '../actions/types';

const initialState = {
  orders: [],
  order: null,
  loading: true,
  error: {}
};


function orderReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case ORDER_LOADING:
      return {
        ...state,
        loading: true
      };
    case GET_ORDER_REQUEST:
      return {
        ...state,
        order: payload,
        loading: false
      };
    case GET_ORDERS_REQUEST:
      return {
        ...state,
        orders: payload,
        loading: false
      };
    case GET_ORDER_REQUEST_ERROR:
      return {
        ...state,
        error: payload,
        loading: false
      };
    case GET_ORDERS_REQUEST_ERROR:
      return {
        ...state,
        error: payload,
        loading: false
      };
    case POST_ORDER_REQUEST:
      return {
        ...state,
        order: payload,
        loading: false
      };
    case PUT_ORDER_COMMISION_REQUEST:
      return {
        ...state,
        order: payload,
        loading: false
      };
    case PUT_ORDER_COMPLETE_REQUEST:
      return {
        ...state,
        order: payload,
        loading: false
      };
    case POST_ORDER_REQUEST_ERROR:
      return {
        ...state,
        error: payload,
        loading: false
      };
    case PUT_ORDER_COMMISION_REQUEST_ERROR:
      return {
        ...state,
        error: payload,
        loading: false
      };
    case PUT_ORDER_COMPLETE_REQUEST_ERROR:
      return {
        ...state,
        error: payload,
        loading: false
      };
    default:
      return state;
  }
}

export default orderReducer;