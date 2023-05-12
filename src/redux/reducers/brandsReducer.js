import { BRANDS_FAILURE, BRANDS_REQUESTED, BRANDS_SUCCESS } from '../actionTypes';

const initialState = {
  isLoading: false,
  error: null,
  brands: [],
};

export default function brandsReducer(state = initialState, action = {}) {
  switch (action.type) {
    case BRANDS_REQUESTED:
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    case BRANDS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: null,
        brands: action.payload,
      };
    case BRANDS_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
        brands: [],
      };
    default: return state;
  }
}
