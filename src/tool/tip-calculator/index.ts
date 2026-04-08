import type { TravelToolEntry, ToolDefinition } from '../../types';
import TipCalculator from './component.astro';
import TipCalculatorSEO from './seo.astro';
import TipCalculatorBibliography from './bibliography.astro';

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
    es: () => import('./i18n/es').then((m) => m.content),
    en: () => import('./i18n/en').then((m) => m.content),
    fr: () => import('./i18n/fr').then((m) => m.content),
  },
};

export { TipCalculator, TipCalculatorSEO, TipCalculatorBibliography };

export const TIP_CALCULATOR_TOOL: ToolDefinition = {
  entry: tipCalculator,
  Component: TipCalculator,
  SEOComponent: TipCalculatorSEO,
  BibliographyComponent: TipCalculatorBibliography,
};
