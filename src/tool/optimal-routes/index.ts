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
    es: () => import('./i18n/es').then((m) => m.content),
    en: () => import('./i18n/en').then((m) => m.content),
  },
};

export { OptimalRoutes, OptimalRoutesSEO, OptimalRoutesBibliography };

export const OPTIMAL_ROUTES_TOOL: ToolDefinition = {
  entry: optimalRoutes,
  Component: OptimalRoutes,
  SEOComponent: OptimalRoutesSEO,
  BibliographyComponent: OptimalRoutesBibliography,
};
