import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { SchengenCalculatorUI } from '../ui';
import { bibliographyEntries } from '../bibliography';

const slug = 'calculadora-schengen-90-180';
const title = 'Calculadora de Estancia Schengen 90/180';
const description =
  'Comprueba si tu viaje a Europa cumple la regla de visado 90/180 días. Calcula tus días disponibles, evita multas por sobreestadía y planifica estancias sin riesgo.';

const ui: SchengenCalculatorUI = {
  verdictSafeTitle: 'Viaje Legal y Seguro (Dentro del Límite)',
  verdictWarningTitle: 'Precaución: Cerca del Límite de 90 Días',
  verdictOverstayTitle: 'Sobreestadía Ilegal Detectada',
  daysRemainingSub: 'Días Restantes Disponibles',
  daysUsedSub: 'Días Consumidos en 180 Días',
  maxStaySub: 'Estancia Continua Máxima',
  fullResetSub: 'Fecha de Reseteo a 90 Días',
  plannerHeading: '1. Comprobar Fecha Objetivo',
  plannerEntryLabel: 'Fecha de Entrada o Vuelo a Evaluar',
  quickDatesLabel: 'Saltar a Fecha',
  presetToday: 'Hoy',
  presetPlus7: '+1 Semana',
  presetPlus14: '+2 Semanas',
  presetPlus30: '+1 Mes',
  tripsHeading: '2. Historial y Planes de Viaje a Europa',
  addTripBtn: '+ Añadir Viaje',
  emptyTripsMsg: 'No hay viajes añadidos. Introduce tus estancias pasadas o planificadas en el espacio Schengen.',
  colArrival: 'Entrada (Llegada)',
  colDeparture: 'Salida (Partida)',
  colDestination: 'País / Notas',
  colDays: 'Días',
  sampleBtn: 'Cargar Ejemplo Nómada',
  clearBtn: 'Borrar Todo',
  timelineTitle: 'Ventana Móvil de 180 Días',
  legendInSchengen: 'En Schengen',
  legendOutside: 'Fuera',
  legendOverstay: 'Sobreestadía',
  bannerSafe: 'El {date}, habrás consumido {used} ({rem} disponibles).',
  bannerWarning: 'El {date}, habrás consumido {used} (solo {rem} restantes).',
  bannerOverstay: 'Sobreestadía ilegal detectada desde el {date}. Tu itinerario supera el límite legal por {days}.',
  unitDays: 'días',
  notesPlaceholder: 'ej. Francia, España',
  sampleNotes1: 'Ruta por Italia (20 días)',
  sampleNotes2: 'Alemania y Austria (20 días)',
  sampleNotesDefault: 'Francia y España',
};

