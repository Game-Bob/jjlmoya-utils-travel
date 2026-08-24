import type { TripState } from './logic';

const key = 'jjlmoya-trip-expense-splitter';

export const loadState = (): TripState | null => {
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) as TripState : null;
  } catch {
    return null;
  }
};

export const saveState = (state: TripState) => {
  try {
    localStorage.setItem(key, JSON.stringify(state));
  } catch {}
};

export const clearState = () => {
  try {
    localStorage.removeItem(key);
  } catch {}
};
