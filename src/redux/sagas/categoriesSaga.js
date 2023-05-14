import { call, put, takeLatest } from 'redux-saga/effects';

import { CATEGORIES_REQUESTED } from '../actionTypes';
import { getCategories } from '../../api';
import { categoriesFailure, categoriesSuccess } from '../actions';

function* categoriesWorker() {
  try {
    const { data } = yield call(getCategories);
    yield put(categoriesSuccess(data));
  } catch (error) {
    yield put(categoriesFailure(error));
  }
}

export default function* categoriesWatcher() {
  yield takeLatest(CATEGORIES_REQUESTED, categoriesWorker);
}
