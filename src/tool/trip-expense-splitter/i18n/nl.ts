import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { TripExpenseSplitterUI } from '../ui';
import { bibliographyEntries } from '../bibliography';

const slug = 'groepsuitgaven-verdelen-vakantie-calculator';
const title = "Groepsuitgaven Verdelen voor Vakanties";
const description = "Verdeel gezamenlijke vakantie-uitgaven eenvoudig tussen vrienden, zie wie te veel of te weinig betaald heeft en verreken alles met zo min mogelijk overboekingen.";

const ui: TripExpenseSplitterUI = {
  "tripNameLabel": "Naam van de reis",
  "tripNamePlaceholder": "Geef deze reis een naam",
  "currencyLabel": "Valuta",
  "travelersHeading": "Reizigers",
  "travelerPlaceholder": "Reiziger",
  "addTraveler": "Reiziger toevoegen",
  "removeTraveler": "Verwijderen",
  "expensesHeading": "Kasboek",
  "expenseDescriptionPlaceholder": "Waarvoor was deze uitgave?",
  "amountLabel": "Bedrag",
  "payerLabel": "Betaald door",
  "participantsLabel": "Verdelen over",
  "allTravelers": "reizigers",
  "addExpense": "Uitgave toevoegen",
  "emptyExpenses": "Uw kasboek is nog leeg. Voeg de eerste gezamenlijke uitgave toe.",
  "resultHeading": "Voorgestelde betalingen",
  "totalSpent": "Totale uitgaven groep",
  "transferCount": "overboekingen",
  "noTransfers": "Iedereen staat quitte. Geen betalingen nodig.",
  "owes": "verschuldigd",
  "receives": "ontvangt",
  "from": "van",
  "to": "aan",
  "eachPays": "Elk persoon betaalt",
  "eachReceives": "Elk persoon ontvangt",
  "settlementHint": "Het overzicht toont de reizigers en de kortste verrekenroute.",
  "copyLink": "Link kopiëren",
  "copied": "Link gecopieerd",
  "exportJson": "Exporteer JSON",
  "reset": "Opnieuw beginnen",
  "removeExpense": "Uitgave verwijderen",
  "deleteTrip": "Reis resetten",
  "intro": "Voer de uitgaven van de groep in. Het onderstaande overzicht maakt een kort verrekenplan.",
  "statusBalanced": "Reis verrekend",
  "statusSettle": "Klaar om te verrekenen",
  "statusReady": "Wachten op uitgaven",
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
  "defaultTripName": "Weekendje weg",
  "defaultTravelerNames": [
    "Maya",
    "Alex",
    "Sam"
  ],
  "defaultExpenseNames": [
    "Huisje",
    "Treinkaartjes"
  ]
};

const seo: ToolLocaleContent<TripExpenseSplitterUI>['seo'] = [
  {
    "type": "title",
    "text": "Eerlijk en snel groepsuitgaven verrekenen na een vakantie",
    "level": 2
  },
  {
    "type": "paragraph",
    "html": "Het verrekenen van een groepsreis wordt heel eenvoudig als elke uitgave een duidelijke betaler en deelnemers heeft. Deze calculator telt voorgeschoten bedragen op, verdeelt de kosten en maakt een verrekenplan met een minimum aan overboekingen."
  },
  {
    "type": "title",
    "text": "Hoe de balans per reiziger wordt berekend",
    "level": 2
  },
  {
    "type": "table",
    "headers": [
      "Fase",
      "Berekening",
      "Doel"
    ],
    "rows": [
      [
        "Totaal betaald",
        "Som van de voorgeschoten uitgaven per persoon",
        "Legt het voorgeschoten geld vast"
      ],
      [
        "Eerlijk deel",
        "Verdeling van de uitgave over de deelnemers",
        "Wijst kosten toe aan de werkelijke gebruikers"
      ],
      [
        "Nettobalans",
        "Totaal betaald min eerlijk deel",
        "Toont wie geld krijgt of moet betalen"
      ],
      [
        "Verrekening",
        "Koppeling van grootste schulden en tegoeden",
        "Minimaliseert het aantal overboekingen"
      ]
    ]
  },
  {
    "type": "tip",
    "title": "Kies nauwkeurig wie meedoet per uitgave",
    "html": "De accommodatie is meestal voor iedereen, maar een uiteten of museumbezoek geldt vaak voor een deel van de groep."
  },
  {
    "type": "title",
    "text": "Houd de afsluitende verrekening eenvoudig",
    "level": 2
  },
  {
    "type": "paragraph",
    "html": "Gebruik de voorgestelde betalingen als de snelste manier om iedereen quitte te laten spelen."
  }
];

const faq = [
  {
    "question": "Hoe werkt de groepsuitgaven calculator?",
    "answer": "Voer de reizigers, uitgaven, betaler en deelnemers in. De calculator berekent de nettobalans en maakt een korte betalingslijst."
  },
  {
    "question": "Kan een uitgave over een deel van de groep verdeeld worden?",
    "answer": "Ja. Selecteer per uitgave precies wie er mee heeft gedaan."
  },
  {
    "question": "Worden mijn gegevens geüpload?",
    "answer": "Nee. Alles blijft lokaal in uw eigen browser opgeslagen."
  },
  {
    "question": "Waarom zijn er minder overboekingen dan uitgaven?",
    "answer": "De tool streept onderlinge schulden en tegoeden tegen elkaar weg om het aantal betalingen te minimaliseren."
  }
];

const howTo = [
  {
    "name": "Voeg reizigers toe",
    "text": "Vul de namen in van iedereen die meedoet aan de verrekening."
  },
  {
    "name": "Voer uitgaven in",
    "text": "Meld omschrijving, bedrag, wie betaalde en wie meedeed."
  },
  {
    "name": "Volg het verrekenplan",
    "text": "Voer de voorgestelde betalingen uit om de groep te verrekenen."
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
  inLanguage: 'nl',
};

export const content: ToolLocaleContent<TripExpenseSplitterUI> = {
  slug,
  title,
  description,
  ui,
  seo,
  faq,
  howTo,
  howToTitle: "Hoe verdeelt u groepsuitgaven op vakantie",
  schemas: [appSchema, faqSchema, howToSchema],
  bibliography: bibliographyEntries,
};
