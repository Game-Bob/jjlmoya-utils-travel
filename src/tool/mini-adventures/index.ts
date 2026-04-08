import type { TravelToolEntry, ToolDefinition } from '../../types';
import MiniAdventures from './component.astro';
import MiniAdventuresSEO from './seo.astro';
import MiniAdventuresBibliography from './bibliography.astro';

export interface AdventureCategory {
  id: string;
  label: string;
  icon: string;
  color: string;
  styling: string;
}

export interface Adventure {
  id: number;
  text: string;
  categoryId: string;
}

export interface Achievement {
  id: string;
  milestone: number;
  label: string;
  categoryId: string | 'global';
  icon: string;
  description: string;
}

export interface MiniAdventuresUI {
  [key: string]: unknown;
  title: string;
  homeTitle: string;
  homeDesc: string;
  generateBtn: string;
  anotherBtn: string;
  doneBtn: string;
  shareBtn: string;
  categories: Record<string, AdventureCategory>;
  adventures: Adventure[];
  achievements: Achievement[];
  stats: {
    adventures: string;
    badges: string;
    progress: string;
    trophies: string;
  };
  shareTemplate: string;
}

export const miniAdventures: TravelToolEntry<MiniAdventuresUI> = {
  id: 'mini-adventures',
  icons: {
    bg: 'mdi:compass-outline',
    fg: 'mdi:map-marker-distance',
  },
  i18n: {
    es: () => import('./i18n/es').then((m) => m.content),
    en: () => import('./i18n/en').then((m) => m.content),
    fr: () => import('./i18n/fr').then((m) => m.content),
  },
};

export { MiniAdventures, MiniAdventuresSEO, MiniAdventuresBibliography };

export const MINI_ADVENTURES_TOOL: ToolDefinition = {
  entry: miniAdventures,
  Component: MiniAdventures,
  SEOComponent: MiniAdventuresSEO,
  BibliographyComponent: MiniAdventuresBibliography,
};
