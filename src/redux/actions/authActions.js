import { createAction } from 'redux-actions';

import {
  AUTH_FAILURE,
  AUTH_LOGOUT_FAILURE,
  AUTH_LOGOUT_REQUESTED,
  AUTH_LOGOUT_SUCCESS,
  AUTH_REFRESH_REQUESTED,
  AUTH_REQUESTED,
  AUTH_SUCCESS,
} from '../actionTypes';

export const authRequest = createAction(AUTH_REQUESTED);
export const authRefreshRequest = createAction(AUTH_REFRESH_REQUESTED);
export const authSuccess = createAction(AUTH_SUCCESS);
export const authFailure = createAction(AUTH_FAILURE);

export const logoutRequest = createAction(AUTH_LOGOUT_REQUESTED);
export const logoutSuccess = createAction(AUTH_LOGOUT_SUCCESS);
export const logoutFailure = createAction(AUTH_LOGOUT_FAILURE);
