import { call, put, takeLatest } from 'redux-saga/effects';

import { getQuestions } from '../../api';
import { questionsFailure, questionsSuccess } from '../actions';
import { QUESTIONS_REQUESTED } from '../actionTypes';

function* questionsWorker() {
  try {
    const { data } = yield call(getQuestions);
    yield put(questionsSuccess(data));
  } catch (error) {
    yield put(questionsFailure(error));
  }
}

export default function* questionsWatcher() {
  yield takeLatest(QUESTIONS_REQUESTED, questionsWorker);
}
