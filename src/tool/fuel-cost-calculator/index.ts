import type { ToolDefinition } from '../../types';
import { fuelCostCalculator } from './entry';

export * from './entry';

export const FUEL_COST_CALCULATOR_TOOL: ToolDefinition = {
  entry: fuelCostCalculator,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
};
