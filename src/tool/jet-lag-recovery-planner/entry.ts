import type { TravelToolEntry } from '../../types';

export interface JetLagRecoveryPlannerUI {
  [key: string]: unknown;
  title: string;
  intro: string;
  originLabel: string;
  destinationLabel: string;
  offsetHint: string;
  departureLabel: string;
  arrivalLabel: string;
  sleepLabel: string;
  wakeLabel: string;
  daysLabel: string;
  calculate: string;
  reset: string;
  visualSource: string;
  visualTarget: string;
  visualRail: string;
  resultHeading: string;
  resultIntro: string;
  eastLabel: string;
  westLabel: string;
  sameLabel: string;
  timeDifference: string;
  travelDuration: string;
  dailyShift: string;
  targetReached: string;
  targetPending: string;
  dayLabel: string;
  sleep: string;
  wake: string;
  breakfast: string;
  lunch: string;
  dinner: string;
  lightMorning: string;
  lightAfternoon: string;
  lightNone: string;
  daylightNote: string;
  safetyNote: string;
  offsetOptions: Record<string, string>;
  defaultDeparture: string;
  defaultArrival: string;
  timeFormatHint: string;
}

export const jetLagRecoveryPlanner: TravelToolEntry<JetLagRecoveryPlannerUI> = {
  id: 'jet-lag-recovery-planner',
  icons: { bg: 'mdi:weather-night', fg: 'mdi:airplane-clock' },
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

export type { ToolLocaleContent } from '../../types';
