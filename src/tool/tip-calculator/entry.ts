import type { TravelToolEntry } from '../../types';

export interface TipCountry {
  id: string;
  name: string;
  min: number;
  max: number;
  default: number;
  culture: string;
}

export interface TipCalculatorUI {
  [key: string]: unknown;
  title: string;
  badge: string;
  billLabel: string;
  countryLabel: string;
  tipLabel: string;
  splitLabel: string;
  summaryTip: string;
  summarySubtotal: string;
  summaryTotalPerson: string;
  protocolTitle: string;
  placeholderAmount: string;
  placeholderFilter: string;
  placeholderSelect: string;
  countries: TipCountry[];
}

export const tipCalculator: TravelToolEntry<TipCalculatorUI> = {
  id: 'tip-calculator',
  icons: {
    bg: 'mdi:cash-multiple',
    fg: 'mdi:earth',
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
