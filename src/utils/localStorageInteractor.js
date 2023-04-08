import {
  GET_FROM_LOCAL_STORAGE_ERROR,
  REMOVE_FROM_LOCAL_STORAGE_ERROR,
  SET_TO_LOCAL_STORAGE_ERROR,
} from './constants';

export const getLocalStorageItem = (key) => {
  try {
    const item = localStorage.getItem(key);
    return item;
  } catch (error) {
    alert(GET_FROM_LOCAL_STORAGE_ERROR);
    return null;
  }
};

export const setLocalStorageItem = (key, value) => {
  try {
    localStorage.setItem(key, value);
  } catch (error) {
    alert(SET_TO_LOCAL_STORAGE_ERROR);
  }
};

export const removeLocalStorageItem = (key) => {
  try {
    localStorage.removeItem(key);
  } catch (error) {
    alert(REMOVE_FROM_LOCAL_STORAGE_ERROR);
  }
};
