import { MODELS_FAILURE, MODELS_REQUESTED, MODELS_SUCCESS } from '../actionTypes';

const initialState = {
  isLoading: false,
  error: null,
  models: [],
};

export default function modelsReducer(state = initialState, action = {}) {
  switch (action.type) {
    case MODELS_REQUESTED:
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    case MODELS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: null,
        models: action.payload,
      };
    case MODELS_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
        models: [],
      };
    default: return state;
  }
}
