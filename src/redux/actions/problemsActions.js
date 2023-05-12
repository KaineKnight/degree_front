import { createAction } from 'redux-actions';

import { PROBLEMS_REQUESTED, PROBLEMS_SUCCESS, PROBLEMS_FAILURE } from '../actionTypes';

export const problemsRequest = createAction(PROBLEMS_REQUESTED);
export const problemsSuccess = createAction(PROBLEMS_SUCCESS);
export const problemsFailure = createAction(PROBLEMS_FAILURE);
