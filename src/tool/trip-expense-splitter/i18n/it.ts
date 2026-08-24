import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { TripExpenseSplitterUI } from '../ui';
import { bibliographyEntries } from '../bibliography';

const slug = 'calcolatore-divisione-spese-viaggio-gruppo';
const title = "Calcolatore Divisione Spese di Viaggio in Gruppo";
const description = "Dividi le spese condivise del viaggio tra amici, scopri chi ha pagato di più o di meno e salda i conti con il minor numero di bonifici.";

const ui: TripExpenseSplitterUI = {
  "tripNameLabel": "Nome del viaggio",
  "tripNamePlaceholder": "Dai un nome a questo viaggio",
  "currencyLabel": "Valuta",
  "travelersHeading": "Partecipanti",
  "travelerPlaceholder": "Partecipante",
  "addTraveler": "Aggiungi partecipante",
  "removeTraveler": "Rimuovi",
  "expensesHeading": "Registro spese",
  "expenseDescriptionPlaceholder": "Per cosa è stato pagato?",
  "amountLabel": "Importo",
  "payerLabel": "Pagato da",
  "participantsLabel": "Diviso tra",
  "allTravelers": "partecipanti",
  "addExpense": "Aggiungi spesa",
  "emptyExpenses": "Il registro è vuoto. Aggiungi la prima spesa condivisa.",
  "resultHeading": "Trasferimenti consigliati",
  "totalSpent": "Spesa totale del gruppo",
  "transferCount": "trasferimenti",
  "noTransfers": "Tutti i conti tornano. Nessun trasferimento necessario.",
  "owes": "deve",
  "receives": "riceve",
  "from": "da",
  "to": "a",
  "eachPays": "Ciascuna persona paga",
  "eachReceives": "Ciascuna persona riceve",
  "settlementHint": "Il percorso mostra i partecipanti e il piano di saldotop sintetico.",
  "copyLink": "Copia link",
  "copied": "Link copiato",
  "exportJson": "Esporta JSON",
  "reset": "Ricomincia",
  "removeExpense": "Rimuovi spesa",
  "deleteTrip": "Azzera viaggio",
  "intro": "Inserisci le spese del gruppo. La guida in basso trasformerà il registro in un piano di saldo rapido.",
  "statusBalanced": "Viaggio saldato",
  "statusSettle": "Pronto per il saldo",
  "statusReady": "In attesa di spese",
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
  "defaultTripName": "Weekend in montagna",
  "defaultTravelerNames": [
    "Maya",
    "Alex",
    "Sam"
  ],
  "defaultExpenseNames": [
    "Chalet",
    "Biglietti treno"
  ]
};

const seo: ToolLocaleContent<TripExpenseSplitterUI>['seo'] = [
  {
    "type": "title",
    "text": "Come saldare i conti di un viaggio di gruppo senza stress",
    "level": 2
  },
  {
    "type": "paragraph",
    "html": "Chiudere i conti di un viaggio in gruppo è semplice quando ogni spesa ha un pagatore chiaro e una lista precisa di partecipanti. Questo calcolatore somma gli anticipi di ciascuno, assegna le quote corrette e genera il piano di saldo più breve."
  },
  {
    "type": "title",
    "text": "Come viene calcolato il saldo di ciascun partecipante",
    "level": 2
  },
  {
    "type": "table",
    "headers": [
      "Fase",
      "Calcolo applicato",
      "Scopo"
    ],
    "rows": [
      [
        "Totale pagato",
        "Somma delle spese anticipate da ciascuno",
        "Registra il denaro già versato"
      ],
      [
        "Quota equa",
        "Divisione della spesa tra i partecipanti",
        "Assegna il costo a chi ha fruito del servizio"
      ],
      [
        "Saldo netto",
        "Totale pagato meno quota equa",
        "Mostra chi deve dare o ricevere"
      ],
      [
        "Pareggio",
        "Incontro tra debiti e crediti maggiori",
        "Riduce al minimo il numero di trasferimenti"
      ]
    ]
  },
  {
    "type": "tip",
    "title": "Definisci bene chi partecipa a ciascuna spesa",
    "html": "L alloggio viene solitamente diviso tra tutti, mentre una cena o un ingresso per una mostra privata riguarda solo alcuni partecipanti."
  },
  {
    "type": "title",
    "text": "Semplifica i conti a fine viaggio",
    "level": 2
  },
  {
    "type": "paragraph",
    "html": "Utilizza i trasferimenti consigliati come la strada più rapida per pareggiare il gruppo."
  }
];

const faq = [
  {
    "question": "Come funziona il calcolatore per dividere le spese?",
    "answer": "Inserisci i partecipanti, le spese, chi ha pagato e chi ha usufruito. Il calcolatore ottiene i saldi netti e suggerisce i trasferimenti minimi."
  },
  {
    "question": "Si può dividere una spesa solo tra alcuni partecipanti?",
    "answer": "Sì. Seleziona solo le persone coinvolte per quella specifica spesa."
  },
  {
    "question": "I miei dati vengono salvati online?",
    "answer": "No. Tutto viene elaborato e salvato unicamente nel tuo browser."
  },
  {
    "question": "Perché ci sono meno trasferimenti rispetto alle spese?",
    "answer": "Il sistema compensa i debiti e crediti incrociati per chiudere i conti con pochissime operazioni."
  }
];

const howTo = [
  {
    "name": "Aggiungi i partecipanti",
    "text": "Inserisci i nomi di tutti i membri del gruppo."
  },
  {
    "name": "Registra le spese",
    "text": "Indica causale, importo, chi ha pagato e chi ha usufruito."
  },
  {
    "name": "Segui il piano di saldo",
    "text": "Controlla i saldi e applica i trasferimenti suggeriti."
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

export const content: ToolLocaleContent<TripExpenseSplitterUI> = {
  slug,
  title,
  description,
  ui,
  seo,
  faq,
  howTo,
  howToTitle: "Come dividere le spese condivise di un viaggio",
  schemas: [appSchema, faqSchema, howToSchema],
  bibliography: bibliographyEntries,
};
