import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { TripExpenseSplitterUI } from '../ui';
import { bibliographyEntries } from '../bibliography';

const slug = 'dela-reseutgifter-grupp-kalkylator';
const title = "Dela Reseutgifter för Gruppresor";
const description = "Dela gemensamma utgifter under resan med vänner, se vem som betalat för mycket eller för lite, och reglera allt med lägsta möjliga antal överföringar.";

const ui: TripExpenseSplitterUI = {
  "tripNameLabel": "Resans namn",
  "tripNamePlaceholder": "Namnge resan",
  "currencyLabel": "Valuta",
  "travelersHeading": "Resenärer",
  "travelerPlaceholder": "Resenär",
  "addTraveler": "Lägg till resenär",
  "removeTraveler": "Ta bort",
  "expensesHeading": "Utgiftsbok",
  "expenseDescriptionPlaceholder": "Vad var utgiften för?",
  "amountLabel": "Belopp",
  "payerLabel": "Betalades av",
  "participantsLabel": "Delas på",
  "allTravelers": "resenärer",
  "addExpense": "Lägg till utgift",
  "emptyExpenses": "Utgiftsboken är tom. Lägg till den första gemensamma utgiften.",
  "resultHeading": "Föreslagna överföringar",
  "totalSpent": "Gruppens totala utgift",
  "transferCount": "överföringar",
  "noTransfers": "Alla är kvitt. Inga överföringar behövs.",
  "owes": "skyldig",
  "receives": "tar emot",
  "from": "från",
  "to": "till",
  "eachPays": "Varje person betalar",
  "eachReceives": "Varje person tar emot",
  "settlementHint": "Översikten visar personerna och den kortaste regleringsvägen.",
  "copyLink": "Kopiera länk",
  "copied": "Länk kopierad",
  "exportJson": "Exportera JSON",
  "reset": "Börja om",
  "removeExpense": "Ta bort utgift",
  "deleteTrip": "Återställ resa",
  "intro": "Fyll i gruppens utgifter. Översikten nedan skapar en kort avräkningsplan.",
  "statusBalanced": "Resan reglerad",
  "statusSettle": "Klar för avräkning",
  "statusReady": "Väntar på utgifter",
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
  "defaultTripName": "Fjällhelg",
  "defaultTravelerNames": [
    "Maya",
    "Alex",
    "Sam"
  ],
  "defaultExpenseNames": [
    "Stuga",
    "Tågbiljetter"
  ]
};

const seo: ToolLocaleContent<TripExpenseSplitterUI>['seo'] = [
  {
    "type": "title",
    "text": "Så kasserar ni in och reglerar gruppens reseutgifter enkelt",
    "level": 2
  },
  {
    "type": "paragraph",
    "html": "Att avsluta ekonomin efter en gruppresa är enkelt när varje utgift har en tydlig betalare och rätt deltagare. Denna kalkylator summerar utläggen, fördelar kostnaderna och ger den kortaste överföringsplanen."
  },
  {
    "type": "title",
    "text": "Hur saldot per resenär beräknas",
    "level": 2
  },
  {
    "type": "table",
    "headers": [
      "Fas",
      "Beräkning",
      "Syfte"
    ],
    "rows": [
      [
        "Totalt betalat",
        "Summa utlägg som personen lagt ut",
        "Registrerar utlagda pengar"
      ],
      [
        "Rättvis andel",
        "Fördelning av utgiften på deltagarna",
        "Tilldelar kostnaden till faktiska användare"
      ],
      [
        "Nettosaldo",
        "Totalt betalat minus rättvis andel",
        "Visar vem som ska få eller betala"
      ],
      [
        "Reglering",
        "Koppling av största skulder och tillgodohavanden",
        "Minimerar antalet överföringar"
      ]
    ]
  },
  {
    "type": "tip",
    "title": "Välj deltagare noggrant för varje utgift",
    "html": "Boende gäller oftast alla, men en separat måltid eller entrébiljett avser ofta bara vissa personer."
  },
  {
    "type": "title",
    "text": "Förenkla den slutliga avräkningen",
    "level": 2
  },
  {
    "type": "paragraph",
    "html": "Följ de föreslagna överföringarna för att göra gruppen kvitt snabbast möjligt."
  }
];

const faq = [
  {
    "question": "Hur fungerar kalkylatorn för reseutgifter?",
    "answer": "Ange resenärer, utgifter, vem som betalade och vem som deltog. Kalkylatorn räknar ut nettosaldot och föreslår minsta antal överföringar."
  },
  {
    "question": "Kan en utgift gälla bara vissa resenärer?",
    "answer": "Ja. Välj exakt vilka deltagare utgiften gäller för."
  },
  {
    "question": "Sparas mina uppgifter på nätet?",
    "answer": "Nej. Allt lagras lokalt i din webbläsare."
  },
  {
    "question": "Varför är det färre överföringar än utgifter?",
    "answer": "Verktyget kvittar skulder mot varandra för att göra avräkningen så smidig som möjligt."
  }
];

const howTo = [
  {
    "name": "Lägg till resenärer",
    "text": "Skriv namnen på alla som ingår i resesällskapet."
  },
  {
    "name": "Registrera utgifter",
    "text": "Ange beskrivning, belopp, betalare och deltagare."
  },
  {
    "name": "Gör överföringarna",
    "text": "Använd de föreslagna överföringarna för att reglera resan."
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
  inLanguage: 'sv',
};

export const content: ToolLocaleContent<TripExpenseSplitterUI> = {
  slug,
  title,
  description,
  ui,
  seo,
  faq,
  howTo,
  howToTitle: "Så delar ni gemensamma reseutgifter",
  schemas: [appSchema, faqSchema, howToSchema],
  bibliography: bibliographyEntries,
};
