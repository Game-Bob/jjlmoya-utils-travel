import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { TripExpenseSplitterUI } from '../ui';
import { bibliographyEntries } from '../bibliography';

const slug = 'kalkulator-podzialu-kosztow-wyjazdu-grupy';
const title = "Kalkulator Podziału Kosztów Wyjazdu Grupowego";
const description = "Podziel wspólne wydatki z wyjazdu ze znajomymi, sprawdź kto zapłacił za dużo lub za mało i rozlicz grupę minimalną liczbą przelewów.";

const ui: TripExpenseSplitterUI = {
  "tripNameLabel": "Nazwa wyjazdu",
  "tripNamePlaceholder": "Nazwij ten wyjazd",
  "currencyLabel": "Waluta",
  "travelersHeading": "Uczestnicy",
  "travelerPlaceholder": "Uczestnik",
  "addTraveler": "Dodaj osobę",
  "removeTraveler": "Usuń",
  "expensesHeading": "Rejestr wydatków",
  "expenseDescriptionPlaceholder": "Za co płacono?",
  "amountLabel": "Kwota",
  "payerLabel": "Płacący",
  "participantsLabel": "Podział na",
  "allTravelers": "uczestników",
  "addExpense": "Dodaj wydatek",
  "emptyExpenses": "Rejestr jest pusty. Dodaj pierwszy wspólny wydatek.",
  "resultHeading": "Sugerowane przelewy",
  "totalSpent": "Suma wydatków grupy",
  "transferCount": "przelewy",
  "noTransfers": "Wszyscy są rozliczeni. Brak przelewów.",
  "owes": "jest winny",
  "receives": "otrzymuje",
  "from": "od",
  "to": "dla",
  "eachPays": "Każda osoba płaci",
  "eachReceives": "Każda osoba отримуuje",
  "settlementHint": "Trasa pokazuje uczestników i najkrótszy plan rozliczenia.",
  "copyLink": "Kopiuj link",
  "copied": "Skopiowano link",
  "exportJson": "Eksportuj JSON",
  "reset": "Zacznij od nowa",
  "removeExpense": "Usuń wydatek",
  "deleteTrip": "Zresetuj wyjazd",
  "intro": "Wpisz wydatki grupy. Poniższy plan przekształci je w najkrótsze rozliczenie.",
  "statusBalanced": "Wyjazd rozliczony",
  "statusSettle": "Gotowe do rozliczenia",
  "statusReady": "Oczekiwanie na wydatki",
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
  "defaultTripName": "Weekend w górach",
  "defaultTravelerNames": [
    "Maya",
    "Alex",
    "Sam"
  ],
  "defaultExpenseNames": [
    "Domek",
    "Bilety na pociąg"
  ]
};

const seo: ToolLocaleContent<TripExpenseSplitterUI>['seo'] = [
  {
    "type": "title",
    "text": "Jak sprawnie rozliczyć wspólny wyjazd ze znajomymi",
    "level": 2
  },
  {
    "type": "paragraph",
    "html": "Rozliczenie grupowego wyjazdu jest proste, gdy każdy wydatek ma płatnika i dokładną listę uczestników. Kalkulator sumuje wpłaty każdego uczestnika, dzieli koszty i tworzy plan z minimalną liczbą przelewów."
  },
  {
    "type": "title",
    "text": "Jak obliczany jest bilans każdej osoby",
    "level": 2
  },
  {
    "type": "table",
    "headers": [
      "Etap",
      "Działanie",
      "Cel"
    ],
    "rows": [
      [
        "Suma wpłat",
        "Suma kwot wyłożonych przez daną osobę",
        "Rejestruje wyłożone środki"
      ],
      [
        "Należna część",
        "Podział wydatku na jego uczestników",
        "Przypisuje koszt osobom korzystającym"
      ],
      [
        "Bilans netto",
        "Suma wpłat minus należna część",
        "Wskazuje kto ma dopłacić lub odebrać"
      ],
      [
        "Rozliczenie",
        "Kompensata długów i należności",
        "Minimalizuje liczbę przelewów"
      ]
    ]
  },
  {
    "type": "tip",
    "title": "Precyzyjnie wybieraj uczestników każdego wydatku",
    "html": "Nocleg zazwyczaj dotyczy wszystkich, ale prywatny posiłek lub bilet do muzeum tylko wybranych osób."
  },
  {
    "type": "title",
    "text": "Uprość końcowe rozliczenia",
    "level": 2
  },
  {
    "type": "paragraph",
    "html": "Skorzystaj z sugerowanych przelewów, aby zamknąć finanse wyjazdu w kilku krokach."
  }
];

const faq = [
  {
    "question": "Jak działa kalkulator podziału wydatków?",
    "answer": "Wpisz osoby, wydatki, płatnika i uczestników. Kalkulator wyliczy bilans netto i zaproponuje najkrótszą listę przelewów."
  },
  {
    "question": "Czy wydatek może dotyczyć tylko części grupy?",
    "answer": "Tak. Zaznacz właściwe osoby przy każdym wydatku."
  },
  {
    "question": "Czy moje dane są wysyłane na serwer?",
    "answer": "Nie. Wszystkie dane pozostają w Twojej przeglądarce."
  },
  {
    "question": "Dlaczego przelewów jest mniej niż wydatków?",
    "answer": "Tool kompensuje wzajemne długi, aby rozliczyć grupę minimalną liczbą transakcji."
  }
];

const howTo = [
  {
    "name": "Dodaj uczestników",
    "text": "Wpisz imiona wszystkich osób biorących udział w wyjeździe."
  },
  {
    "name": "Zarejestruj wydatki",
    "text": "Podaj opis, kwotę, płatnika i osoby korzystające."
  },
  {
    "name": "Wykonaj przelewy",
    "text": "Zastosuj sugerowane przelewy, aby rozliczyć wyjazd."
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
  inLanguage: 'pl',
};

export const content: ToolLocaleContent<TripExpenseSplitterUI> = {
  slug,
  title,
  description,
  ui,
  seo,
  faq,
  howTo,
  howToTitle: "Jak podzielić wspólne wydatki z wyjazdu",
  schemas: [appSchema, faqSchema, howToSchema],
  bibliography: bibliographyEntries,
};