const seo: ToolLocaleContent<SchengenCalculatorUI>['seo'] = [
  {
    type: 'title',
    text: 'Cómo Funciona Realmente la Regla 90 180 en el Espacio Schengen',
    level: 2,
  },
  {
    type: 'summary',
    title: 'Principios Fundamentales del Sistema de Ventana Móvil Schengen',
    items: [
      'Los ciudadanos extracomunitarios pueden permanecer un máximo de 90 días dentro de cualquier período móvil de 180 días.',
      'La ventana de 180 días se desplaza hacia adelante con cada día que pasa, mirando siempre 179 días hacia atrás.',
      'Tanto el día de entrada en territorio europeo como el día de salida se contabilizan como días completos de presencia.',
      'Salir de la Unión Europea no resetea tu contador a 90 días salvo que permanezcas 90 días consecutivos fuera.',
    ],
  },
  {
    type: 'paragraph',
    html: 'El espacio Schengen aplica un límite estricto de <strong>90 días de estancia máxima en cualquier período de 180 días</strong> para ciudadanos de terceros países que viajan sin visado o con visado uniforme tipo C, regulado por el Artículo 6(1) del <em>Código de Fronteras Schengen (Reglamento UE 2016/399)</em>. A diferencia de las cuotas anuales fijas, la ventana de observación es dinámica. En cada día de tu estancia en Europa, las autoridades de control fronterizo computan el número total de jornadas pasadas dentro de los 29 estados miembros durante los 179 días anteriores más el día en curso.',
  },
  {
    type: 'title',
    text: 'Métricas Regulatorias y Estándares de Control Fronterizo',
    level: 2,
  },
  {
    type: 'stats',
    items: [
      {
        value: '90 Días',
        label: 'Límite Acumulado Máximo',
      },
      {
        value: '180 Días',
        label: 'Ventana Móvil de Inspección',
      },
      {
        value: 'Ambos Días',
        label: 'Cómputo Inclusivo de Frontera',
      },
      {
        value: '29 Países',
        label: 'Territorio Común Schengen',
      },
    ],
  },
  {
    type: 'title',
    text: 'Cuotas de Calendario Tradicionales vs Ventanas Móviles Dinámicas',
    level: 2,
  },
  {
    type: 'comparative',
    items: [
      {
        title: 'Error de la Cuota por Año Natural',
        description:
          'Muchos viajeros creen erróneamente que sus 90 días se restablecen el 1 de enero de cada año o que al salir unos días a un país vecino el contador vuelve a cero. Esta confusión genera miles de sobreestadías accidentales y multas en aeropuertos.',
      },
      {
        title: 'Funcionamiento Real de la Ventana Móvil',
        description:
          'Cada día vivido en Europa se registra en una línea temporal continua. Al avanzar el calendario, los días más antiguos van saliendo por el extremo posterior de la ventana de 180 días, liberando nuevas jornadas permitidas de forma progresiva.',
      },
    ],
  },
  {
    type: 'title',
    text: 'Perfiles de Viajero Habituales y Consecuencias Legales',
    level: 2,
  },
  {
    type: 'table',
    headers: ['Perfil de Viaje', 'Patrón de Estancia', 'Estado Legal', 'Recomendación Práctica'],
    rows: [
      [
        'Estancia Continua Única',
        'Entrada el 1 de junio, salida el 29 de agosto (90 días)',
        'Legal',
        'Debes abandonar el territorio en el día 90 exacto y permanecer 90 días seguidos fuera para renovar el cupo entero.',
      ],
      [
        'Viajero Frecuente Multi-Viaje',
        'Tres viajes independientes de 30 días con 30 días de descanso fuera',
        'Legal',
        'Cada entrada debe verificarse contra la ventana retrospectiva de 180 días para evitar solapamientos.',
      ],
      [
        'Nómada Digital Intermitente',
        'Alternar 60 días dentro de Schengen y 30 días fuera',
        'Riesgo Crítico de Overstay',
        'Un descanso de 30 días solo recupera 30 días de los viajes ocurridos hace 180 días, arriesgando denegación de entrada.',
      ],
      [
        'Reseteo Completo de 90 Días',
        'Ausencia ininterrumpida de 90 días fuera de Europa',
        'Cupo Restaurado',
        'Garantiza la recuperación íntegra de los 90 días permitidos al volver a entrar en cualquier frontera comunitaria.',
      ],
    ],
  },
  {
    type: 'title',
    text: 'Consejos Estratégicos para Evitar Infracciones en Frontera',
    level: 2,
  },
  {
    type: 'tip',
    title: 'Deja Siempre un Margen de Seguridad de 2 a 3 Días',
    html: 'Nunca compres tu billete de vuelta para el día 90 exacto. Una cancelación imprevista de vuelo, huelga de controladores o emergencia médica puede obligarte a salir el día 91, activando una sanción de sobreestadía en las bases de datos biométricas del Sistema de Entradas y Salidas (SES) europeo.',
  },
  {
    type: 'card',
    title: 'Guarda Pruebas de Estancia Fuera de la Zona Schengen',
    html: 'Conserva tarjetas de embarque, sellos de pasaporte y facturas de alojamiento de países europeos no pertenecientes al espacio Schengen (como Reino Unido, Irlanda, Chipre, Montenegro o Albania) para justificar documentalmente tu ausencia ante posibles auditorías.',
  },
  {
    type: 'title',
    text: 'Glosario de Términos de Control Fronterizo Europeo',
    level: 2,
  },
  {
    type: 'glossary',
    items: [
      {
        term: 'Overstay (Sobreestadía)',
        definition:
          'Permanecer en territorio Schengen más de 90 días en una ventana de 180 días, acarreando multas económicas, expulsión o prohibiciones de entrada de varios años.',
      },
      {
        term: 'EES / SES (Sistema de Entradas y Salidas)',
        definition:
          'El sistema digital automatizado de la UE que sustituye el sellado manual de pasaportes por registros biométricos de huellas y reconocimiento facial.',
      },
      {
        term: 'Nacional de Tercer País',
        definition:
          'Cualquier viajero que no posee la nacionalidad de un estado miembro de la UE o de un país de la Asociación Europea de Libre Comercio (EFTA).',
      },
    ],
  },
];

