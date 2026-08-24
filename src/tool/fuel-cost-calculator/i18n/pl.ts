import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { FuelCostCalculatorUI } from '../ui';
import { bibliographyEntries } from '../bibliography';

const slug = 'kalkulator-kosztow-paliwa-podroz';
const title = "Kalkulator Kosztów Paliwa na Podróż";
const description = "Oblicz szacunkowy koszt paliwa na trasie na podstawie dystansu, spalania pojazdu, ceny paliwa, liczby pasażerów oraz trasy w jedną lub dwie strony.";

const ui: FuelCostCalculatorUI = {
  "metricLabel": "Metryczne",
  "imperialLabel": "Imperialne",
  "routeHeading": "Dostosuj trasę",
  "distanceLabel": "Dystans w jedną stronę",
  "distanceHint": "Jak daleko jest cel podróży?",
  "consumptionLabel": "Spalanie pojazdu",
  "consumptionHint": "Wpisz średnie spalanie auta",
  "priceLabel": "Cena paliwa",
  "priceHint": "Wpisz aktualną cenę za litr na stacji",
  "passengersLabel": "Pasażerowie",
  "roundTripLabel": "W obie strony",
  "currencyLabel": "Waluta",
  "presetsLabel": "Szybkie trasy",
  "presetCommute": "Codzienny dojazd",
  "presetWeekend": "Wypad weekendowy",
  "presetRoadTrip": "Wielka podróż",
  "resultHeading": "Prognoza zużycia paliwa",
  "totalDistanceLabel": "Całkowity dystans",
  "fuelUsedLabel": "Potrzebne paliwo",
  "totalCostLabel": "Całkowity koszt paliwa",
  "perPersonLabel": "Koszt na jedną osobę",
  "routeStatement": "{distance} {unit} w obie strony, podział na {passengers} osób",
  "routeOneWayStatement": "{distance} {unit} w jedną stronę, podział na {passengers} osób",
  "statusLight": "Niski koszt",
  "statusMedium": "Dobra trasa do podziału",
  "statusHigh": "Długa podróż",
  "sampleButton": "Załaduj przykład",
  "resetButton": "Resetuj",
  "litersUnit": "L",
  "gallonsUnit": "gal",
  "distanceMetricUnit": "km",
  "distanceImperialUnit": "mi",
  "consumptionMetricUnit": "L/100 km",
  "consumptionImperialUnit": "mpg",
  "priceMetricUnit": "za litr",
  "priceImperialUnit": "za galon",
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
    "text": "Jak dokładnie zaplanować budżet na paliwo przed wyjazdem",
    "level": 2
  },
  {
    "type": "paragraph",
    "html": "Precyzyjne wyliczenie kosztów paliwa wymaga czterech danych: dystansu w jedną stronę, średniego spalania pojazdu, ceny za litr oraz liczby pasażerów. Kalkulator automatycznie podwaja trasę przy wyborze opcji w obie strony i dzieli koszty równo na wszystkich uczestników."
  },
  {
    "type": "title",
    "text": "Wzór na obliczenie kosztu paliwa",
    "level": 2
  },
  {
    "type": "table",
    "headers": [
      "Krok",
      "Zastosowane działanie",
      "Uzyskany wynik"
    ],
    "rows": [
      [
        "Całkowity dystans",
        "Dystans w jedną stronę x 2 dla trasy powrotnej",
        "Rzeczywista długość trasy w km lub milach"
      ],
      [
        "Zużyte paliwo",
        "Całkowity dystans x Spalanie / 100",
        "Liczba litrów paliwa potrzebna na trasę"
      ],
      [
        "Całkowity koszt",
        "Zużyte paliwo x Cena za litr",
        "Szacowany całkowity wydatek na paliwo"
      ],
      [
        "Koszt na osobę",
        "Całkowity koszt / Liczba pasażerów",
        "Sprawiedliwa kwota do zapłaty przez każdą osobę"
      ]
    ]
  },
  {
    "type": "tip",
    "title": "Wpisuj aktualne ceny ze stacji",
    "html": "Ceny paliw różnią się w zależności od stacji i kraju. Wpisz przewidywaną stawkę za litr, aby uzyskać dokładny wynik."
  },
  {
    "type": "title",
    "text": "Jednostki metryczne i imperialne",
    "level": 2
  },
  {
    "type": "paragraph",
    "html": "Tryb metryczny wykorzystuje kilometry i litry na 100 km, natomiast imperialny operuje na milach i mpg. Zmiana jednostek nie wpływa na ostateczny koszt trasy."
  },
  {
    "type": "list",
    "items": [
      "Uwzględnij niewielki zapas na objazdy i szukanie miejsca do parkowania.",
      "Korzystaj z realnego spalania samochodu zamiast wartości katalogowych.",
      "Dla długich tras z kilkoma tankowaniami obliczaj każdy etap osobno."
    ]
  }
];

const faq = [
  {
    "question": "Jak obliczyć koszt paliwa na podróż samochodem?",
    "answer": "Pomnóż całkowity dystans przez średnie spalanie, podziel przez 100 w przypadku L/100 km i pomnóż przez cenę za litr. Podziel wynik przez liczbę pasażerów."
  },
  {
    "question": "Czy kalkulator uwzględnia powrót?",
    "answer": "Tak. Włącz opcję W obie strony, a kalkulator automatycznie podwoi dystans przed obliczeniem paliwa."
  },
  {
    "question": "Czy kalkulator pobiera ceny paliw na żywo?",
    "answer": "Nie. Cenę wpisujesz ręcznie, co zapewnia przejrzystość i możliwość dostosowania do dowolnej stacji."
  },
  {
    "question": "Czy mogę liczyć w milach i galonach?",
    "answer": "Tak. Przełącz na system Imperialny, aby wprowadzać dane w milach i mpg."
  }
];

const howTo = [
  {
    "name": "Wybierz system jednostek",
    "text": "Wybierz Metryczne dla km i L/100km lub Imperialne dla mil i mpg."
  },
  {
    "name": "Wprowadź dane trasy i auta",
    "text": "Podaj dystans, spalanie pojazdu, cenę paliwa i liczbę pasażerów."
  },
  {
    "name": "Sprawdź podział kosztów",
    "text": "Włącz trasy w obie strony w razie potrzeby, wybierz walutę i odczytaj koszt na osobę."
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

export const content: ToolLocaleContent<FuelCostCalculatorUI> = {
  slug,
  title,
  description,
  ui,
  seo,
  faq,
  howTo,
  howToTitle: "Jak obliczyć koszt paliwa na podróż",
  schemas: [faqSchema, howToSchema, appSchema],
  bibliography: bibliographyEntries,
};
