import { IFavorite } from './station/station.types';

const PERSIST_LOCAL_STORAGE_KEY = 'SAVED_STATE';

export const loadState = () => {
  try {
    const serializedState = localStorage.getItem(PERSIST_LOCAL_STORAGE_KEY);
    if (serializedState === null) return undefined;

    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
};

// localStorage.js
export const saveState = (state: IFavorite) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem(PERSIST_LOCAL_STORAGE_KEY, serializedState);
  } catch {}
};
