import { createAction } from 'redux-actions';

import { MODELS_FAILURE, MODELS_REQUESTED, MODELS_SUCCESS } from '../actionTypes';

export const modelsRequest = createAction(MODELS_REQUESTED);
export const modelsSuccess = createAction(MODELS_SUCCESS);
export const modelsFailure = createAction(MODELS_FAILURE);
