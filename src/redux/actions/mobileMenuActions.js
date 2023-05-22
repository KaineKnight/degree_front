import { createAction } from 'redux-actions';

import { TOGGLE_MOBILE_MENU } from '../actionTypes';

export const toggleMobileMenu = createAction(TOGGLE_MOBILE_MENU);

export default toggleMobileMenu;
