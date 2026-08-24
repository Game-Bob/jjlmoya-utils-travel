import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { FuelCostCalculatorUI } from '../ui';
import { bibliographyEntries } from '../bibliography';

const slug = 'calcolatore-costo-carburante-viaggio';
const title = "Calcolatore Costo Carburante per Viaggi";
const description = "Calcola la spesa stimata per il carburante del tuo viaggio in base a distanza, consumo del veicolo, prezzo al litro, passeggeri e itinerario solo andata o ritorno.";

const ui: FuelCostCalculatorUI = {
  "metricLabel": "Metrico",
  "imperialLabel": "Imperiale",
  "routeHeading": "Regola il tuo viaggio",
  "distanceLabel": "Distanza solo andata",
  "distanceHint": "A che distanza si trova la destinazione?",
  "consumptionLabel": "Consumo del veicolo",
  "consumptionHint": "Inserisci il valore della tua auto",
  "priceLabel": "Prezzo del carburante",
  "priceHint": "Inserisci il prezzo attuale al distributore",
  "passengersLabel": "Passeggeri",
  "roundTripLabel": "Andata e ritorno",
  "currencyLabel": "Valuta",
  "presetsLabel": "Rotte rapide",
  "presetCommute": "Tragitto giornaliero",
  "presetWeekend": "Gita nel weekend",
  "presetRoadTrip": "Grande viaggio",
  "resultHeading": "Previsione carburante",
  "totalDistanceLabel": "Distanza totale",
  "fuelUsedLabel": "Carburante necessario",
  "totalCostLabel": "Costo totale carburante",
  "perPersonLabel": "Quota per ciascun passeggero",
  "routeStatement": "{distance} {unit} andata e ritorno, diviso tra {passengers}",
  "routeOneWayStatement": "{distance} {unit} solo andata, diviso tra {passengers}",
  "statusLight": "Spesa contenuta",
  "statusMedium": "Ottimo viaggio da condividere",
  "statusHigh": "Lungo tragitto",
  "sampleButton": "Carica esempio",
  "resetButton": "Ripristina",
  "litersUnit": "L",
  "gallonsUnit": "gal",
  "distanceMetricUnit": "km",
  "distanceImperialUnit": "mi",
  "consumptionMetricUnit": "L/100 km",
  "consumptionImperialUnit": "mpg",
  "priceMetricUnit": "al litro",
  "priceImperialUnit": "al gallone",
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
    "text": "Come stimare il budget per la benzina o il diesel prima di partire",
    "level": 2
  },
  {
    "type": "paragraph",
    "html": "Per un calcolo preciso della spesa del carburante occorrono quattro dati: la distanza solo andata, il consumo medio dell auto, il prezzo al litro e il numero di passeggeri. Il calcolatore raddoppia la distanza in caso di andata e ritorno e divide l importo finale equamente."
  },
  {
    "type": "title",
    "text": "Formula di calcolo della spesa carburante",
    "level": 2
  },
  {
    "type": "table",
    "headers": [
      "Fase",
      "Calcolo applicato",
      "Risultato ottenuto"
    ],
    "rows": [
      [
        "Distanza totale",
        "Distanza solo andata x 2 per andata e ritorno",
        "Percorso effettivo in km o miglia"
      ],
      [
        "Carburante consumato",
        "Distanza totale x Consumo / 100",
        "Litri complessivi necessari per il tragitto"
      ],
      [
        "Costo totale",
        "Litri consumati x Prezzo al litro",
        "Spesa totale stimata per il carburante"
      ],
      [
        "Costo per persona",
        "Costo totale / Numero passeggeri",
        "Quota individuale equa per il gruppo"
      ]
    ]
  },
  {
    "type": "tip",
    "title": "Inserisci il prezzo reale del distributore",
    "html": "Il prezzo del carburante varia in base alla stazione di servizio, al paese e al momento. Inserisci la cifra esatta prevista per ottenere una stima affidabile."
  },
  {
    "type": "title",
    "text": "Unità metriche e imperiali",
    "level": 2
  },
  {
    "type": "paragraph",
    "html": "La modalità metrica utilizza chilometri e litri per 100 km, mentre quella imperiale si basa su miglia e miglia per gallone (mpg). Il passaggio tra le unità non modifica la spesa finale."
  },
  {
    "type": "list",
    "items": [
      "Aggiungi un piccolo margine per deviazioni o ricerca di parcheggio.",
      "Basati sul consumo reale della tua vettura anziché sui dati teorici.",
      "Per viaggi lunghi con più rifornimenti, calcola ciascuna tappa separatamente."
    ]
  }
];

const faq = [
  {
    "question": "Come si calcola il costo del carburante per un viaggio?",
    "answer": "Moltiplica la distanza totale per il consumo medio dell auto, dividi per 100 se usi L/100 km e moltiplica per il prezzo al litro. Dividi infine il totale per il numero di passeggeri."
  },
  {
    "question": "Il calcolatore include il viaggio di ritorno?",
    "answer": "Sì. Seleziona l opzione Andata e ritorno e la distanza verrà automaticamente raddoppiata prima del calcolo."
  },
  {
    "question": "Utilizza prezzi del carburante in tempo reale?",
    "answer": "No. Il prezzo viene inserito manualmente per garantire la massima trasparenza e adattabilità a qualsiasi distributore."
  },
  {
    "question": "Posso calcolare in miglia e galloni?",
    "answer": "Sì. Passa al sistema Imperiale per inserire miglia e mpg."
  }
];

const howTo = [
  {
    "name": "Scegli il sistema di unità",
    "text": "Seleziona Metrico per km e L/100km o Imperiale per miglia e mpg."
  },
  {
    "name": "Inserisci i dati del viaggio",
    "text": "Indica la distanza andata, il consumo dell auto, il prezzo al litro e i passeggeri."
  },
  {
    "name": "Verifica le quote",
    "text": "Attiva andata e ritorno se necessario, scegli la valuta e consulta la suddivisione del costo."
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
  inLanguage: 'it',
};

export const content: ToolLocaleContent<FuelCostCalculatorUI> = {
  slug,
  title,
  description,
  ui,
  seo,
  faq,
  howTo,
  howToTitle: "Come calcolare il costo del carburante per il tuo viaggio",
  schemas: [faqSchema, howToSchema, appSchema],
  bibliography: bibliographyEntries,
};
