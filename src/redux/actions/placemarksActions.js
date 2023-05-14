import { createAction } from 'redux-actions';

import { PLACEMARKS_REQUESTED, PLACEMARK_SUCCESS, PLACEMARK_FAILURE } from '../actionTypes';

export const placemarksRequest = createAction(PLACEMARKS_REQUESTED);
export const placemarksSuccess = createAction(PLACEMARK_SUCCESS);
export const placemarksFailure = createAction(PLACEMARK_FAILURE);
