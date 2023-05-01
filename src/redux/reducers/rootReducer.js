import { combineReducers } from 'redux';

import authReducer from './authReducer';
import mobileMenuReducer from './mobileMenuReducer';
import themeReducer from './themeReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  mobileMenu: mobileMenuReducer,
  theme: themeReducer,
  // news: newsReducer,
  // modal: modalReducer,
  // user: userReducer,
});

export default rootReducer;
