import axios from 'axios';

import { ACCESS_TOKEN, REFRESH_TOKEN } from '../utils/constants';
import { getLocalStorageItem } from '../utils/localStorageInteractor';

const api = axios.create({
  baseURL: `${process.env.REACT_APP_API_URL}/api`,
});

api.interceptors.request.use(
  (config) => {
    const { headers } = config;
    const token = getLocalStorageItem(ACCESS_TOKEN);
    if (token) {
      headers.Authorization = `Bearer ${token}`;
    }
    console.log(config);
    return config;
  },
  (error) => Promise.reject(error),
);

export const refreshApi = axios.create({
  baseURL: `${process.env.REACT_APP_API_URL}/api`,
});

refreshApi.interceptors.request.use(
  (config) => {
    const { headers } = config;
    const token = getLocalStorageItem(REFRESH_TOKEN);
    if (token) {
      headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error),
);

export default api;
