export * from './entry';
export const SUITCASE_CHECKLIST_TOOL: ToolDefinition = {
  entry: suitcaseChecklist,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
};
