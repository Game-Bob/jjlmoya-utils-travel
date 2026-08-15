import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { SchengenCalculatorUI } from '../ui';
import { bibliographyEntries } from '../bibliography';

const slug = 'kalkulator-pobytu-schengen-90-180';
const title = 'Kalkulator Pobytu w Strefie Schengen 90 180 Dni';
const description =
  'Sprawdź zgodność swoich podróży do Europy z regułą wizową 90/180 dni. Oblicz dozwolone dni pobytu i uniknij kar za przekroczenie terminu w strefie Schengen.';

const ui: SchengenCalculatorUI = {
  verdictSafeTitle: 'Podróż Zgodna z Prawem (W Granicach Limitu)',
  verdictWarningTitle: 'Uwaga: Zbliżasz się do Limitu 90 Dni',
  verdictOverstayTitle: 'Wykryto Nielegalne Przekroczenie Pobytu',
  daysRemainingSub: 'Pozostałe Dozwolone Dni',
  daysUsedSub: 'Dni Wykorzystane w Oknie 180 Dni',
  maxStaySub: 'Maksymalny Ciągły Pobyt',
  fullResetSub: 'Data Pełnego Resetu do 90 Dni',
  plannerHeading: '1. Sprawdź Datę Docelową',
  plannerEntryLabel: 'Data Wjazdu lub Planowany Lot',
  quickDatesLabel: 'Skocz do Daty',
  presetToday: 'Dzisiaj',
  presetPlus7: '+1 Tydzień',
  presetPlus14: '+2 Tygodnie',
  presetPlus30: '+1 Miesiąc',
  tripsHeading: '2. Historia i Plany Podróży po Europie',
  addTripBtn: '+ Dodaj Pobyt',
  emptyTripsMsg: 'Brak wprowadzonych podróży. Dodaj swoje przeszłe lub planowane pobyty w strefie Schengen.',
  colArrival: 'Wjazd (Przyjazd)',
  colDeparture: 'Wyjazd (Odjazd)',
  colDestination: 'Kraj / Notatki',
  colDays: 'Dni',
  sampleBtn: 'Wczytaj Przykład Podróżnika',
  clearBtn: 'Wyczyść Wszystko',
  timelineTitle: 'Ruchome Okno 180 Dni',
  legendInSchengen: 'W Strefie Schengen',
  legendOutside: 'Poza',
  legendOverstay: 'Przekroczenie (Overstay)',
  bannerSafe: 'Dnia {date} wykorzystasz {used} ({rem} dostępnych).',
  bannerWarning: 'Dnia {date} wykorzystasz {used} (pozostało tylko {rem}).',
  bannerOverstay: 'Wykryto przekroczenie dozwolonego pobytu od {date}. Plan przekracza limit o {days}.',
  unitDays: 'dni',
  notesPlaceholder: 'np. Francja, Hiszpania',
  sampleNotes1: 'Podróż po Włoszech (20 dni)',
  sampleNotes2: 'Niemcy i Austria (20 dni)',
  sampleNotesDefault: 'Francja i Hiszpania',
};

