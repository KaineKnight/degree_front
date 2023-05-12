import { createAction } from 'redux-actions';

import { BRANDS_FAILURE, BRANDS_REQUESTED, BRANDS_SUCCESS } from '../actionTypes';

export const brandsRequest = createAction(BRANDS_REQUESTED);
export const brandsSuccess = createAction(BRANDS_SUCCESS);
export const brandsFailure = createAction(BRANDS_FAILURE);
