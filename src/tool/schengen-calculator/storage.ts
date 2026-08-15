import type { TripInterval } from './logic';

const STORAGE_KEY_TRIPS = 'jjlmoya_schengen_trips_data';
const STORAGE_KEY_REF = 'jjlmoya_schengen_reference_date';

export function loadSavedTrips(): TripInterval[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY_TRIPS);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

export function saveTripsToStorage(trips: TripInterval[]): void {
  try {
    localStorage.setItem(STORAGE_KEY_TRIPS, JSON.stringify(trips));
  } catch {
    return;
  }
}

export function loadSavedReferenceDate(defaultDate: string): string {
  try {
    const raw = localStorage.getItem(STORAGE_KEY_REF);
    return raw || defaultDate;
  } catch {
    return defaultDate;
  }
}

export function saveReferenceDateToStorage(refDate: string): void {
  try {
    localStorage.setItem(STORAGE_KEY_REF, refDate);
  } catch {
    return;
  }
}
