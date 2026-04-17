import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { MiniAdventuresUI } from '../index';

const slug = 'generator-mini-przygod-wyjdz-z-ruty';
const title = 'Generator Mini Przygód: Wyjdź z Rutyny';
const description = 'Losowy generator codziennych wyzwań, aby przełamać monotonię i odkryć swoją okolicę.';

const ui: MiniAdventuresUI = {
  title: "Mini Przygody",
  homeTitle: "Mini Przygody",
  homeDesc: "Spraw, by dzisiejszy dzień był nieco inny. Czy jesteś gotowy na odkrycia?",
  generateBtn: "GENERUJ PRZYGODĘ",
  anotherBtn: "INNA",
  doneBtn: "ZROBIONE",
  shareBtn: "UDOSTĘPNIJ",
  categories: {
    exploration: { id: "exploration", label: "Eksploracja", icon: "mdi:map-marker-path", color: "#10b981", styling: "border-emerald-500/30 text-emerald-400 bg-emerald-500/5" },
    food: { id: "food", label: "Gastronomia", icon: "mdi:food-variant", color: "#f59e0b", styling: "border-amber-500/30 text-amber-400 bg-amber-500/5" },
    learning: { id: "learning", label: "Nauka", icon: "mdi:school", color: "#6366f1", styling: "border-indigo-500/30 text-indigo-400 bg-indigo-500/5" },
    creativity: { id: "creativity", label: "Kreatywność", icon: "mdi:palette", color: "#ec4899", styling: "border-pink-500/30 text-pink-400 bg-pink-500/5" },
    social: { id: "social", label: "Społeczne", icon: "mdi:account-group", color: "#0ea5e9", styling: "border-sky-500/30 text-sky-400 bg-sky-500/5" },
    observation: { id: "observation", label: "Obserwacja", icon: "mdi:eye", color: "#8b5cf6", styling: "border-violet-500/30 text-violet-400 bg-violet-500/5" },
    wellness: { id: "wellness", label: "Dobrostan", icon: "mdi:heart-pulse", color: "#f43f5e", styling: "border-rose-500/30 text-rose-400 bg-rose-500/5" }
  },
  adventures: [
    { id: 1, text: "Spróbuj kawy lub napoju w miejscu, do którego nigdy wcześniej nie wszedłeś.", categoryId: "food" },
    { id: 2, text: "Idź przez 10 minut w kierunku, którego zazwyczaj nie wybierasz, wychodząc z domu.", categoryId: "exploration" },
    { id: 3, text: "Naucz się mówić 'Dziękuję' w trzech różnych językach, których nie znasz.", categoryId: "learning" },
    { id: 4, text: "Zrób zdjęcie detalu architektonicznego, który przyciągnie Twój wzrok na Twojej ulicy.", categoryId: "creativity" },
    { id: 5, text: "Kup owoc, którego nigdy nie próbowałeś i odkryj jego smak.", categoryId: "food" },
    { id: 6, text: "Znajdź tablicę pamiątkową w swojej okolicy i przeczytaj historię, którą opowiada.", categoryId: "exploration" },
    { id: 7, text: "Narysuj coś, co masz przed sobą, w mniej niż 60 sekund.", categoryId: "creativity" },
    { id: 8, text: "Przywitaj się z sąsiadem, z którym zazwyczaj nie rozmawiasz.", categoryId: "social" },
    { id: 9, text: "Posłuchaj przez 5 minut gatunku muzycznego, za którym zazwyczaj nie przepadasz.", categoryId: "learning" },
    { id: 10, text: "Odwiedź sklep z antykami lub rzeczami używanymi i znajdź najdziwniejszy przedmiot.", categoryId: "exploration" },
    { id: 11, text: "Usiądź w parku i policz, ile różnych rodzajów ptaków widzisz.", categoryId: "observation" },
    { id: 12, text: "Napisz pozytywną wiadomość i zostaw ją wewnątrz książki w bibliotece publicznej.", categoryId: "social" },
    { id: 13, text: "Zrób listę 5 rzeczy, za które jesteś dziś wdzięczny.", categoryId: "wellness" },
    { id: 14, text: "Spróbuj ugotować nową potrawę, używając tylko tego, co masz w spiżarni.", categoryId: "food" },
    { id: 15, text: "Spędź 20 minut, nie patrząc na żaden ekran (telefon, TV, PC).", categoryId: "wellness" },
    { id: 16, text: "Znajdź drzewo w pobliżu domu i spróbuj zidentyfikować jego gatunek.", categoryId: "learning" },
    { id: 300, text: "Zaplanuj wizytę w pobliskim miasteczku w ten weekend.", categoryId: "exploration" },
    { id: 301, text: "Dowiedz się, jak nazywają się palce u ręki po łacinie.", categoryId: "learning" },
    { id: 302, text: "Znajdź rym do każdego słowa w tym zdaniu.", categoryId: "creativity" },
    { id: 303, text: "Podziękuj przyjacielowi za coś, co wydarzyło się dawno temu.", categoryId: "social" }
  ],
  achievements: [
    { id: "g1", milestone: 1, label: "Przebudzenie", categoryId: "global", icon: "mdi:footprint", description: "Twoja pierwsza mini przygoda ukończona." },
    { id: "g10", milestone: 10, label: "Nawyk Zachwytu", categoryId: "global", icon: "mdi:sparkles", description: "Przełamałeś rutynę 10 razy." },
    { id: "g50", milestone: 50, label: "Kolekcjoner Dni", categoryId: "global", icon: "mdi:calendar-star", description: "50 dni sprawiania, że to, co zwyczajne, staje się niezwykłe." },
    { id: "g150", milestone: 150, label: "Mistrz Przypadku", categoryId: "global", icon: "mdi:trophy-variant", description: "Ukończyłeś połowę katalogu przygód." },
    { id: "g300", milestone: 300, label: "Wolny Duch", categoryId: "global", icon: "mdi:ghost", description: "Opanowałeś sztukę codziennej przygody." },
    { id: "e3", milestone: 3, label: "Turysta w Domu", categoryId: "exploration", icon: "mdi:map-marker-outline", description: "Odkryto 3 nowe zakamarki." },
    { id: "e15", milestone: 15, label: "Kartograf Miejski", categoryId: "exploration", icon: "mdi:map-check", description: "Znasz swój kod pocztowy lepiej niż ktokolwiek inny." },
    { id: "f3", milestone: 3, label: "Niespokojne Podniebienie", categoryId: "food", icon: "mdi:silverware-clean", description: "Spróbowałeś 3 smaków, których nie znałeś." },
    { id: "f15", milestone: 15, label: "Gourmet-Alchemik", categoryId: "food", icon: "mdi:silverware-variant", description: "Twoja spiżarnia jest paszportem do świata." },
    { id: "l3", milestone: 3, label: "Adept Wszystkiego", categoryId: "learning", icon: "mdi:book-open-page-variant", description: "Poznałeś 3 ciekawostki ze świata." },
    { id: "l15", milestone: 15, label: "Chodząca Biblioteka", categoryId: "learning", icon: "mdi:head-cog", description: "Twoja ciekawość nie zna granic." },
    { id: "c3", milestone: 3, label: "Ręka Ryownika", categoryId: "creativity", icon: "mdi:palette-outline", description: "Zostawiłeś swój ślad w 3 małych wyzwaniach." },
    { id: "c15", milestone: 15, label: "Lokalna Awangarda", categoryId: "creativity", icon: "mdi:palette-swatch", description: "Widzisz sztukę tam, gdzie inni widzą tylko ulicę." },
    { id: "s3", milestone: 3, label: "Ludzki Most", categoryId: "social", icon: "mdi:account-voice", description: "Dziś nawiązałeś kontakt z 3 osobami." },
    { id: "s15", milestone: 15, label: "Dusza Ulicy", categoryId: "social", icon: "mdi:account-group", description: "Zmieniłeś nieznajomych w opowieści." },
    { id: "o3", milestone: 3, label: "Zorientowany na Detale", categoryId: "observation", icon: "mdi:magnify", description: "Zobaczyłeś 3 rzeczy, których nikt inny nie zauważa." },
    { id: "o15", milestone: 15, label: "Oko Reżysera", categoryId: "observation", icon: "mdi:telescope", description: "Twój wzrok jest obiektywem wielkiego filmu." },
    { id: "w3", milestone: 3, label: "Uważna Pauza", categoryId: "wellness", icon: "mdi:leaf", description: "Poświęciłeś 3 chwile swojemu spokojowi ducha." },
    { id: "w15", milestone: 15, label: "Totalna Równowaga", categoryId: "wellness", icon: "mdi:spa", description: "Ciało i umysł Ci dziękują." }
  ],
  stats: {
    adventures: "Przygody",
    badges: "Odznaki",
    progress: "Twój Postęp",
    trophies: "Kolekcja Trofeów"
  },
  shareTemplate: "Właśnie wylosowałem Mini Przygodę!\n\n\"{text}\"\n\nOdważysz się? Wygeneruj swoją tutaj: {url}"
};

