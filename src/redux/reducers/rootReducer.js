import { combineReducers } from 'redux';
import authReducer from './authReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  // news: newsReducer,
  // modal: modalReducer,
  // user: userReducer,
});

export default rootReducer;
