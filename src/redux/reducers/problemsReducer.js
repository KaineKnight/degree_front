import { PROBLEMS_FAILURE, PROBLEMS_REQUESTED, PROBLEMS_SUCCESS } from '../actionTypes';

const initialState = {
  isLoading: false,
  error: null,
  problems: [],
};

export default function problemsReducer(state = initialState, action = {}) {
  switch (action.type) {
    case PROBLEMS_REQUESTED:
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    case PROBLEMS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: null,
        problems: action.payload,
      };
    case PROBLEMS_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
        problems: [],
      };
    default: return state;
  }
}
