import type { TravelToolEntry, ToolDefinition, ToolLocaleContent } from '../../types';
import LuggageCalculator from './component.astro';
import LuggageCalculatorSEO from './seo.astro';
import LuggageCalculatorBibliography from './bibliography.astro';

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
    es: () => import('./i18n/es').then((m) => m.content),
    en: () => import('./i18n/en').then((m) => m.content),
    fr: () => import('./i18n/fr').then((m) => m.content),
  },
};

export { LuggageCalculator, LuggageCalculatorSEO, LuggageCalculatorBibliography };

export const LUGGAGE_CALCULATOR_TOOL: ToolDefinition = {
  entry: luggageCalculator,
  Component: LuggageCalculator,
  SEOComponent: LuggageCalculatorSEO,
  BibliographyComponent: LuggageCalculatorBibliography,
};
