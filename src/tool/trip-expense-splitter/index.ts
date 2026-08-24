import type { ToolDefinition } from '../../types';
import { tripExpenseSplitter } from './entry';

export * from './entry';

export const TRIP_EXPENSE_SPLITTER_TOOL: ToolDefinition = {
  entry: tripExpenseSplitter,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
};
