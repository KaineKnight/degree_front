import {
  AUTH_FAILURE,
  AUTH_LOGOUT_FAILURE,
  AUTH_LOGOUT_REQUESTED,
  AUTH_LOGOUT_SUCCESS,
  AUTH_REFRESH_REQUESTED,
  AUTH_REQUESTED,
  AUTH_SUCCESS,
} from '../actionTypes';

const initialState = {
  isLoading: false,
  error: null,
  user: null,
};

export default function authReducer(state = initialState, action = {}) {
  switch (action.type) {
    case AUTH_REFRESH_REQUESTED:
    case AUTH_LOGOUT_REQUESTED:
    case AUTH_REQUESTED:
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    case AUTH_SUCCESS:
      return {
        ...state,
        isLoading: false,
        user: action.payload,
        error: null,
      };
    case AUTH_FAILURE:
      return {
        ...state,
        isLoading: false,
        user: null,
        error: action.payload,
      };
    case AUTH_LOGOUT_SUCCESS:
      return {
        ...state,
        isLoading: false,
        user: null,
        error: null,
      };
    case AUTH_LOGOUT_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    default: return state;
  }
}
