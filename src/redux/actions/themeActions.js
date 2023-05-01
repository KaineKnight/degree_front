import { createAction } from 'redux-actions';

import { TOGGLE_THEME } from '../actionTypes';

export const toggleTheme = createAction(TOGGLE_THEME);