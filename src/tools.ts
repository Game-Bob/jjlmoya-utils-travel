import { LUGGAGE_CALCULATOR_TOOL } from './tool/luggage-calculator';
import { TIP_CALCULATOR_TOOL } from './tool/tip-calculator';
import { SUITCASE_CHECKLIST_TOOL } from './tool/suitcase-checklist';
import { MINI_ADVENTURES_TOOL } from './tool/mini-adventures';
import { SCHENGEN_CALCULATOR_TOOL } from './tool/schengen-calculator';
import { FUEL_COST_CALCULATOR_TOOL } from './tool/fuel-cost-calculator';
import { TRIP_EXPENSE_SPLITTER_TOOL } from './tool/trip-expense-splitter';
import type { ToolDefinition } from './types';

export { ALL_ENTRIES } from './entries';

export const ALL_TOOLS: ToolDefinition[] = [
  LUGGAGE_CALCULATOR_TOOL,
  TIP_CALCULATOR_TOOL,
  SUITCASE_CHECKLIST_TOOL,
  MINI_ADVENTURES_TOOL,
  SCHENGEN_CALCULATOR_TOOL,
  FUEL_COST_CALCULATOR_TOOL,
  TRIP_EXPENSE_SPLITTER_TOOL,
];

export { luggageCalculator } from './tool/luggage-calculator/entry';
export type { Airline, LuggageCalculatorUI, LuggageCalculatorLocaleContent } from './tool/luggage-calculator/entry';
export { miniAdventures } from './tool/mini-adventures/entry';
export type { AdventureCategory, Adventure, Achievement, MiniAdventuresUI } from './tool/mini-adventures/entry';
export { suitcaseChecklist } from './tool/suitcase-checklist/entry';
export type { ChecklistItem, ChecklistCategory, SuitcaseChecklistUI } from './tool/suitcase-checklist/entry';
export { tipCalculator } from './tool/tip-calculator/entry';
export type { TipCountry, TipCalculatorUI } from './tool/tip-calculator/entry';
export { schengenCalculator } from './tool/schengen-calculator/entry';
export type { SchengenCalculatorUI } from './tool/schengen-calculator/entry';
export { fuelCostCalculator } from './tool/fuel-cost-calculator/entry';
export type { FuelCostCalculatorUI } from './tool/fuel-cost-calculator/entry';
export { tripExpenseSplitter } from './tool/trip-expense-splitter/entry';
export type { TripExpenseSplitterUI } from './tool/trip-expense-splitter/entry';
export { travelCategory } from './category';
