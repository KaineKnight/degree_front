import {
  takeLatest,
  put,
  call,
} from 'redux-saga/effects';
import jwtDecode from 'jwt-decode';

import { AUTH_LOGOUT_REQUESTED, AUTH_REFRESH_REQUESTED, AUTH_REQUESTED } from '../actionTypes';
import {
  authFailure,
  authSuccess,
  logoutFailure,
  logoutSuccess,
} from '../actions';
import { authorization, logout, refreshTokenRequest } from '../../api';
import { getLocalStorageItem, removeLocalStorageItem, setLocalStorageItem } from '../../utils/localStorageInteractor';
import { ACCESS_TOKEN, REFRESH_TOKEN } from '../../utils/constants';
import { LOGIN_URL, REGISTER_URL } from '../constants';

function* authWorker({ payload }) {
  try {
    const { isRegisterForm } = payload;
    const currentPath = isRegisterForm ? REGISTER_URL : LOGIN_URL;
    const { data } = yield call(authorization, currentPath, payload.values);

    const accessToken = data.access_token;
    const refreshToken = data.refresh_token;

    setLocalStorageItem(ACCESS_TOKEN, accessToken);
    setLocalStorageItem(REFRESH_TOKEN, refreshToken);

    const decoded = jwtDecode(accessToken);
    const { user } = decoded;
    yield put(authSuccess(user));
  } catch (error) {
    yield put(authFailure(error));
  }
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
  try {
    const { data } = yield call(refreshTokenRequest);

    const accessToken = data.access_token;
    const refreshToken = data.refresh_token;

    setLocalStorageItem(ACCESS_TOKEN, accessToken);
    setLocalStorageItem(REFRESH_TOKEN, refreshToken);

    const decoded = jwtDecode(accessToken);
    const { user } = decoded;
    yield put(authSuccess(user));
  } catch (error) {
    yield put(authFailure(error));
  }
}

export default function* authWatcher() {
  yield takeLatest(AUTH_REQUESTED, authWorker);
  yield takeLatest(AUTH_LOGOUT_REQUESTED, logoutWorker);
  yield takeLatest(AUTH_REFRESH_REQUESTED, refreshTokenWorker);
}
