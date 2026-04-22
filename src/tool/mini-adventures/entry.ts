import type { TravelToolEntry } from '../../types';

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
    de: () => import('./i18n/de').then((m) => m.content),
    en: () => import('./i18n/en').then((m) => m.content),
    es: () => import('./i18n/es').then((m) => m.content),
    fr: () => import('./i18n/fr').then((m) => m.content),
    id: () => import('./i18n/id').then((m) => m.content),
    it: () => import('./i18n/it').then((m) => m.content),
    ja: () => import('./i18n/ja').then((m) => m.content),
    ko: () => import('./i18n/ko').then((m) => m.content),
    nl: () => import('./i18n/nl').then((m) => m.content),
    pl: () => import('./i18n/pl').then((m) => m.content),
    pt: () => import('./i18n/pt').then((m) => m.content),
    ru: () => import('./i18n/ru').then((m) => m.content),
    sv: () => import('./i18n/sv').then((m) => m.content),
    tr: () => import('./i18n/tr').then((m) => m.content),
    zh: () => import('./i18n/zh').then((m) => m.content),
  },
};

export { bibliography } from './bibliography';