const seo: ToolLocaleContent<MiniAdventuresUI>['seo'] = [
  { type: "title", text: "Mini Przygody: Sztuka Codzienności", level: 2 },
  { type: "paragraph", html: "Odkryj, jak mikro-przygody mogą przeprogramować Twój mózg, zwalczyć rutynę i obudzić Twoją wrodzoną ciekawość. Rutyna jest wrogiem kreatywności. Wprowadzając małe wariacje do naszego codziennego życia, zmuszamy nasz mózg do tworzenia nowych połączeń neuronowych." },
  { type: "title", text: "Neuroplastyczność w Akcji", level: 3 },
  { type: "paragraph", html: "Rutyna jest wrogiem kreatywności. Wprowadzając małe wariacje do naszego codziennego życia — takie jak spróbowanie nowego smaku czy spacer nieznaną ulicą — zmuszamy nasz mózg do tworzenia nowych połączeń neuronowych. Te mikro-przygody działają jak mentalna siłownia, która utrzymuje umysł sprawnym i otwartym na nowe możliwości." },
  { type: "title", text: "Dobrostan Emocjonalny", level: 3 },
  { type: "paragraph", html: "Poczucie stagnacji często wynika z absolutnej przewidywalności. Kontrolowana losowość generatora przygód wprowadza element 'pozytywnego zaskoczenia', uwalniając dopaminę i poprawiając nastrój w naturalny sposób. Nie potrzebujesz transoceanicznej podróży, aby poczuć dreszcz odkrycia." },
  { type: "title", text: "Odkrywaj to, co już znasz: Lokalna Filozofia", level: 2 },
  { type: "paragraph", html: "Żyjemy otoczeni historiami i detalami, które pozostają niezauważone. Celem tej prognozy jest wytrenowanie Twojego oka, aby dostrzegało niezwykłość w zwyczajności. Nie szukaj idealnego momentu; szukaj momentu możliwego." },
  {
    type: "grid",
    columns: 2
  },
  { type: "card", icon: "mdi:clock-fast", title: "Bez Wymówek", html: "Przygody, które wymagają mniej niż 15 minut i zero złotych. Czas nie jest barierą dla ciekawości." },
  { type: "card", icon: "mdi:lock-outline", title: "Totalna Prywatność", html: "Nie musisz się rejestrować ani udostępniać swoich danych. Twój postęp i ukończone przygody są zapisywane tylko na Twoim urządzeniu." },
  { type: "card", icon: "mdi:share-variant", title: "Zdrowa Viralowość", html: "Udostępniaj wyzwania, które inspirują innych do wyjścia z własnej bańki, zamiast napędzać ciągłe porównywanie się w mediach społecznościowych." },
  { type: "card", icon: "mdi:trophy-outline", title: "Grywalizacja", html: "Zbieraj ekskluzywne odznaki za każdą ukończoną kategorię wyzwań." }
];

