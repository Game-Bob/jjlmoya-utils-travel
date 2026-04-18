import { luggageCalculator } from './entry';
export * from './entry';
export const LUGGAGE_CALCULATOR_TOOL: ToolDefinition = {
  entry: luggageCalculator,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
};
