import { setLocalStorageItem } from '../../utils/localStorageInteractor';
import { TOGGLE_THEME } from '../actionTypes';
import { IS_DARK_MODE } from '../constants';

const initialState = {
  isDarkTheme: false,
};

export default function themeReducer(state = initialState, action = {}) {
  switch (action.type) {
    case TOGGLE_THEME:
      setLocalStorageItem(IS_DARK_MODE, !state.isDarkTheme);
      return {
        ...state,
        isDarkTheme: !state.isDarkTheme,
      };
    default: return state;
  }
}
