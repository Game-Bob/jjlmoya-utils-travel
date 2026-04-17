import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { SuitcaseChecklistUI } from '../index';

const slug = 'generador-checklist-maleta';
const title = 'Generador de Checklist de Maleta Crea tu lista de equipaje';
const description = 'La herramienta en línea definitiva para organizar tu equipaje en base a tu tipo de viaje, destino y duración. No vuelvas a olvidar tus imprescindibles de viaje.';

const ui: SuitcaseChecklistUI = {
  title: "Planificador de Equipaje",
  form: {
    destTitle: "Destino y Clima",
    destTypes: [
      { id: "playa", name: "Playa / Costa", icon: "mdi:beach" },
      { id: "ciudad", name: "Ciudad / Urbano", icon: "mdi:city" },
      { id: "montana", name: "Montaña / Rural", icon: "mdi:pine-tree" },
      { id: "frio", name: "Clima Frío / Nieve", icon: "mdi:snowflake" }
    ],
    daysTitle: "¿Cuántos días?",
    intlTitle: "¿Viaje Internacional?",
    intlLabel: "Sí, cruzo fronteras",
    reasonTitle: "Motivo del Viaje",
    reasons: [
      { id: "ocio", name: "Ocio / Placer", icon: "mdi:party-popper" },
      { id: "negocios", name: "Negocios", icon: "mdi:tie" }
    ],
    submitBtn: "Configurar Maleta Ideal"
  },
  results: {
    title: "Tu Lista de Viaje",
    editBtn: "Editar",
    printBtn: "Guardar PDF",
    tipsTitle: "Consejos para tu Viaje",
    progressText: "Completado"
  },
  itemsDb: {
    essentials: {
      id: "essentials",
      title: "Documentación y Básico",
      icon: "mdi:passport",
      items: [
        { label: "DNI / Pasaporte" },
        { label: "Tarjetas bancarias" },
        { label: "Efectivo" },
        { label: "Billetes (Avión/Tren)" },
        { label: "Reservas de alojamiento" },
        { label: "Llaves de casa" },
        { label: "Documentación internacional", dynamicId: "item-internacional" }
      ]
    },
    technology: {
      id: "technology",
      title: "Tecnología",
      icon: "mdi:laptop",
      items: [
        { label: "Teléfono móvil" },
        { label: "Cargador del móvil" },
        { label: "Auriculares" },
        { label: "Batería externa" },
        { label: "Adaptador de enchufe", dynamicId: "item-adaptador" }
      ]
    },
    toiletries: {
      id: "toiletries",
      title: "Neceser",
      icon: "mdi:toothbrush",
      items: [
        { label: "Cepillo y pasta de dientes" },
        { label: "Desodorante" },
        { label: "Gel y champú" },
        { label: "Peine / Cepillo" },
        { label: "Mini botiquín" },
        { label: "Medicamentos personales" }
      ]
    },
    clothing_base: {
      id: "clothing_base",
      title: "Ropa Diaria",
      icon: "mdi:tshirt-crew",
      items: [
        { label: "Ropa interior", dynamicId: "qty-ropa-interior" },
        { label: "Camisetas / Arriba", dynamicId: "qty-camisetas" },
        { label: "Pantalones / Abajo", dynamicId: "qty-pantalones" },
        { label: "Calcetines", dynamicId: "qty-calcetines" },
        { label: "Pijama" },
        { label: "Chaqueta ligera" },
        { label: "Zapatos cómodos diarios" }
      ]
    }
  },
  specificItems: {
    destType: {
      playa: {
        id: "dest-playa",
        title: "Para la Costa",
        icon: "mdi:beach",
        items: [
          { label: "Bañadores" },
          { label: "Toalla de playa" },
          { label: "Protector solar" },
          { label: "Gafas de sol" },
          { label: "Chanclas" },
          { label: "Gorra o Sombrero" }
        ]
      },
      ciudad: {
        id: "dest-ciudad",
        title: "Urbano",
        icon: "mdi:city",
        items: [
          { label: "Zapatillas para caminar" },
          { label: "Mochila segura pequeña" },
          { label: "Paraguas compacto" },
          { label: "Guía de ciudad" }
        ]
      },
      montana: {
        id: "dest-montana",
        title: "Montaña",
        icon: "mdi:pine-tree",
        items: [
          { label: "Botas de senderismo" },
          { label: "Cortavientos repelente" },
          { label: "Pantalones trekking" },
          { label: "Cantimplora" },
          { label: "Mochila montaña" }
        ]
      },
      frio: {
        id: "dest-frio",
        title: "Clima Frío",
        icon: "mdi:snowflake",
        items: [
          { label: "Abrigo grueso" },
          { label: "Gorros y guantes" },
          { label: "Calzado de invierno" },
          { label: "Camisetas térmicas" },
          { label: "Bufanda" }
        ]
      }
    },
    travelType: {
      negocios: {
        id: "travel-negocios",
        title: "Negocios",
        icon: "mdi:tie",
        items: [
          { label: "Traje completo / Ropa formal" },
          { label: "Camisas de vestir" },
          { label: "Zapatos formales" },
          { label: "Portátil" },
          { label: "Cargador del portátil" },
          { label: "Documentación de trabajo" }
        ]
      },
      ocio: {
        id: "travel-ocio",
        title: "Ocio",
        icon: "mdi:camera",
        items: [
          { label: "Ropa para salir de noche" },
          { label: "Cámara fotográfica (Opcional)" },
          { label: "Libro / Entretenimiento" }
        ]
      }
    }
  },
  tips: {
    military: "Enrollar la ropa estilo 'militar' ayuda muchísimo a combatir arrugas y ahorra espacio.",
    longTravel: "Vas para más de una semana. En lugar de llevar kilos de ropa, planifica lavar tus básicos a la mitad del viaje.",
    intlPassport: "Viaje Internacional: Revisa hoy mismo si tu pasaporte tiene al menos 6 meses de validez porque muchos países lo exigen.",
    intlBank: "Consulta si hay visas necesarias o si tu banco cobra comisiones en el extranjero.",
    intlAdapter: "¡No olvides tu adaptador universal si las clavijas del país de destino son distintas!",
    coldLayers: "Para el clima frío, la clave es vestirse en capas: una térmica base, una intermedia aislante y un buen abrigo impermeable fuera.",
    coldHeavyOn: "Lleva las prendas más abultadas y pesadas puestas en el avión para ahorrar espacio en cabina.",
    beachWet: "Asegúrate de llevar más de un bañador; la humedad a veces impide que se sequen para el día siguiente."
  }
};

