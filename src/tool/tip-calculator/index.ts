import { tipCalculator } from './entry';
export * from './entry';
export const TIP_CALCULATOR_TOOL: ToolDefinition = {
  entry: tipCalculator,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
};
