import { createAction } from 'redux-actions';

import { QUESTIONS_REQUESTED, QUESTIONS_SUCCESS, QUESTIONS_FAILURE } from '../actionTypes';

export const questionsRequest = createAction(QUESTIONS_REQUESTED);
export const questionsSuccess = createAction(QUESTIONS_SUCCESS);
export const questionsFailure = createAction(QUESTIONS_FAILURE);
