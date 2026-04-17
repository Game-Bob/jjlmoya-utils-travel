import type { TravelToolEntry, ToolDefinition } from '../../types';
import OptimalRoutes from './component.astro';
import OptimalRoutesSEO from './seo.astro';
import OptimalRoutesBibliography from './bibliography.astro';

export interface RoutePoint {
  id: number;
  lat: number;
  lng: number;
  name: string;
  address?: string;
}

export interface OptimalRoutesUI {
  title: string;
  sidebar: {
    title: string;
    addPoint: string;
    pointsList: string;
    emptyState: string;
    optimizeBtn: string;
    clearBtn: string;
    stats: {
      distance: string;
      time: string;
    };
  };
  map: {
    placeholder: string;
    attribution: string;
  };
  errors: {
    minPoints: string;
    calcError: string;
  };
  labels: {
    origin: string;
    destination: string;
    stop: string;
    loading: string;
  }
}

export const optimalRoutes: TravelToolEntry<OptimalRoutesUI> = {
  id: 'optimal-routes',
  icons: {
    bg: 'mdi:map-marker-path',
    fg: 'mdi:navigation-variant',
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

export { OptimalRoutes, OptimalRoutesSEO, OptimalRoutesBibliography };

export const OPTIMAL_ROUTES_TOOL: ToolDefinition = {
  entry: optimalRoutes,
  Component: OptimalRoutes,
  SEOComponent: OptimalRoutesSEO,
  BibliographyComponent: OptimalRoutesBibliography,
};
