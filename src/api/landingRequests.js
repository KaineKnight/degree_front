import api from './api';

export const getPlacemarks = () => api.get('placemarks');
export const getQuestions = () => api.get('questions');