const faq: ToolLocaleContent<MiniAdventuresUI>['faq'] = [
  { question: "Co to jest mikro-przygoda?", answer: "To krótka, lokalna, tania i prosta przygoda. Termin ten (spopularyzowany przez Alastaira Humphreysa) ma na celu pokazanie, że nie trzeba jechać na drugą stronę świata, aby przeżyć ekscytujące doświadczenia." },
  { question: "Do czego służy ten generator?", answer: "Służy on do zwalczania paraliżu decyzyjnego. Czasami chcemy zrobić coś innego, ale nie wiemy co. Ten symulator wybiera za Ciebie losowe wyzwanie, zdejmując z Ciebie psychiczny ciężar decydowania." },
  { question: "Czy muszę rejestrować swoje przygody?", answer: "Nie. To jest narzędzie w pełni dbające o prywatność. Wyzwania są generowane losowo w Twojej przeglądarce i nie zapisujemy żadnego rodzaju zapisu tego, co robisz ani dokąd idziesz." },
  { question: "Czy mogę zaproponować nowe przygody?", answer: "Oczywiście! Kod tego narzędzia jest otwarty. Jeśli masz pomysły na zabawne wyzwania, które nie wymagają dużego budżetu ani czasu, możesz je zasugerować poprzez repozytorium na GitHubie." }
];

const bibliography: ToolLocaleContent<MiniAdventuresUI>['bibliography'] = [
  { name: "Alastair Humphreys: Microadventures", url: "https://alastairhumphreys.com/blog/microadventures-3/" },
  { name: "Rob Walker: The Art of Noticing", url: "https://www.goodreads.com/es/book/show/41552704-the-art-of-noticing" }
];

const howTo: ToolLocaleContent<MiniAdventuresUI>['howTo'] = [
  { name: "Generuj", text: "Naciśnij przycisk generowania, aby otrzymać losowe wyzwanie." },
  { name: "Zrób to", text: "Spróbuj ukończyć wyzwanie przed końcem dnia." },
  { name: "Ukończ", text: "Oznacz wyzwanie jako wykonane, aby zdobywać odznaki i postęp." }
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
  applicationCategory: 'TravelApplication',
  operatingSystem: 'All',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  inLanguage: 'pl',
};

export const content: ToolLocaleContent<MiniAdventuresUI> = {
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
  howToTitle: "Jak to działa",
  schemas: [faqSchema, howToSchema, appSchema],
};
