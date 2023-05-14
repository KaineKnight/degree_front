import { call, put, takeLatest } from 'redux-saga/effects';

import { getProblems } from '../../api';
import { problemsFailure, problemsSuccess } from '../actions';
import { PROBLEMS_REQUESTED } from '../actionTypes';

function* problemsWorker({ payload: { model } }) {
  try {
    const { data } = yield call(getProblems, model);
    yield put(problemsSuccess(data));
  } catch (error) {
    yield put(problemsFailure(error));
  }
}

export default function* problemsWatcher() {
  yield takeLatest(PROBLEMS_REQUESTED, problemsWorker);
}
