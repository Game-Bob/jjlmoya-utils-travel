import type { ToolLocaleContent } from '../../../types';
import type { OptimalRoutesUI } from '../index';

export const content: ToolLocaleContent<OptimalRoutesUI> = {
  slug: 'optimal-route-calculator',
  title: 'Optimal Route Calculator | Smart Stop Reordering',
  description: 'Optimize your delivery or travel routes for free. Our tool reorders your stops automatically to find the shortest and most efficient path.',
  ui: {
    title: "Optimal Routes",
    sidebar: {
      title: "Route Plan",
      addPoint: "Add stop (click map)",
      pointsList: "Your stops",
      emptyState: "Click on the map to add stops to your route.",
      optimizeBtn: "Optimize Sequence",
      clearBtn: "Clear All",
      stats: {
        distance: "Total distance:",
        time: "Est. time:"
      }
    },
    map: {
      placeholder: "Loading map...",
      attribution: "© OpenStreetMap contributors"
    },
    errors: {
      minPoints: "At least two points are needed to calculate a route.",
      calcError: "Error calculating the optimal route. Please try again."
    },
    labels: {
      origin: "Start",
      destination: "End",
      stop: "Stop",
      loading: "Calculating..."
    }
  },
  seo: [],
  faq: [],
  howTo: [],
  bibliography: [],
  schemas: []
};
