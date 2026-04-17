import type { TravelToolEntry, ToolDefinition } from '../../types';
import SuitcaseChecklist from './component.astro';
import SuitcaseChecklistSEO from './seo.astro';
import SuitcaseChecklistBibliography from './bibliography.astro';

export interface ChecklistItem {
  label: string;
  dynamicId?: string;
}

export interface ChecklistCategory {
  id: string;
  title: string;
  icon: string;
  items: ChecklistItem[];
}

export interface SuitcaseChecklistUI {
  [key: string]: unknown;
  title: string;
  form: {
    destTitle: string;
    destTypes: Array<{ id: string; name: string; icon: string }>;
    daysTitle: string;
    intlTitle: string;
    intlLabel: string;
    reasonTitle: string;
    reasons: Array<{ id: string; name: string; icon: string }>;
    submitBtn: string;
  };
  results: {
    title: string;
    editBtn: string;
    printBtn: string;
    tipsTitle: string;
    progressText: string;
  };
  itemsDb: Record<string, ChecklistCategory>;
  specificItems: {
    destType: Record<string, ChecklistCategory>;
    travelType: Record<string, ChecklistCategory>;
  };
  tips: {
    military: string;
    longTravel: string;
    intlPassport: string;
    intlBank: string;
    intlAdapter: string;
    coldLayers: string;
    coldHeavyOn: string;
    beachWet: string;
  };
}

export const suitcaseChecklist: TravelToolEntry<SuitcaseChecklistUI> = {
  id: 'suitcase-checklist',
  icons: {
    bg: 'mdi:bag-checked',
    fg: 'mdi:format-list-checks',
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

export { SuitcaseChecklist, SuitcaseChecklistSEO, SuitcaseChecklistBibliography };

export const SUITCASE_CHECKLIST_TOOL: ToolDefinition = {
  entry: suitcaseChecklist,
  Component: SuitcaseChecklist,
  SEOComponent: SuitcaseChecklistSEO,
  BibliographyComponent: SuitcaseChecklistBibliography,
};
