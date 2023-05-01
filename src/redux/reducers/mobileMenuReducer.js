import { TOGGLE_MOBILE_MENU } from '../actionTypes';

const initialState = {
  isOpen: false,
};

export default function mobileMenuReducer(state = initialState, action = {}) {
  switch (action.type) {
    case TOGGLE_MOBILE_MENU:
      return {
        ...state,
        isOpen: !state.isOpen,
      };
    default: return state;
  }
}
