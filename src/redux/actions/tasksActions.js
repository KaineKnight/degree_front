import { createAction } from 'redux-actions';

import { CREATE_TASK_REQUEST, CREATE_TASK_SUCCESS, CREATE_TASK_FAILURE } from '../actionTypes';

export const createTaskRequest = createAction(CREATE_TASK_REQUEST);
export const createTaskSuccess = createAction(CREATE_TASK_SUCCESS);
export const createTaskFailure = createAction(CREATE_TASK_FAILURE);
