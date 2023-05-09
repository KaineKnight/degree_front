import { combineReducers } from 'redux';

import authReducer from './authReducer';
import mobileMenuReducer from './mobileMenuReducer';
import themeReducer from './themeReducer';
import modalReducer from './modalReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  mobileMenu: mobileMenuReducer,
  theme: themeReducer,
  modal: modalReducer,
  // news: newsReducer,
  // modal: modalReducer,
  // user: userReducer,
});

export default rootReducer;
