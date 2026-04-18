export * from './entry';
export const MINI_ADVENTURES_TOOL: ToolDefinition = {
  entry: miniAdventures,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
};
