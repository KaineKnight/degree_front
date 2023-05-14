import {
  CREATE_TASK_REQUESTED,
  CREATE_TASK_SUCCESS,
  CREATE_TASK_FAILURE,
  CREATE_TASK_CLEAR,
} from '../actionTypes';

const initialState = {
  isLoading: false,
  error: null,
  trackNumber: null,
};

export default function trackNumberReducer(state = initialState, action = {}) {
  switch (action.type) {
    case CREATE_TASK_REQUESTED:
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    case CREATE_TASK_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: null,
        trackNumber: action.payload,
      };
    case CREATE_TASK_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    case CREATE_TASK_CLEAR:
      return {
        ...state,
        isLoading: false,
        error: null,
        trackNumber: null,
      };
    default: return state;
  }
}
