import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { TipCalculatorUI } from '../index';

const slug = 'calculadora-propinas-internacional';
const title = 'Calculadora de Propinas Internacional';
const description = 'Viaja con confianza sabiendo exactamente cuánto dejar de propina. Guía actualizada de etiqueta y porcentajes recomendados para restaurantes, taxis y hoteles en todo el mundo.';

const ui: TipCalculatorUI = {
  title: "Calculadora de Propinas",
  badge: "International Tip Tool",
  billLabel: "Importe de la Factura",
  countryLabel: "País / Costumbre Local",
  tipLabel: "Porcentaje Propina",
  splitLabel: "Dividir Cuenta",
  summaryTip: "Propina Total",
  summarySubtotal: "Subtotal",
  summaryTotalPerson: "Total por Persona",
  protocolTitle: "Protocolo",
  placeholderAmount: "0.00",
  placeholderFilter: "Buscar país...",
  placeholderSelect: "Selecciona un país",
  countries: [
    {
      id: "usa",
      name: "EE.UU. y Canadá",
      min: 18,
      max: 25,
      default: 20,
      culture: "La propina es fundamental para el salario de los camareros. Se espera entre un 18% y 25%. No dejarla se considera una falta grave en la cultura norteamericana.",
    },
    {
      id: "esp",
      name: "España",
      min: 0,
      max: 10,
      default: 5,
      culture: "Opcional. Se suele redondear el cambio o dejar un 5-10% en cenas si el servicio ha sido de calidad.",
    },
    {
      id: "jpn",
      name: "Japón",
      min: 0,
      max: 0,
      default: 0,
      culture: "No se deja propina. Se considera un insulto a la profesionalidad. Si dejas dinero, es probable que te sigan para devolvértelo.",
    },
    {
      id: "ita",
      name: "Italia",
      min: 0,
      max: 10,
      default: 0,
      culture: "El 'coperto' es un cargo por el servicio de mesa, pan y mantel, no es la propina en sí. Dejar un extra del 5-10% es un gesto apreciado pero totalmente opcional.",
    },
    {
      id: "fra",
      name: "Francia",
      min: 0,
      max: 10,
      default: 5,
      culture: "El servicio está incluido por ley. Se deja el 'pourboire' (pequeño extra) solo por un trato excepcional.",
    },
    {
      id: "gbr",
      name: "Reino Unido",
      min: 0,
      max: 12.5,
      default: 10,
      culture: "A menudo se añade un 12.5% opcional en la factura. Si no está, un 10% es lo estándar en restaurantes.",
    },
    {
      id: "mex",
      name: "México",
      min: 10,
      max: 15,
      default: 12,
      culture: "Se espera 'la propina' del 10 al 15%. Es una parte vital de la economía de los trabajadores del sector.",
    },
    {
      id: "arg",
      name: "Argentina",
      min: 0,
      max: 10,
      default: 10,
      culture: "El estándar es un 10%. Casi siempre se deja si el servicio ha sido normal o bueno.",
    },
    {
      id: "bra",
      name: "Brasil",
      min: 0,
      max: 10,
      default: 10,
      culture: "Normalmente se incluye un cargo del 10% en la cuenta como 'Serviço'. Es opcional pero la mayoría lo paga.",
    },
    {
      id: "deu",
      name: "Alemania",
      min: 5,
      max: 10,
      default: 7,
      culture: "Se suele redondear o añadir un 5-10%. Se le dice al camarero el total incluyendo propina al pagar.",
    },
    {
      id: "tur",
      name: "Turquía",
      min: 5,
      max: 10,
      default: 10,
      culture: "En sitios turísticos se espera un 10% en efectivo. No se suele poder añadir a la tarjeta.",
    },
    {
      id: "aus",
      name: "Australia",
      min: 0,
      max: 10,
      default: 0,
      culture: "No es esperada. Los salarios son altos. En cenas de lujo se puede dejar un 10%.",
    },
    {
      id: "chn",
      name: "China",
      min: 0,
      max: 0,
      default: 0,
      culture: "Históricamente no se deja propina y en muchos sitios está prohibido o se considera raro.",
    },
    {
      id: "prt",
      name: "Portugal",
      min: 0,
      max: 10,
      default: 5,
      culture: "Se acostumbra dejar el cambio o redondear. En zonas turísticas un 5-10% es común.",
    },
    {
      id: "grc",
      name: "Grecia",
      min: 0,
      max: 10,
      default: 5,
      culture: "Suele bastar con redondear la cuenta. Un 5-10% extra es muy apreciado pero no obligatorio.",
    },
  ]
};

