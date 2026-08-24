import type { FuelUnitSystem } from './logic';

export interface FuelStorageState {
  distanceKm: number;
  consumptionLPer100Km: number;
  pricePerLiter: number;
  passengers: number;
  roundTrip: boolean;
  currency: string;
  unitSystem: FuelUnitSystem;
}

const STORAGE_KEY = 'jjlmoya_fuel_cost_calculator_state';

export function loadFuelState(fallback: FuelStorageState): FuelStorageState {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return fallback;
    const parsed = JSON.parse(raw) as Partial<FuelStorageState>;
    return { ...fallback, ...parsed };
  } catch {
    return fallback;
  }
}

export function saveFuelState(state: FuelStorageState): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch {}
}
