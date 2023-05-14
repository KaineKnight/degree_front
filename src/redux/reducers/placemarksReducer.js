import { PLACEMARKS_REQUESTED, PLACEMARK_FAILURE, PLACEMARK_SUCCESS } from '../actionTypes';

const initialState = {
  isLoading: false,
  error: null,
  placemarks: [],
};

export default function placemarksReducer(state = initialState, action = {}) {
  switch (action.type) {
    case PLACEMARKS_REQUESTED:
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    case PLACEMARK_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: null,
        placemarks: action.payload,
      };
    case PLACEMARK_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
        placemarks: [],
      };
    default: return state;
  }
}