const seo: ToolLocaleContent<TipCalculatorUI>['seo'] = [
  {
    type: "title",
    text: "Guía Internacional de Propinas: Etiqueta y Porcentajes 2026",
    level: 2,
  },
  {
    type: "summary",
    title: "Aprende a dar propina como un local en cualquier parte del mundo",
    items: [
      "Guía completa sobre el porcentaje de propina esperado en los principales destinos turísticos.",
      "Cómo calcular la propina de forma rápida partiendo del subtotal o del total con impuestos.",
      "Diferencia entre cargos por servicio, cubierto (coperto) y propina voluntaria.",
      "Reglas de etiqueta para situaciones especiales: taxis, hoteles y guías turísticos.",
    ],
  },
  {
    type: "paragraph",
    html: "Uno de los momentos más estresantes de cualquier viaje internacional ocurre cuando llega la cuenta a la mesa. ¿Debo dejar dinero extra? ¿Cuánto es lo normal? ¿Se ofenderán si dejo poco o si dejo demasiado? Nuestra <strong>calculadora de propina internacional</strong> está diseñada para eliminar esa incertidumbre.",
  }
];

const faq: ToolLocaleContent<TipCalculatorUI>['faq'] = [
  {
    question: "¿Es obligatorio dejar propina en Estados Unidos?",
    answer: "Legalmente no, pero socialmente es obligatorio. Los camareros dependen de las propinas para alcanzar el salario mínimo. Lo normal es dejar entre el 18% y el 25%.",
  },
  {
    question: "¿En qué países es ofensivo dejar propina?",
    answer: "Principalmente en Japón y Corea del Sur. Se considera que el buen servicio es parte del deber y no requiere compensación extra.",
  },
  {
    question: "¿Debo dar propina si el servicio fue malo?",
    answer: "En países donde es opcional (Europa, Australia), lo más correcto es no dejar nada para señalar tu disconformidad.",
  },
  {
    question: "¿La propina se calcula antes o después de impuestos?",
    answer: "En Norteamérica se suele calcular sobre el subtotal (antes de impuestos). En Europa y Latinoamérica, se calcula siempre sobre el total de la factura.",
  },
];

const bibliography: ToolLocaleContent<TipCalculatorUI>['bibliography'] = [
  {
    name: "Condé Nast Traveler: Tipping Etiquette Guide",
    url: "https://www.cntraveler.com/stories/2008-11-11/etiquette-101-tipping-guide",
  },
  {
    name: "Lonely Planet: Tipping and Etiquette in Europe",
    url: "https://www.lonelyplanet.com/articles/tipping-customs-europe",
  },
  {
    name: "Western Union: Global Tipping Guide",
    url: "https://www.westernunion.com/blog/en/global-tipping-guide/",
  },
];

const howTo: ToolLocaleContent<TipCalculatorUI>['howTo'] = [
  {
    name: "Introduce el total de la cuenta",
    text: "Escribe el importe total que aparece en tu factura antes de aplicar la propina.",
  },
  {
    name: "Selecciona el país",
    text: "Elige tu destino para cargar automáticamente la recomendación cultural y el porcentaje estándar.",
  },
  {
    name: "Ajusta y divide",
    text: "Si sois varios, indica el número de personas para saber cuánto debe pagar cada uno incluyendo la propina.",
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
  description: description,
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
  description: description,
  applicationCategory: 'FinanceApplication',
  operatingSystem: 'All',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  inLanguage: 'es',
};

export const content: ToolLocaleContent<TipCalculatorUI> = {
  slug,
  title,
  description,
  ui,
  seo,
  faq,
  faqTitle: "Preguntas Frecuentes",
  bibliography,
  bibliographyTitle: "Fuentes y Referencias",
  howTo,
  howToTitle: "Cómo usar la calculadora",
  schemas: [faqSchema, howToSchema, appSchema],
};
