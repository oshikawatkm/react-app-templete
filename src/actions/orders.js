import api from '../utils/api';
import {
  GET_ORDERS_REQUEST,
  GET_ORDER_REQUEST,
  POST_ORDER_REQUEST,
  PUT_ORDER_COMMISION_REQUEST,
  PUT_ORDER_COMPLETE_REQUEST,
  GET_ORDERS_REQUEST_ERROR,
  GET_ORDER_REQUEST_ERROR,
  POST_ORDER_REQUEST_ERROR,
  PUT_ORDER_COMMISION_REQUEST_ERROR,
  PUT_ORDER_COMPLETE_REQUEST_ERROR
} from './types';


export const postOrderRequest = formData => async dispatch => {
  try {
    console.log(formData)
    const res = await api.post('/orders', formData);

    dispatch({
      type: POST_ORDER_REQUEST,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: POST_ORDER_REQUEST_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
}


export const getOrdersRequest = () => async dispatch => {
  try {
    const res = await api.get('/orders');

    dispatch({
      type: GET_ORDERS_REQUEST,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: GET_ORDERS_REQUEST_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
}

export const getOrderRequest = id => async dispatch => {
  try {
    const res = await api.get(`/orders/${id}`);

    dispatch({
      type: GET_ORDER_REQUEST,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: GET_ORDER_REQUEST_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
}


export const commissionOrderRequest = (id, modelConverterId) => async dispatch => {
  try {
    const res = await api.put(`/orders/${id}/commission`, {modelConverterId});

    dispatch({
      type: PUT_ORDER_COMMISION_REQUEST,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: PUT_ORDER_COMMISION_REQUEST_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
}

export const completeOrderRequest = (id, formData) => async dispatch => {
  try {
    const headers = { "Content-Type": "multipart/form-data" };
    const res = await api.put(`/orders/${id}/complete`, formData, {headers});

    dispatch({
      type: PUT_ORDER_COMPLETE_REQUEST,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: PUT_ORDER_COMPLETE_REQUEST_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
}
