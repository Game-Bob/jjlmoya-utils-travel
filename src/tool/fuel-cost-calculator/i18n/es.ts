import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { FuelCostCalculatorUI } from '../ui';
import { bibliographyEntries } from '../bibliography';

const slug = 'calculadora-coste-combustible-viaje';
const title = "Calculadora de Coste de Combustible para Viajes";
const description = "Estima el gasto de combustible de tu viaje según distancia, consumo del vehículo, precio manual del surtidor, pasajeros y ruta de ida o vuelta.";

const ui: FuelCostCalculatorUI = {
  "metricLabel": "Métrico",
  "imperialLabel": "Imperial",
  "routeHeading": "Ajusta tu ruta",
  "distanceLabel": "Distancia de ida",
  "distanceHint": "¿A qué distancia está tu destino?",
  "consumptionLabel": "Consumo del vehículo",
  "consumptionHint": "Introduce el dato de tu vehículo",
  "priceLabel": "Precio del combustible",
  "priceHint": "Introduce el precio actual del surtidor",
  "passengersLabel": "Pasajeros",
  "roundTripLabel": "Ida y vuelta",
  "currencyLabel": "Moneda",
  "presetsLabel": "Rutas rápidas",
  "presetCommute": "Trayecto diario",
  "presetWeekend": "Escapada de fin de semana",
  "presetRoadTrip": "Gran viaje",
  "resultHeading": "Previsión de combustible",
  "totalDistanceLabel": "Distancia total",
  "fuelUsedLabel": "Combustible necesario",
  "totalCostLabel": "Coste total de combustible",
  "perPersonLabel": "Cada viajero paga",
  "routeStatement": "{distance} {unit} de ida y vuelta, compartido entre {passengers}",
  "routeOneWayStatement": "{distance} {unit} solo ida, compartido entre {passengers}",
  "statusLight": "Gasto ligero",
  "statusMedium": "Buen viaje para compartir",
  "statusHigh": "Gran trayecto",
  "sampleButton": "Cargar ejemplo",
  "resetButton": "Restablecer",
  "litersUnit": "L",
  "gallonsUnit": "gal",
  "distanceMetricUnit": "km",
  "distanceImperialUnit": "mi",
  "consumptionMetricUnit": "L/100 km",
  "consumptionImperialUnit": "mpg",
  "priceMetricUnit": "por litro",
  "priceImperialUnit": "por galón",
  "currencyOptions": [
    {
      "code": "EUR",
      "symbol": "€"
    },
    {
      "code": "USD",
      "symbol": "$"
    },
    {
      "code": "GBP",
      "symbol": "£"
    },
    {
      "code": "JPY",
      "symbol": "¥"
    }
  ]
};

const seo: ToolLocaleContent<FuelCostCalculatorUI>['seo'] = [
  {
    "type": "title",
    "text": "Cómo estimar el presupuesto de gasolina o diésel antes de salir",
    "level": 2
  },
  {
    "type": "paragraph",
    "html": "Para calcular el presupuesto exacto de combustible se necesitan cuatro datos fundamentales: la distancia de ida, el consumo medio de tu vehículo, el precio actual del surtidor y el número de viajeros que comparten gastos. Esta calculadora multiplica automáticamente el trayecto si seleccionas ida y vuelta, calcula los litros necesarios y divide el importe entre todos los pasajeros."
  },
  {
    "type": "title",
    "text": "Fórmula de cálculo de gasto de combustible",
    "level": 2
  },
  {
    "type": "table",
    "headers": [
      "Paso",
      "Cálculo aplicado",
      "Información que proporciona"
    ],
    "rows": [
      [
        "Distancia total",
        "Distancia de ida x 2 en rutas de ida y vuelta",
        "Recorrido real en kilómetros o millas"
      ],
      [
        "Combustible consumido",
        "Distancia total x Consumo medio / 100",
        "Litros totales requeridos para el trayecto"
      ],
      [
        "Coste total",
        "Litros consumidos x Precio del surtidor",
        "Gasto estimado en combustible"
      ],
      [
        "Coste por persona",
        "Coste total / Número de pasajeros",
        "Reparto equitativo entre el grupo"
      ]
    ]
  },
  {
    "type": "tip",
    "title": "Introduce precios reales del surtidor",
    "html": "El precio del combustible cambia según la estación de servicio, el país, el tipo de carburante y la fecha. Introduce el importe exacto que esperas pagar y utiliza el resultado como una estimación de planificación."
  },
  {
    "type": "title",
    "text": "Unidades métricas e imperiales",
    "level": 2
  },
  {
    "type": "paragraph",
    "html": "El modo métrico utiliza kilómetros y litros por cada 100 kilómetros, mientras que el modo imperial utiliza millas y millas por galón. Cambiar entre sistemas no altera el coste final estimado del viaje."
  },
  {
    "type": "list",
    "items": [
      "Añade un pequeño margen extra para desvíos, atascos y búsqueda de aparcamiento.",
      "Utiliza el dato real de tu vehículo en lugar de las cifras teóricas de los catálogos.",
      "Para viajes largos con varios repostajes, calcula cada etapa por separado."
    ]
  }
];

const faq = [
  {
    "question": "¿Cómo se calcula el coste de combustible para un viaje?",
    "answer": "Multiplica la distancia total del trayecto por el consumo medio de tu coche, divide entre 100 si usas litros por 100 km y multiplica por el precio por litro del surtidor. Si compartes el viaje, divide el resultado entre el número de pasajeros."
  },
  {
    "question": "¿La calculadora contempla el trayecto de ida y vuelta?",
    "answer": "Sí. Activa la casilla de ida y vuelta y la calculadora duplicará la distancia antes de obtener los litros necesarios y el gasto total."
  },
  {
    "question": "¿Utiliza precios de gasolina en tiempo real?",
    "answer": "No. El precio se introduce manualmente para mantener una estimación transparente y adaptable a cualquier gasolinera o país."
  },
  {
    "question": "¿Puedo calcular en millas y galones?",
    "answer": "Sí. Cambia al sistema Imperial para introducir millas y millas por galón (mpg). El sistema realiza la conversión manteniendo la equivalencia del viaje."
  }
];

const howTo = [
  {
    "name": "Selecciona el sistema de unidades",
    "text": "Elige Métrico para kilómetros y litros/100km o Imperial para millas y mpg."
  },
  {
    "name": "Introduce los datos de tu ruta y coche",
    "text": "Indica la distancia de ida, el consumo del vehículo, el precio del surtidor y el número de viajeros."
  },
  {
    "name": "Revisa el importe repartido",
    "text": "Activa ida y vuelta si corresponde, elige la moneda y consulta el gasto total y por persona."
  }
];

const faqSchema: WithContext<FAQPage> = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faq.map((item) => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } })),
};

const howToSchema: WithContext<HowTo> = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: title,
  description,
  step: howTo.map((step) => ({ '@type': 'HowToStep', name: step.name, text: step.text })),
};

const appSchema: WithContext<SoftwareApplication> = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: title,
  description,
  applicationCategory: 'TravelApplication',
  operatingSystem: 'All',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  inLanguage: 'es',
};

export const content: ToolLocaleContent<FuelCostCalculatorUI> = {
  slug,
  title,
  description,
  ui,
  seo,
  faq,
  howTo,
  howToTitle: "Cómo calcular el coste de combustible de tu viaje",
  schemas: [faqSchema, howToSchema, appSchema],
  bibliography: bibliographyEntries,
};
