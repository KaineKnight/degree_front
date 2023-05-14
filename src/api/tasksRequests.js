import api from './api';

export const createTask = (task) => api.post('tasks', task);
export const getTasks = ({ pageOptions, filterOptions }) => {
  const queryParams = { ...pageOptions, ...filterOptions };
  return api.get('tasks', { params: queryParams });
};
