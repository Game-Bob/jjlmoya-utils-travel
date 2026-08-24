import type { FuelCostCalculatorUI } from './ui';

export type CostLevel = 'light' | 'medium' | 'high';

export interface CostStatus {
  level: CostLevel;
  label: string;
}

export function evaluateCost(costPerPerson: number, ui: FuelCostCalculatorUI): CostStatus {
  if (costPerPerson < 25) return { level: 'light', label: ui.statusLight };
  if (costPerPerson < 75) return { level: 'medium', label: ui.statusMedium };
  return { level: 'high', label: ui.statusHigh };
}