const faq: ToolLocaleContent<SchengenCalculatorUI>['faq'] = [
  {
    question: '¿Qué es exactamente la regla 90 180 en el espacio Schengen?',
    answer:
      'Es la normativa comunitaria que permite a ciudadanos no europeos viajar sin visado de larga duración por un máximo de 90 días dentro de cualquier período móvil de 180 días consecutivos.',
  },
  {
    question: '¿Se resetean los 90 días al salir de Europa?',
    answer:
      'No. Salir unos días o semanas a un país no Schengen no reinicia el contador. La ventana de 180 días es móvil y continua; el reseteo completo solo se obtiene tras permanecer 90 días seguidos fuera del territorio Schengen.',
  },
  {
    question: '¿Cuentan los días de llegada y salida como días completos?',
    answer:
      'Sí. Según el Artículo 6 del Código de Fronteras de la UE, tanto el día en que cruzas la aduana de entrada como el día en que sales se contabilizan como días enteros de estancia legal.',
  },
  {
    question: '¿Qué países forman parte del espacio Schengen para este cálculo?',
    answer:
      'Incluye 29 países: Alemania, Austria, Bélgica, Bulgaria, Croacia, Dinamarca, Eslovaquia, Eslovenia, España, Estonia, Finlandia, Francia, Grecia, Hungría, Islandia, Italia, Letonia, Liechtenstein, Lituania, Luxemburgo, Malta, Noruega, Países Bajos, Polonia, Portugal, República Checa, Rumanía, Suecia y Suiza. Reino Unido e Irlanda no forman parte de Schengen.',
  },
];

const howTo: ToolLocaleContent<SchengenCalculatorUI>['howTo'] = [
  {
    name: 'Selecciona tu Fecha de Evaluación',
    text: 'Indica la fecha de tu próximo vuelo o la jornada en la que deseas comprobar tu saldo de días legales disponibles.',
  },
  {
    name: 'Registra tus Viajes Pasados y Previstos',
    text: 'Introduce las fechas de entrada y salida de cada una de tus estancias en países Schengen durante los últimos meses.',
  },
  {
    name: 'Revisa tu Saldo y Margen de Seguridad',
    text: 'Comprueba el medidor de días restantes, la estancia continua máxima permitida y la fecha de reseteo total.',
  },
];

const faqSchema: WithContext<FAQPage> = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faq.map((item) => ({
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
  step: howTo.map((step) => ({
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
  applicationCategory: 'TravelApplication',
  operatingSystem: 'All',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  inLanguage: 'es',
};

export const content: ToolLocaleContent<SchengenCalculatorUI> = {
  slug,
  title,
  description,
  ui,
  seo,
  faq,
  howTo,
  howToTitle: 'Cómo calcular tu estancia Schengen',
  schemas: [faqSchema, howToSchema, appSchema],
  bibliography: bibliographyEntries,
};