const seo: ToolLocaleContent<SuitcaseChecklistUI>['seo'] = [
  { type: "title", text: "Generador de Checklist de Maleta: Tu Compañero de Viaje Ideal", level: 2 },
  { type: "paragraph", html: "Preparar la maleta suele ser uno de los momentos más estresantes antes de un viaje. El miedo a olvidar algo importante, la duda sobre el clima en el destino o la incertidumbre de cuánto equipaje llevar pueden amargar los días previos a tus tan ansiadas vacaciones. Es aquí donde un <strong>generador de checklist de maleta</strong> se convierte en tu mejor aliado." },
  {
    type: "summary",
    title: "Beneficios de usar nuestro creador de listas",
    items: [
      "Personalización absoluta adaptada al clima de tu destino (playa, montaña, ciudad o nieve).",
      "Cálculo automático de la cantidad de ropa basándose en los días que dura tu escapada.",
      "Reducción drástica del estrés logístico al tener un checklist interactivo que puedes ir marcando.",
      "Optimización del espacio en el equipaje, evitando el síndrome del 'por si acaso'."
    ]
  },
  { type: "title", text: "¿Por qué es fundamental planificar el equipaje?", level: 3 },
  { type: "paragraph", html: "Viajar es una experiencia transformadora, pero una mala planificación puede traer quebraderos de cabeza innecesarios. Al utilizar nuestra herramienta inteligente, automatizas un proceso que de otra forma tomaría varias horas de cálculos y memorización. La organización eficiente es la base de cualquier aventura exitosa." }
];

const faq: ToolLocaleContent<SuitcaseChecklistUI>['faq'] = [
  { question: "¿Puedo guardar la lista generada?", answer: "Puedes marcar y desmarcar elementos de tu lista, así como utilizar el botón para imprimirla o guardarla como un archivo PDF en tu dispositivo." },
  { question: "¿Cómo se calculan las cantidades de ropa?", answer: "Nuestra herramienta estima las mudas de ropa según la duración del viaje seleccionada, promoviendo viajar ligero y optimizar tu equipaje." },
  { question: "¿Funciona para viajes con clima frío y nieve?", answer: "Sí, puedes seleccionar el destino de clima frío para que el checklist incluya automáticamente artículos indispensables para esa climatología." },
  { question: "¿Tiene la herramienta algún costo?", answer: "No, nuestro generador de listas de equipaje es 100% gratuito y no requiere ningún registro o descarga de aplicación adicional." }
];

const bibliography: ToolLocaleContent<SuitcaseChecklistUI>['bibliography'] = [
  { name: "KonMari - How to KonMari a Suitcase", url: "https://konmari.com/how-to-konmari-a-suitcase/" },
  { name: "Eagle Creek - What to Pack: Ultimate Travel Packing Checklist", url: "https://eaglecreek.com/blogs/articles/what-pack-ultimate-travel-packing-checklist" }
];

const howTo: ToolLocaleContent<SuitcaseChecklistUI>['howTo'] = [
  { name: "Define tu viaje", text: "Selecciona el clima, el motivo y la duración de tu escapada." },
  { name: "Genera la lista", text: "Pulsa el botón y obtén al instante todas las cosas necesarias, desde cosmética hasta tecnología." },
  { name: "Prepara la maleta", text: "Marca los artículos a medida que los guardes para no olvidar absolutamente nada esencial." }
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
  applicationCategory: 'UtilitiesApplication',
  operatingSystem: 'All',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  inLanguage: 'es',
};

export const content: ToolLocaleContent<SuitcaseChecklistUI> = {
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
  howToTitle: "Cómo planificar tu maleta",
  schemas: [faqSchema, howToSchema, appSchema],
};
