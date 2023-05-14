import { combineReducers } from 'redux';

import authReducer from './authReducer';
import mobileMenuReducer from './mobileMenuReducer';
import themeReducer from './themeReducer';
import modalReducer from './modalReducer';
import brandsReducer from './brandsReducer';
import categoriesReducer from './categoriesReducer';
import modelsReducer from './modelsReducer';
import problemsReducer from './problemsReducer';
import trackNumberReducer from './trackNumberReducer';
import placemarksReducer from './placemarksReducer';
import questionsReducer from './questionsReducer';
import tasksReducer from './tasksReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  mobileMenu: mobileMenuReducer,
  theme: themeReducer,
  modal: modalReducer,
  brands: brandsReducer,
  categories: categoriesReducer,
  models: modelsReducer,
  problems: problemsReducer,
  trackNumber: trackNumberReducer,
  placemarks: placemarksReducer,
  questions: questionsReducer,
  tasks: tasksReducer,
  // news: newsReducer,
  // user: userReducer,
});

export default rootReducer;
