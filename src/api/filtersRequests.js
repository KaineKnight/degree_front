import api from './api';

export const getBrands = () => api.get('brands');
export const getCategories = () => api.get('categories');
export const getModels = () => api.get('models');
export const getProblems = () => api.get('problems');
