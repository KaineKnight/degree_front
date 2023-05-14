import { call, put, takeLatest } from 'redux-saga/effects';

import { getModels } from '../../api';
import { modelsFailure, modelsSuccess } from '../actions';
import { MODELS_REQUESTED } from '../actionTypes';

function* modelsWorker({ payload: { brand, category } }) {
  try {
    const { data } = yield call(getModels, brand, category);
    yield put(modelsSuccess(data));
  } catch (error) {
    yield put(modelsFailure(error));
  }
}

export default function* modelsWatcher() {
  yield takeLatest(MODELS_REQUESTED, modelsWorker);
}
