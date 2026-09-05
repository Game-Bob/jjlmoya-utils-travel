import type { ToolDefinition } from '../../types';
import { jetLagRecoveryPlanner } from './entry';

export * from './entry';
export * from './logic';

export const JET_LAG_RECOVERY_PLANNER_TOOL: ToolDefinition = {
  entry: jetLagRecoveryPlanner,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
};
