import { createAction } from 'redux-actions';

import { TOGGLE_MODAL } from '../actionTypes';

export const toggleModal = createAction(TOGGLE_MODAL);

export default toggleModal;
