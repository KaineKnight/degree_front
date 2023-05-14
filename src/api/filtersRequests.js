import api from './api';

export const getBrands = () => api.get('brands');
export const getCategories = () => api.get('categories');
export const getModels = (brand, category) => api.get('models', {
  params: { brand: brand ?? null, category: category ?? null },
});
export const getProblems = (model) => api.get('problems', {
  params: { model: model ?? null },
});
