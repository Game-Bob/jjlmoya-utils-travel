import type { ToolLocaleContent } from '../../../types';
import type { OptimalRoutesUI } from '../index';

export const content: ToolLocaleContent<OptimalRoutesUI> = {
  slug: 'calculadora-rutas-optimas',
  title: 'Calculadora de Rutas Óptimas Gratis | Reordena Paradas Inteligente',
  description: 'Optimiza tus rutas de reparto o viaje gratis. Nuestra herramienta reordena tus paradas automáticamente para encontrar el camino más corto y eficiente.',
  ui: {
    title: "Rutas Óptimas",
    sidebar: {
      title: "Plan de Ruta",
      addPoint: "Añadir parada (clic en mapa)",
      pointsList: "Tus paradas",
      emptyState: "Haz clic en el mapa para añadir paradas a tu ruta.",
      optimizeBtn: "Optimizar Secuencia",
      clearBtn: "Borrar Todo",
      stats: {
        distance: "Distancia total:",
        time: "Tiempo estimado:"
      }
    },
    map: {
      placeholder: "Mapa cargando...",
      attribution: "© OpenStreetMap contributors"
    },
    errors: {
      minPoints: "Se necesitan al menos dos puntos para calcular una ruta.",
      calcError: "Error al calcular la ruta óptima. Inténtalo de nuevo."
    },
    labels: {
      origin: "Inicio",
      destination: "Fin",
      stop: "Parada",
      loading: "Calculando..."
    }
  },
  seo: [
    { type: "title", text: "Optimización de Rutas Inteligente", level: 2 },
    { type: "paragraph", html: "Utiliza algoritmos avanzados para resolver el Problema del Viajante (TSP) en segundos. Ideal para logística, repartos o simplemente para ahorrar combustible en tus vacaciones." }
  ],
  faq: [
    { question: "¿Cómo funciona la optimización?", answer: "Analizamos todas tus paradas y determinamos el orden secuencial que minimiza la distancia total recorrida." },
    { question: "¿Puedo usarlo en el móvil?", answer: "Sí, la herramienta es totalmente responsiva y permite abrir la ruta resultante directamente en Google Maps." }
  ],
  howTo: [
    { name: "Añadir", text: "Haz clic en el mapa para fijar tu posición de inicio y las paradas intermedias." },
    { name: "Optimizar", text: "Pulsa el botón de optimizar para que el sistema reordene las paradas de la forma más eficiente." },
    { name: "Navegar", text: "Usa el enlace generado para navegar siguiendo la ruta sugerida." }
  ],
  bibliography: [],
  schemas: []
};
