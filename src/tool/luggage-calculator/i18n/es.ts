import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { LuggageCalculatorUI, LuggageCalculatorLocaleContent } from '../index';

const slug = 'calculadora-equipaje-aerolineas';
const title = 'Calculadora de Equipaje de Mano: Medidas por Aerolínea 2026';
const description = 'Consulta las medidas y el peso permitido para el equipaje de mano y el bulto personal de las principales aerolíneas. Evita sorpresas y recargos de última hora en el aeropuerto.';

const ui: LuggageCalculatorUI = {
  searchLabel: 'Busca tu aerolínea',
  searchPlaceholder: 'Busca tu aerolínea...',
  personalItemTitle: 'Bulto Personal',
  cabinBagTitle: 'Maleta Cabina',
  weightLabel: 'Peso',
  noResults: 'No hemos encontrado esa aerolínea. Prueba con el buscador global.',
  modalNoteTitle: 'Nota importante:',
  modalNoteText: 'Algunas aerolíneas de bajo coste solo permiten la maleta de cabina bajo el asiento si no se ha contratado el servicio de "Prioridad" o maleta adicional.',
  personalItemDetail: 'Bulto Debajo Asiento',
  cabinBagDetail: 'Maleta de Mano',
  airlines: [
    {
      name: "Ryanair",
      personal: "40 x 20 x 25 cm",
      personalWeight: "Sin límite",
      cabin: "55 x 40 x 20 cm",
      cabinWeight: "10 kg",
      icon: "mdi:airplane",
    },
    {
      name: "Vueling",
      personal: "40 x 20 x 30 cm",
      personalWeight: "Sin límite",
      cabin: "55 x 40 x 20 cm",
      cabinWeight: "10 kg",
      icon: "mdi:airplane",
    },
    {
      name: "Iberia",
      personal: "40 x 30 x 15 cm",
      personalWeight: "Sin límite",
      cabin: "56 x 40 x 25 cm",
      cabinWeight: "10 kg",
      icon: "mdi:airplane",
    },
    {
      name: "EasyJet",
      personal: "45 x 36 x 20 cm",
      personalWeight: "15 kg",
      cabin: "56 x 45 x 25 cm",
      cabinWeight: "15 kg",
      icon: "mdi:airplane",
    },
    {
      name: "Air Europa",
      personal: "40 x 30 x 20 cm",
      personalWeight: "Sin límite",
      cabin: "55 x 35 x 25 cm",
      cabinWeight: "10 kg",
      icon: "mdi:airplane",
    },
    {
      name: "Lufthansa",
      personal: "40 x 30 x 10 cm",
      personalWeight: "Sin límite",
      cabin: "55 x 40 x 23 cm",
      cabinWeight: "8 kg",
      icon: "mdi:airplane",
    },
    {
      name: "British Airways",
      personal: "40 x 30 x 15 cm",
      personalWeight: "23 kg",
      cabin: "56 x 45 x 25 cm",
      cabinWeight: "23 kg",
      icon: "mdi:airplane",
    },
    {
      name: "Norwegian",
      personal: "30 x 20 x 38 cm",
      personalWeight: "10 kg (total)",
      cabin: "55 x 40 x 23 cm",
      cabinWeight: "10 kg (total)",
      icon: "mdi:airplane",
    },
    {
      name: "Emirates",
      personal: "Incluido en cabina",
      personalWeight: "-",
      cabin: "55 x 38 x 20 cm",
      cabinWeight: "7 kg",
      icon: "mdi:airplane",
    },
    {
      name: "Qatar Airways",
      personal: "Incluido en cabina",
      personalWeight: "-",
      cabin: "50 x 37 x 25 cm",
      cabinWeight: "7 kg",
      icon: "mdi:airplane",
    },
    {
      name: "TAP Air Portugal",
      personal: "40 x 30 x 15 cm",
      personalWeight: "2 kg",
      cabin: "55 x 40 x 20 cm",
      cabinWeight: "8 kg",
      icon: "mdi:airplane",
    },
  ],
};

const faq: LuggageCalculatorLocaleContent['faq'] = [
  {
    question: "¿Qué pasa si mi maleta excede las medidas por 1 o 2 cm?",
    answer: "Depende de la aerolínea y del personal de puerta. Las aerolíneas low-cost suelen usar un cajón medidor metálico; si la maleta no entra libremente (incluyendo ruedas), te cobrarán el recargo de facturación en puerta, que suele oscilar entre 45€ y 65€.",
  },
  {
    question: "¿Puedo llevar una mochila y una maleta de mano gratis?",
    answer: "En aerolíneas como Iberia, British Airways o Lufthansa, sí. En aerolíneas como Ryanair o Vueling (tarifa básica), solo puedes llevar un bulto pequeño que quepa bajo el asiento. Para llevar la maleta de mano en cabina deberás pagar el extra de 'Prioridad'.",
  },
  {
    question: "¿Las ruedas cuentan en las medidas del equipaje?",
    answer: "Sí, siempre. Las medidas oficiales de las aerolíneas (ej. 55x40x20) son dimensiones totales. Si tu maleta mide 55cm de cuerpo pero las ruedas añaden 3cm más, legalmente estás excediendo el límite.",
  },
  {
    question: "¿Hay límite de peso para el bulto personal bajo el asiento?",
    answer: "La mayoría de aerolíneas no suelen pesar el bulto personal pequeño, siempre que mantenga unas dimensiones razonables y quepa bajo el asiento. Sin embargo, algunas como EasyJet establecen un límite de 15kg para todo el equipaje de mano combinado.",
  },
];

