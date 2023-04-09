import api, { refreshApi } from './api';

export const authorization = (url, userData) => api.post(url, userData);
export const logout = () => api.post('logout');
export const refreshTokenRequest = () => refreshApi.post('refresh');
