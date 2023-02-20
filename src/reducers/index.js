import { combineReducers } from 'redux';
import user from './user';
import order from './orders';
import auth from './auth';


export default combineReducers({
  user,
  order,
  auth
});