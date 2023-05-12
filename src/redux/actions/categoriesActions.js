import { createAction } from 'redux-actions';

import { CATEGORIES_FAILURE, CATEGORIES_REQUESTED, CATEGORIES_SUCCESS } from '../actionTypes';

export const categoriesRequest = createAction(CATEGORIES_REQUESTED);
export const categoriesSuccess = createAction(CATEGORIES_SUCCESS);
export const categoriesFailure = createAction(CATEGORIES_FAILURE);
