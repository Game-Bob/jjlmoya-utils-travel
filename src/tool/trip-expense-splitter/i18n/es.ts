import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { TripExpenseSplitterUI } from '../ui';
import { bibliographyEntries } from '../bibliography';

const slug = 'calculadora-dividir-gastos-viaje-grupo';
const title = "Calculadora para Dividir Gastos de Viaje en Grupo";
const description = "Divide los gastos compartidos de tu viaje entre amigos, consulta quién ha pagado de más o de menos y salda las cuentas con el mínimo de transferencias.";

const ui: TripExpenseSplitterUI = {
  "tripNameLabel": "Nombre del viaje",
  "tripNamePlaceholder": "Pon nombre a este viaje",
  "currencyLabel": "Moneda",
  "travelersHeading": "Viajeros",
  "travelerPlaceholder": "Viajero",
  "addTraveler": "Añadir viajero",
  "removeTraveler": "Eliminar viajero",
  "expensesHeading": "Registro de gastos",
  "expenseDescriptionPlaceholder": "¿En qué se gastó?",
  "amountLabel": "Importe",
  "payerLabel": "Pagado por",
  "participantsLabel": "Dividir entre",
  "allTravelers": "viajeros",
  "addExpense": "Añadir gasto",
  "emptyExpenses": "Tu registro está vacío. Añade el primer gasto compartido.",
  "resultHeading": "Transferencias sugeridas",
  "totalSpent": "Gasto total del grupo",
  "transferCount": "transferencias",
  "noTransfers": "Todos están al día. No hacen falta pagos.",
  "owes": "debe",
  "receives": "recibe",
  "from": "de",
  "to": "a",
  "eachPays": "Cada persona paga",
  "eachReceives": "Cada persona recibe",
  "settlementHint": "La ruta muestra a los viajeros e indica el plan de pagos simplificado.",
  "copyLink": "Copiar enlace",
  "copied": "Enlace copiado",
  "exportJson": "Exportar JSON",
  "reset": "Empezar de nuevo",
  "removeExpense": "Eliminar gasto",
  "deleteTrip": "Reiniciar viaje",
  "intro": "Introduce los pagos del grupo. La ruta inferior convertirá la lista en un plan de saldo rápido.",
  "statusBalanced": "Viaje saldado",
  "statusSettle": "Listo para saldar",
  "statusReady": "Esperando gastos",
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
    }
  ],
  "defaultTripName": "Fin de semana en la montaña",
  "defaultTravelerNames": [
    "Maya",
    "Alex",
    "Sam"
  ],
  "defaultExpenseNames": [
    "Cabaña",
    "Billetes de tren"
  ]
};

const seo: ToolLocaleContent<TripExpenseSplitterUI>['seo'] = [
  {
    "type": "title",
    "text": "Cómo saldar las cuentas de un viaje en grupo sin complicaciones",
    "level": 2
  },
  {
    "type": "paragraph",
    "html": "Cerrar las cuentas de un viaje en grupo es muy fácil cuando cada gasto tiene un pagador claro y una lista exacta de participantes. Esta calculadora suma lo adelantado por cada persona, asigna cada coste a quienes lo disfrutaron y calcula el plan de pagos con el menor número de transferencias posible."
  },
  {
    "type": "title",
    "text": "Cómo se calcula el saldo de cada viajero",
    "level": 2
  },
  {
    "type": "table",
    "headers": [
      "Etapa",
      "Cálculo aplicado",
      "Propósito"
    ],
    "rows": [
      [
        "Total pagado",
        "Suma de gastos abonados por cada viajero",
        "Registra el dinero adelantado por cada uno"
      ],
      [
        "Parte justa",
        "División del gasto entre sus participantes",
        "Asigna el coste a quienes realmente lo usaron"
      ],
      [
        "Saldo neto",
        "Total pagado menos parte justa",
        "Muestra quién debe cobrar o pagar"
      ],
      [
        "Liquidación",
        "Cruce de deudas mayores con saldos a favor",
        "Reduce al mínimo los Bizum o transferencias"
      ]
    ]
  },
  {
    "type": "tip",
    "title": "Define bien los participantes de cada gasto",
    "html": "Usa las etiquetas de participantes. El alojamiento suele dividirse entre todos, pero una cena privada o una entrada de museo puede pertenecer solo a una parte del grupo."
  },
  {
    "type": "title",
    "text": "Simplifica la conversación final del grupo",
    "level": 2
  },
  {
    "type": "paragraph",
    "html": "El resultado es una herramienta de planificación transparente. Revisad la lista juntos y utilizad los pagos sugeridos como la vía más rápida para saldar el viaje."
  }
];

const faq = [
  {
    "question": "¿Cómo funciona la calculadora para dividir gastos de viaje?",
    "answer": "Introduce los viajeros, cada gasto, quién lo pagó y quién lo compartió. La calculadora obtiene el saldo neto de cada uno y genera la lista más corta de transferencias."
  },
  {
    "question": "¿Se puede dividir un gasto solo entre algunas personas?",
    "answer": "Sí. Selecciona los participantes de cada gasto para que el importe se reparta únicamente entre ellos."
  },
  {
    "question": "¿Se guardan mis datos en algún servidor?",
    "answer": "No. Todo se procesa en tu navegador y se guarda localmente. Puedes exportar un JSON o compartir un enlace cuando quieras."
  },
  {
    "question": "¿Por qué hay menos transferencias que gastos registrados?",
    "answer": "Porque la herramienta compensa las deudas cruzadas entre los viajeros para saldar la cuenta global con el menor número de Bizums o pagos."
  }
];

const howTo = [
  {
    "name": "Añade a los participantes",
    "text": "Escribe el nombre de todas las personas que forman parte del grupo."
  },
  {
    "name": "Registra cada gasto",
    "text": "Indica el concepto, el importe, quién pagó y quiénes disfrutaron de la actividad."
  },
  {
    "name": "Consulta el plan de pagos",
    "text": "Revisa los saldos y realiza las transferencias sugeridas para saldar el viaje en pocos pasos."
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

export const content: ToolLocaleContent<TripExpenseSplitterUI> = {
  slug,
  title,
  description,
  ui,
  seo,
  faq,
  howTo,
  howToTitle: "Cómo dividir los gastos compartidos de un viaje",
  schemas: [appSchema, faqSchema, howToSchema],
  bibliography: bibliographyEntries,
};
