import { call, put, takeLatest } from 'redux-saga/effects';

import { BRANDS_REQUESTED } from '../actionTypes';
import { getBrands } from '../../api';
import { brandsFailure, brandsSuccess } from '../actions';

function* brandsWorker() {
  try {
    const { data } = yield call(getBrands);
    yield put(brandsSuccess(data));
  } catch (error) {
    yield put(brandsFailure(error));
  }
}

export default function* brandsWatcher() {
  yield takeLatest(BRANDS_REQUESTED, brandsWorker);
}
