import { QUESTIONS_FAILURE, QUESTIONS_REQUESTED, QUESTIONS_SUCCESS } from '../actionTypes';

const initialState = {
  isLoading: false,
  error: null,
  questions: [],
};

export default function questionsReducer(state = initialState, action = {}) {
  switch (action.type) {
    case QUESTIONS_REQUESTED:
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    case QUESTIONS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: null,
        questions: action.payload,
      };
    case QUESTIONS_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
        questions: [],
      };
    default: return state;
  }
}
