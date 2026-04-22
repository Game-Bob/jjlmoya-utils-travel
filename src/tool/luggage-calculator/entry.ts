import type { TravelToolEntry, ToolLocaleContent } from '../../types';

export interface Airline {
  name: string;
  personal: string;
  personalWeight: string;
  cabin: string;
  cabinWeight: string;
  icon: string;
}

export interface LuggageCalculatorUI {
  [key: string]: unknown;
  title: string;
  searchLabel: string;
  searchPlaceholder: string;
  personalItemTitle: string;
  cabinBagTitle: string;
  weightLabel: string;
  noResults: string;
  modalNoteTitle: string;
  modalNoteText: string;
  personalItemDetail: string;
  cabinBagDetail: string;
  airlines: Airline[];
}

export type LuggageCalculatorLocaleContent = ToolLocaleContent<LuggageCalculatorUI>;

export const luggageCalculator: TravelToolEntry<LuggageCalculatorUI> = {
  id: 'luggage-calculator',
  icons: {
    bg: 'mdi:bag-suitcase',
    fg: 'mdi:airplane',
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
