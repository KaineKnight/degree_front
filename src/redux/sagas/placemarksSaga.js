import { call, put, takeLatest } from 'redux-saga/effects';

import { getPlacemarks } from '../../api';
import { placemarksFailure, placemarksSuccess } from '../actions';
import { PLACEMARKS_REQUESTED } from '../actionTypes';

function* placemarksWorker() {
  try {
    const { data } = yield call(getPlacemarks);
    yield put(placemarksSuccess(data));
  } catch (error) {
    yield put(placemarksFailure(error));
  }
}

export default function* placemarksWatcher() {
  yield takeLatest(PLACEMARKS_REQUESTED, placemarksWorker);
}
