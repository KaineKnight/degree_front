import {
  MORE_TASKS_FAILURE,
  MORE_TASKS_REQUESTED,
  MORE_TASKS_SUCCESS,
  TASKS_FAILURE,
  TASKS_REQUESTED,
  TASKS_SUCCESS,
} from '../actionTypes';

const initialState = {
  isLoading: false,
  error: null,
  tasks: [],
  page: null,
};

export default function tasksReducer(state = initialState, action = {}) {
  switch (action.type) {
    case MORE_TASKS_REQUESTED:
    case TASKS_REQUESTED:
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    case TASKS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: null,
        tasks: action.payload,
        page: 1,
      };
    case TASKS_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
        tasks: [],
      };
    case MORE_TASKS_SUCCESS: {
      const { page } = state;
      const { tasks } = state;
      const pageNumber = action.payload.length ? page + 1 : page;
      return {
        ...state,
        isLoading: false,
        error: null,
        tasks: tasks.push(...action.payload),
        page: pageNumber,
      };
    }
    case MORE_TASKS_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    default: return state;
  }
}
