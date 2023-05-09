import { TOGGLE_MODAL } from '../actionTypes';

const initialState = {
  isOpen: true,
};

export default function modalReducer(state = initialState, action = {}) {
  switch (action.type) {
    case TOGGLE_MODAL:
      return {
        ...state,
        isOpen: !state.isOpen,
      };
    default: return state;
  }
}
