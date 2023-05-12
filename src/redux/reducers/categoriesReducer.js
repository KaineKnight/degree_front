import { CATEGORIES_FAILURE, CATEGORIES_REQUESTED, CATEGORIES_SUCCESS } from '../actionTypes';

const initialState = {
  isLoading: false,
  error: null,
  categories: [],
};

export default function categoriesReducer(state = initialState, action = {}) {
  switch (action.type) {
    case CATEGORIES_REQUESTED:
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    case CATEGORIES_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: null,
        categories: action.payload,
      };
    case CATEGORIES_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
        categories: [],
      };
    default: return state;
  }
}