const howTo: LuggageCalculatorLocaleContent['howTo'] = [
  {
    name: "Busca tu aerolínea",
    text: "Escribe el nombre de la compañía aérea con la que vuelas en nuestro buscador para ver sus límites específicos.",
  },
  {
    name: "Mide tu maleta en casa",
    text: "Usa una cinta métrica para medir el alto (incluyendo ruedas), ancho y profundidad de tu equipaje.",
  },
  {
    name: "Comprueba el peso",
    text: "Utiliza una báscula de maletas o una doméstica para asegurar que no superas los kilos permitidos (habitualmente 8kg o 10kg).",
  },
];

const bibliography: LuggageCalculatorLocaleContent['bibliography'] = [
  {
    name: "AENA: Equipaje de Mano y Facturado",
    url: "https://www.aena.es/es/pasajeros/equipajes/equipaje-mano.html",
  },
  {
    name: "EASA: Air Passenger Rights & Safety Rules",
    url: "https://www.easa.europa.eu/en/light/topics/passenger-rights",
  },
  {
    name: "IATA: Passenger Baggage Information",
    url: "https://www.iata.org/en/programs/ops-infra/baggage/check-bag-rules/",
  },
];

const seo: LuggageCalculatorLocaleContent['seo'] = [
    {
        type: "title",
        text: "Guía Completa de Dimensiones de Equipaje de Mano 2026",
        level: 2,
    },
    {
        type: "summary",
        title: "Todo lo que necesitas saber antes de volar",
        items: [
            "Guía actualizada de dimensiones para bulto personal y maleta de cabina.",
            "Comparativa de pesos permitidos por aerolínea (de 7kg a 23kg).",
            "Diferencia entre artículo personal, maleta de mano y equipaje facturado.",
            "Consejos para evitar recargos en puerta de embarque.",
        ],
    },
    {
        type: "paragraph",
        html: "Viajar hoy en día se ha convertido en un rompecabezas logístico. Lo que antes era un estándar universal (la maleta de 10kg), ahora es una jungla de medidas que varían por pocos centímetros entre aerolíneas. Nuestra <strong>calculadora de equipaje</strong> nace para dar respuesta a la pregunta más repetida en los aeropuertos: \"¿Me cobrarán por esta maleta?\".",
    },
    {
        type: "title",
        text: "El Bulto Personal vs. Maleta de Cabina",
        level: 3,
    },
    {
        type: "paragraph",
        html: "Es el error más común entre los viajeros ocasionales. El <strong>artículo personal</strong> (o personal item) es generalmente una mochila pequeña, un maletín de portátil o un bolso que <strong>debe caber debajo del asiento delantero</strong>. Sus medidas estándar suelen rondar los 40x20x25 cm.",
    },
    {
        type: "comparative",
        items: [
            {
                title: "Aerolíneas Low Cost",
                description: "Reglas estrictas, suelen permitir solo un bulto pequeño debajo del asiento de forma gratuita.",
                icon: "mdi:tag-outline",
                points: [
                    "Ryanair/Vueling: Maleta cabina es de pago",
                    "Dimensiones vigiladas con cajón medidor",
                    "Pesos máximos entre 8kg y 10kg",
                    "Recargos altos si excedes el tamaño",
                ],
            },
            {
                title: "Líneas Bandera / Tradicionales",
                description: "Políticas más flexibles, suelen incluir maleta de cabina en casi todas las tarifas.",
                icon: "mdi:airplane-takeoff",
                highlight: true,
                points: [
                    "Iberia/Lufthansa: Maleta de mano incluida",
                    "Mayores límites de peso (hasta 23kg en BA)",
                    "Combinación de bulto personal + maleta",
                    "Servicio de facturación gratuito en puerta si el vuelo va lleno",
                ],
            },
        ],
    },
    {
        type: "title",
        text: "Medidas por Aerolínea: Tabla de Referencia",
        level: 3,
    },
    {
        type: "paragraph",
        html: "Aunque puedes usar nuestro buscador interactivo, aquí tienes un resumen de las políticas más comunes para una planificación rápida:",
    },
    {
        type: "table",
        headers: ["Aerolínea", "Bulto Personal (Debajo asiento)", "Maleta Cabina (Mano)"],
        rows: [
            ["<strong>Ryanair</strong>", "40 x 20 x 25 cm", "55 x 40 x 20 cm (Pago)"],
            ["<strong>Vueling</strong>", "40 x 20 x 30 cm", "55 x 40 x 20 cm (Pago)"],
            ["<strong>Iberia</strong>", "40 x 30 x 15 cm", "56 x 40 x 25 cm (Incluida)"],
            ["<strong>EasyJet</strong>", "45 x 36 x 20 cm", "56 x 45 x 25 cm (Pago/Plus)"],
            ["<strong>Lufthansa</strong>", "40 x 30 x 10 cm", "55 x 40 x 23 cm (Incluida)"],
        ],
    },
    {
        type: "tip",
        title: "El Truco del Peso",
        html: "<p>Muchas aerolíneas como Emirates o Qatar son muy estrictas con el peso (7kg) pero más relajadas con las medidas. Otras como British Airways permiten hasta 23kg siempre que puedas levantar tú mismo la maleta. ¡Pesala siempre en casa!</p>",
    },
    {
        type: "title",
        text: "Por qué fallan las medidas estándar",
        level: 3,
    },
    {
        type: "paragraph",
        html: "Muchos viajeros compran maletas con la etiqueta \"Cabin Size\" y se llevan una sorpresa desagradable. El motivo es que los fabricantes suelen indicar la medida del cuerpo de la maleta, pero las aerolíneas miden el conjunto total: <strong>ruedas + asa + bolsillos exteriores</strong>.",
    },
    {
        type: "title",
        text: "Consejos de Experto para Empacar",
        level: 3,
    },
    {
        type: "list",
        icon: "mdi:check-decagram",
        items: [
            "<strong>Diferencia entre 'Personal Item' y 'Carry-on':</strong> El artículo personal debe caber debajo del asiento delantero. La maleta de mano va en los compartimentos superiores.",
            "<strong>El factor de las ruedas:</strong> Las medidas que indicamos incluyen ruedas y asas. Una maleta de 55cm con ruedas de 3cm sobresaldrá del medidor oficial.",
            "<strong>Compresión y Flexibilidad:</strong> Las mochilas blandas son preferibles a las maletas rígidas si vas al límite, ya que se pueden comprimir ligeramente en el medidor.",
            "<strong>Tarifas combinadas:</strong> A veces sale más barato pagar una tarifa 'Plus' que añadir la maleta de cabina por separado después de la compra.",
        ],
    },
    {
        type: "title",
        text: "Reglas Especiales y Objetos Prohibidos",
        level: 3,
    },
    {
        type: "paragraph",
        html: "No todo es centímetro y kilos. El equipaje de mano está sujeto a normativas de seguridad estrictas (normativa EASA). Recuerda la regla de los líquidos: recipientes de máximo 100ml guardados en una bolsa transparente de 1 litro de capacidad total.",
    },
    {
        type: "table",
        headers: ["Objeto", "¿Permitido?"],
        rows: [
            ["Baterías externas (Powerbanks)", "Sí (Solo en mano)"],
            ["Líquidos > 100ml", "No permitido"],
            ["Tijeras pequeñas (<6cm)", "Generalmente sí"],
            ["Herramientas puntiagudas", "No permitido"],
        ],
    },
    {
        type: "tip",
        title: "Aviso de seguridad",
        html: "<p>Las baterías de litio están prohibidas en la bodega del avión por riesgo de incendio. Siempre deben viajar en tu equipaje de mano.</p>",
    },
    {
        type: "title",
        text: "Conclusión: Viaja sin Estrés",
        level: 3,
    },
    {
        type: "paragraph",
        html: "Comprobar las medidas de tu maleta antes de salir hacia el aeropuerto te ahorrará no solo dinero (los cargos en puerta suelen superar los 50€), sino también el estrés de empezar tus vacaciones con una discusión en el mostrador. ¡Usa nuestra calculadora y vuela tranquilo!",
    },
];

const faqSchema: WithContext<FAQPage> = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faq.map((item: any) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: { '@type': 'Answer', text: item.answer },
  })),
};

const howToSchema: WithContext<HowTo> = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: title,
  description,
  step: howTo.map((step: any) => ({
    '@type': 'HowToStep',
    name: step.name,
    text: step.text,
  })),
};

const appSchema: WithContext<SoftwareApplication> = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: title,
  description,
  applicationCategory: 'UtilitiesApplication',
  operatingSystem: 'Web',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  inLanguage: 'es',
};

export const content: LuggageCalculatorLocaleContent = {
  slug,
  title,
  description,
  ui,
  seo,
  faq,
  bibliography,
  howTo,
  schemas: [faqSchema, howToSchema, appSchema],
};