const seo: ToolLocaleContent<SchengenCalculatorUI>['seo'] = [
  {
    type: 'title',
    text: 'Jak w Praktyce Działa Reguła 90 180 w Strefie Schengen',
    level: 2,
  },
  {
    type: 'summary',
    title: 'Podstawowe Zasady Ruchomego Okna Schengen',
    items: [
      'Obywatele państw trzecich mogą przebywać w strefie Schengen do 90 dni w dowolnym ruchomym okresie 180 dni.',
      'Okno 180 dni przesuwa się w przód każdego dnia, analizując wstecznie dokładnie 179 poprzednich dni.',
      'Dzień wjazdu oraz dzień wyjazdu są wliczane jako pełne kalendarzowe dni obecności.',
      'Wyjazd z Europy nie resetuje limitu do 90 dni bez ciągłego 90-dniowego pobytu poza strefą.',
    ],
  },
  {
    type: 'paragraph',
    html: 'Strefa Schengen stosuje rygorystyczny limit <strong>maksymalnie 90 dni pobytu w dowolnym 180-dniowym oknie</strong> dla podróżnych bezwizowych oraz posiadaczy wizy krótkoterminowej typu C, zgodnie z art. 6 ust. 1 <em>Kodeksu Granicznego Schengen (Rozporządzenie UE 2016/399)</em>. Każdego dnia obecności w Europie straż graniczna weryfikuje łączną liczbę dni spędzonych w 29 państwach członkowskich w ciągu poprzedzających 179 dni plus dzień bieżący.',
  },
  {
    type: 'title',
    text: 'Kluczowe Wskaźniki i Standardy Kontroli Granicznej',
    level: 2,
  },
  {
    type: 'stats',
    items: [
      {
        value: '90 Dni',
        label: 'Maksymalny Łączny Pobyt',
      },
      {
        value: '180 Dni',
        label: 'Ruchome Okno Kontroli',
      },
      {
        value: 'Oba Dni',
        label: 'Wliczanie Wjazdu i Wyjazdu',
      },
      {
        value: '29 Państw',
        label: 'Wspólny Obszar Schengen',
      },
    ],
  },
  {
    type: 'title',
    text: 'Stałe Limity Roczne vs Dynamiczne Ruchome Okna',
    level: 2,
  },
  {
    type: 'comparative',
    items: [
      {
        title: 'Błędne Przekonanie o Roku Kalendarzowym',
        description:
          'Wielu podróżnych sądzi, że 90 dni odnawia się automatycznie 1 stycznia lub po krótkim opuszczeniu strefy. To powszechne nieporozumienie prowadzi do nieświadomego przekroczenia dozwolonego pobytu i wysokich kar.',
      },
      {
        title: 'Rzeczywiste Działanie Ruchomego Okna',
        description:
          'Każdy dzień w strefie Schengen jest nanoszony na ciągłą oś czasu. Wraz z upływem czasu najstarsze pobyty wypadają z 180-dniowego okna, sukcesywnie odblokowując nowe dozwolone dni.',
      },
    ],
  },
  {
    type: 'title',
    text: 'Typowe Profile Podróży i Ocena Prawna',
    level: 2,
  },
  {
    type: 'table',
    headers: ['Profil Podróży', 'Przykład', 'Status Prawny', 'Zalecenie'],
    rows: [
      [
        'Pojedynczy Ciągły Pobyt',
        'Wjazd 1 czerwca, wyjazd 29 sierpnia (90 dni)',
        'Zgodny z Prawem',
        'Należy opuścić strefę dokładnie 90. dnia i pozostać 90 kolejnych dni poza Schengen w celu pełnego resetu.',
      ],
      [
        'Częsty Podróżnik',
        'Trzy wyjazdy po 30 dni z 30-dniowymi przerwami',
        'Zgodny z Prawem',
        'Każdy wyjazd musi być osobno sprawdzany w ruchomym 180-dniowym oknie wstecznym.',
      ],
      [
        'Cyfrowy Nomad',
        'Naprzemiennie 60 dni w Schengen i 30 dni poza',
        'Wysokie Ryzyko Overstay',
        '30-dniowa przerwa odnawia tylko dni z pobytów sprzed 180 dni, grożąc odmową wjazdu na granicy.',
      ],
      [
        'Pełny Reset 90 Dni',
        'Nieprzerwana obecność 90 dni poza strefą Schengen',
        'Pełna Pula',
        'Gwarantuje całkowite odzyskanie 90 dni dozwolonego pobytu przy kolejnym wjeździe.',
      ],
    ],
  },
  {
    type: 'title',
    text: 'Wskazówki Praktyczne Unikania Problemów na Granicy',
    level: 2,
  },
  {
    type: 'tip',
    title: 'Zaplanuj Dni Zapasowe',
    html: 'Nigdy nie planuj powrotu dokładnie na 90. dzień. Odwołany lot lub nagła sytuacja zdrowotna może przesunąć wylot na 91. dzień, co skutkuje automatyczną rejestracją naruszenia w europejskim systemie wjazdu/wyjazdu (EES).',
  },
  {
    type: 'card',
    title: 'Zachowaj Dowody Pobytu poza Strefą Schengen',
    html: 'Gromadź karty pokładowe, faktury za hotel i pieczątki z krajów spoza strefy Schengen (np. Wielka Brytania, Irlandia, Cypr, Czarnogóra czy Albania), aby w razie kontroli bezspornie udowodnić swoją nieobecność.',
  },
  {
    type: 'title',
    text: 'Słowniczek Pojęć Kontroli Granicznej',
    level: 2,
  },
  {
    type: 'glossary',
    items: [
      {
        term: 'Overstay (Przekroczenie Pobytu)',
        definition:
          'Przebywanie w strefie Schengen ponad dozwolone 90 dni w okresie 180 dni, co grozi karami finansowymi, deportacją i zakazem wjazdu.',
      },
      {
        term: 'EES (System Wjazdu Wyjazdu)',
        definition:
          'Zautomatyzowany unijny system rejestrujący dane biometryczne podróżnych z państw trzecich przekraczających granice.',
      },
      {
        term: 'Obywatel Państwa Trzeciego',
        definition:
          'Każda osoba, która nie posiada obywatelstwa państwa członkowskiego Unii Europejskiej ani EFTA.',
      },
    ],
  },
];

