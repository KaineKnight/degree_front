import { createAction } from 'redux-actions';

import {
  CREATE_TASK_REQUESTED,
  CREATE_TASK_SUCCESS,
  CREATE_TASK_FAILURE,
  CREATE_TASK_CLEAR,
  TASKS_REQUESTED,
  TASKS_SUCCESS,
  TASKS_FAILURE,
  MORE_TASKS_REQUESTED,
  MORE_TASKS_SUCCESS,
  MORE_TASKS_FAILURE,
} from '../actionTypes';

export const createTaskRequest = createAction(CREATE_TASK_REQUESTED);
export const createTaskSuccess = createAction(CREATE_TASK_SUCCESS);
export const createTaskFailure = createAction(CREATE_TASK_FAILURE);
export const createTaskClear = createAction(CREATE_TASK_CLEAR);

export const tasksRequest = createAction(TASKS_REQUESTED);
export const tasksSuccess = createAction(TASKS_SUCCESS);
export const tasksFailure = createAction(TASKS_FAILURE);

export const moreTasksRequest = createAction(MORE_TASKS_REQUESTED);
export const moreTasksSuccess = createAction(MORE_TASKS_SUCCESS);
export const moreTasksFailure = createAction(MORE_TASKS_FAILURE);
