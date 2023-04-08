import {
  takeLatest,
  put,
  call,
} from 'redux-saga/effects';

import { AUTH_LOGOUT_REQUESTED, AUTH_REFRESH_REQUESTED, AUTH_REQUESTED } from '../actionTypes';
import { logoutFailure, logoutSuccess } from '../actions';
import { logout } from '../../api';
import { removeLocalStorageItem } from '../../utils/localStorageInteractor';
import { ACCESS_TOKEN, REFRESH_TOKEN } from '../../utils/constants';

function* authWorker({ payload }) {

}

function* logoutWorker() {
  try {
    yield call(logout);
    removeLocalStorageItem(REFRESH_TOKEN);
    removeLocalStorageItem(ACCESS_TOKEN);
    yield put(logoutSuccess());
  } catch (error) {
    yield put(logoutFailure());
  }
}

function* refreshTokenWorker() {

}

export default function* authWatcher() {
  yield takeLatest(AUTH_REQUESTED, authWorker);
  yield takeLatest(AUTH_LOGOUT_REQUESTED, logoutWorker);
  yield takeLatest(AUTH_REFRESH_REQUESTED, refreshTokenWorker);
}
