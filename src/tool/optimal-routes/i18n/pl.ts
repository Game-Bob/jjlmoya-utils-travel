import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { OptimalRoutesUI } from '../index';

const slug = 'kalkulator-optymalnej-trasy-inteligentne-planowanie';
const title = 'Kalkulator Optymalnej Trasy | Inteligentna Reorganizacja Przystanków';
const description = 'Optymalizuj swoje trasy dostaw lub podróży za darmo. Nasze narzędzie automatycznie zmienia kolejność przystanków, aby znaleźć najkrótszą i najefektywniejszą drogę.';

const ui: OptimalRoutesUI = {
  title: "Optymalne Trasy",
  sidebar: {
    title: "Plan Trasy",
    addPoint: "Dodaj przystanek (kliknij mapę)",
    pointsList: "Twoje przystanki",
    emptyState: "Kliknij na mapę, aby dodać przystanki do swojej trasy.",
    optimizeBtn: "Optymalizuj Kolejność",
    clearBtn: "Wyczyść Wszystko",
    stats: {
      distance: "Całkowity dystans:",
      time: "Szacowany czas:"
    }
  },
  map: {
    placeholder: "Ładowanie mapy...",
    attribution: "© Współautorzy OpenStreetMap"
  },
  errors: {
    minPoints: "Do obliczenia trasy potrzebne są co najmniej dwa punkty.",
    calcError: "Błąd podczas obliczania optymalnej trasy. Spróbuj ponownie."
  },
  labels: {
    origin: "Start",
    destination: "Koniec",
    stop: "Przystanek",
    loading: "Obliczanie..."
  }
};

const seo: ToolLocaleContent<OptimalRoutesUI>['seo'] = [
  { type: "title", text: "Inteligentna Optymalizacja Tras", level: 2 },
  { type: "paragraph", html: "Skorzystaj z zaawansowanych algorytmów, aby rozwiązać Problem Komiwojażera (TSP) w kilka sekund. Idealne dla logistyki, dostaw lub po prostu oszczędzania paliwa podczas podróży." },
  { type: "title", text: "Dlaczego Kolejność Przystanków jest Ważna", level: 3 },
  { type: "paragraph", html: "Błędne uszeregowanie przystanków może znacznie zwiększyć czas podróży i zużycie paliwa. Nasz optymalizator analizuje miliony możliwości, aby wskazać Ci najbardziej bezpośrednią drogę, unikając niepotrzebnych objazdów i nakładania się tras." }
];

const faq: ToolLocaleContent<OptimalRoutesUI>['faq'] = [
  { question: "Jak działa optymalizacja?", answer: "Analizujemy wszystkie Twoje przystanki i wyznaczamy sekwencyjną kolejność, która minimalizuje całkowity pokonany dystans." },
  { question: "Czy mogę używać go na telefonie?", answer: "Tak, narzędzie jest w pełni responsywne i pozwala otworzyć wynikową trasę bezpośrednio w aplikacjach nawigacyjnych." },
  { question: "Czy istnieje limit liczby przystanków?", answer: "W darmowej wersji możesz efektywnie optymalizować do 25 przystanków, co jest idealne dla codzinnych dostaw lub road tripów." }
];

const howTo: ToolLocaleContent<OptimalRoutesUI>['howTo'] = [
  { name: "Dodaj", text: "Kliknij na mapę, aby ustalić punkt startowy i przystanki pośrednie." },
  { name: "Optymalizuj", text: "Naciśnij przycisk optymalizacji, aby system efektywnie zmienił kolejność przystanków." },
  { name: "Nawiguj", text: "Użyj wygenerowanego planu, aby podążać sugerowaną trasą." }
];

const bibliography: ToolLocaleContent<OptimalRoutesUI>['bibliography'] = [
  { name: "Problem komiwojażera (TSP)", url: "https://pl.wikipedia.org/wiki/Problem_komiwoja%C5%BCera" },
  { name: "Optymalizacja tras", url: "https://pl.wikipedia.org/wiki/Logistyka" }
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
  applicationCategory: 'MapApplication',
  operatingSystem: 'Web',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  inLanguage: 'pl',
};

export const content: ToolLocaleContent<OptimalRoutesUI> = {
  slug,
  title,
  description,
  ui,
  seo,
  faq,
  faqTitle: "Najczęściej Zadawane Pytania",
  bibliography,
  bibliographyTitle: "Źródła i Odniesienia",
  howTo,
  howToTitle: "Jak używać",
  schemas: [faqSchema, howToSchema, appSchema],
};
