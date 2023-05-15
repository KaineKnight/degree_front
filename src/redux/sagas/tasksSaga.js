import { call, put, takeLatest } from 'redux-saga/effects';

import { CREATE_TASK_REQUESTED, MORE_TASKS_REQUESTED, TASKS_REQUESTED } from '../actionTypes';
import { createTask, getTasks } from '../../api';
import {
  createTaskSuccess,
  createTaskFailure,
  tasksFailure,
  tasksSuccess,
  moreTasksSuccess,
  moreTasksFailure,
} from '../actions';

function* createTaskWorker({ payload }) {
  try {
    const { data: { id } } = yield call(createTask, payload);
    yield put(createTaskSuccess(id));
  } catch (error) {
    yield put(createTaskFailure(error));
  }
}

// function* getTasks({ payload: { pageOptions, filterOptions } }) {
function* getTasksWorker({ payload: { pageOptions, filterOptions } }) {
  try {
    const { data: { data } } = yield call(getTasks, pageOptions, filterOptions);
    // const data = yield call(getTasks);
    yield put(tasksSuccess(data));
  } catch (error) {
    yield put(tasksFailure(error));
  }
}

function* getMoreTasksWorker({ payload: { pageOptions, filterOptions } }) {
  try {
    const { data: { data } } = yield call(getTasks, pageOptions, filterOptions);
    yield put(moreTasksSuccess(data));
  } catch (error) {
    yield put(moreTasksFailure(error));
  }
}

export default function* createTaskWatcher() {
  yield takeLatest(CREATE_TASK_REQUESTED, createTaskWorker);
  yield takeLatest(TASKS_REQUESTED, getTasksWorker);
  yield takeLatest(MORE_TASKS_REQUESTED, getMoreTasksWorker);
}
