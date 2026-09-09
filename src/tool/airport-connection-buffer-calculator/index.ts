import type { ToolDefinition } from '../../types';
import { airportConnectionBuffer } from './entry';

export * from './entry';

export const AIRPORT_CONNECTION_BUFFER_TOOL: ToolDefinition = {
  entry: airportConnectionBuffer,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
};