const faq: ToolLocaleContent<SchengenCalculatorUI>['faq'] = [
  {
    question: 'Na czym polega reguła 90 180 w strefie Schengen?',
    answer:
      'Zezwala obywatelom państw trzecich na podróżowanie bez wizy długoterminowej przez maksymalnie 90 dni w dowolnym ruchomym okresie 180 dni na terytorium 29 państw strefy Schengen.',
  },
  {
    question: 'Czy pula 90 dni resetuje się po wyjeździe z Europy?',
    answer:
      'Nie. Samo opuszczenie strefy Schengen nie resetuje licznika. Okres 180 dni przesuwa się każdego dnia; pełne odnowienie limitu następuje dopiero po 90 kolejnych dniach poza strefą Schengen.',
  },
  {
    question: 'Czy dzień wjazdu i wyjazdu liczy się jako pełne dni?',
    answer:
      'Tak. Zgodnie z art. 6 Kodeksu Granicznego Schengen zarówno dzień przyjazdu, jak i odjazdu są liczone jako pełne kalendarzowe dni pobytu.',
  },
  {
    question: 'Które kraje należą do strefy Schengen w tym kalkulatorze?',
    answer:
      'Obejmuje 29 państw: Austria, Belgia, Bułgaria, Chorwacja, Czechy, Dania, Estonia, Finlandia, Francja, Grecja, Hiszpania, Holandia, Islandia, Liechtenstein, Litwa, Luksemburg, Łotwa, Malta, Niemcy, Norwegia, Polska, Portugalia, Rumunia, Słowacja, Słowenia, Szwajcaria, Szwecja, Węgry i Włochy. Wielka Brytania i Irlandia nie należą do Schengen.',
  },
];

const howTo: ToolLocaleContent<SchengenCalculatorUI>['howTo'] = [
  {
    name: 'Wybierz Datę Oceny',
    text: 'Wskaż datę planowanego lotu, aby sprawdzić stan dozwolonych dni w wybranym momencie.',
  },
  {
    name: 'Wprowadź Poprzednie i Przyszłe Podróże',
    text: 'Podaj daty wjazdu i wyjazdu dla wszystkich pobytów w krajach Schengen z ostatnich miesięcy.',
  },
  {
    name: 'Sprawdź Zapas Dni i Terminy',
    text: 'Zweryfikuj wskaźnik pozostałych dni, dopuszczalny czas ciągłego pobytu oraz datę pełnego resetu limitu.',
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
  inLanguage: 'pl',
};

export const content: ToolLocaleContent<SchengenCalculatorUI> = {
  slug,
  title,
  description,
  ui,
  seo,
  faq,
  howTo,
  howToTitle: 'Jak obliczyć pobyt w strefie Schengen',
  schemas: [faqSchema, howToSchema, appSchema],
  bibliography: bibliographyEntries,
};
