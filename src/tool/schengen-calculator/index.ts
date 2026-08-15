import type { ToolDefinition } from '../../types';
import { schengenCalculator } from './entry';
export * from './entry';

export const SCHENGEN_CALCULATOR_TOOL: ToolDefinition = {
  entry: schengenCalculator,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
};
