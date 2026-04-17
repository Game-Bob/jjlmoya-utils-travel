import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { TipCalculatorUI } from '../index';

const slug = 'miedzynarodowy-kalkulator-napiwkow';
const title = 'Międzynarodowy kalkulator napiwków';
const description = 'Oblicz, ile napiwku zostawić podczas podróży. Zawiera przewodnik po procentach i zasady etykiety dla ponad 50 krajów. Nie pomyl się przy płaceniu!';

const ui: TipCalculatorUI = {
  title: "Kalkulator napiwków",
  badge: "Międzynarodowe narzędzie",
  billLabel: "Kwota rachunku",
  countryLabel: "Kraj / Lokalne zwyczaje",
  tipLabel: "Procent napiwku",
  splitLabel: "Podziel rachunek",
  summaryTip: "Suma napiwku",
  summarySubtotal: "Kwota netto",
  summaryTotalPerson: "Suma na osobę",
  protocolTitle: "Etykieta",
  placeholderAmount: "0.00",
  placeholderFilter: "Szukaj kraju...",
  placeholderSelect: "Wybierz kraj",
  countries: [
    {
      id: "usa",
      name: "USA i Kanada",
      min: 18,
      max: 25,
      default: 20,
      culture: "Napiwki są kluczowe dla pensji kelnerów. Oczekuje się od 18% do 25%. Niepozostawienie napiwku jest uważane za poważne naruszenie kultury północnoamerykańskiej.",
    },
    {
      id: "esp",
      name: "Hiszpania",
      min: 0,
      max: 10,
      default: 5,
      culture: "Opcjonalne. Zazwyczaj zaokrągla się resztę lub zostawia 5-10% przy kolacji, jeśli obsługa była wysokiej jakości.",
    },
    {
      id: "jpn",
      name: "Japonia",
      min: 0,
      max: 0,
      default: 0,
      culture: "Brak napiwków. Jest to uważane za obrazę profesjonalizmu. Jeśli zostawisz pieniądze, prawdopodobnie pobiegną za Tobą, aby je oddać.",
    },
    {
      id: "ita",
      name: "Włochy",
      min: 0,
      max: 10,
      default: 0,
      culture: "'Coperto' to opłata za nakrycie, chleb i obsługę, to nie jest sam napiwek. Zostawienie dodatkowych 5-10% jest mile widzianym, ale całkowicie opcjonalnym gestem.",
    },
    {
      id: "fra",
      name: "Francja",
      min: 0,
      max: 10,
      default: 5,
      culture: "Obsługa jest wliczona w cenę ustawowo. Zostaw 'pourboire' (mały dodatek) tylko za wyjątkową obsługę.",
    },
    {
      id: "gbr",
      name: "Wielka Brytania",
      min: 0,
      max: 12.5,
      default: 10,
      culture: "Do rachunku często doliczana jest opcjonalna opłata za obsługę w wysokości 12,5%. Jeśli jej nie ma, standardem w restauracjach jest 10%.",
    },
    {
      id: "mex",
      name: "Meksyk",
      min: 10,
      max: 15,
      default: 12,
      culture: "Oczekuje się 'propina' w wysokości 10-15%. Jest to istotna część gospodarki dla pracowników tego sektora.",
    },
    {
      id: "arg",
      name: "Argentyna",
      min: 0,
      max: 10,
      default: 10,
      culture: "Standardem jest 10%. Zostawia się go prawie zawsze, jeśli obsługa była normalna lub dobra.",
    },
    {
      id: "bra",
      name: "Brazylia",
      min: 0,
      max: 10,
      default: 10,
      culture: "Zazwyczaj do rachunku doliczana jest opłata 10% jako 'Serviço'. Jest ona opcjonalna, ale większość osób ją płaci.",
    },
    {
      id: "deu",
      name: "Niemcy",
      min: 5,
      max: 10,
      default: 7,
      culture: "Powszechne jest zaokrąglanie w górę lub dodawanie 5-10%. Przy płaceniu powiedz kelnerowi całkowitą kwotę wraz z napiwkiem.",
    },
    {
      id: "tur",
      name: "Turcja",
      min: 5,
      max: 10,
      default: 10,
      culture: "W obszarach turystycznych oczekuje się 10% w gotówce. Zazwyczaj nie można go doliczyć do karty płatniczej.",
    },
    {
      id: "aus",
      name: "Australia",
      min: 0,
      max: 10,
      default: 0,
      culture: "Nieoczekiwane. Pensje są wysokie. W luksusowych restauracjach można zostawić 10%.",
    },
    {
      id: "chn",
      name: "Chiny",
      min: 0,
      max: 0,
      default: 0,
      culture: "Historycznie nie zostawia się napiwków, a w wielu miejscach jest to zabronione lub uważane za dziwne.",
    },
    {
      id: "prt",
      name: "Portugalia",
      min: 0,
      max: 10,
      default: 5,
      culture: "Zwyczajowo zostawia się resztę lub zaokrągla kwotę. W obszarach turystycznych 5-10% jest powszechne.",
    },
    {
      id: "grc",
      name: "Grecja",
      min: 0,
      max: 10,
      default: 5,
      culture: "Zazwyczaj wystarczy zaokrąglić rachunek. Dodatkowe 5-10% jest mile widziane, ale nieobowiązkowe.",
    },
  ]
};

const seo: ToolLocaleContent<TipCalculatorUI>['seo'] = [
  {
    type: "title",
    text: "Międzynarodowy przewodnik po napiwkach: Etykieta i procenty 2026",
    level: 2,
  },
  {
    type: "summary",
    title: "Dowiedz się, jak dawać napiwki jak lokalny mieszkaniec w dowolnym miejscu na świecie",
    items: [
      "Kompletny przewodnik po oczekiwanych procentach napiwków w głównych destynacjach turystycznych.",
      "Jak szybko obliczyć napiwek na podstawie kwoty netto lub brutto.",
      "Różnica między opłatą za obsługę, opłatą za nakrycie (coperto) a dobrowolnym napiwkiem.",
      "Zasady etykiety w sytuacjach specjalnych: taksówki, hotele i przewodnicy wycieczek.",
    ],
  },
  {
    type: "paragraph",
    html: "Jednym z najbardziej stresujących momentów każdej międzynarodowej podróży jest chwila, gdy rachunek trafia na stół. Nasz <strong>międzynarodowy kalkulator napiwków</strong> został zaprojektowany, aby wyeliminować tę niepewność.",
  }
];

const faq: ToolLocaleContent<TipCalculatorUI>['faq'] = [
  {
    question: "Czy napiwek w Stanach Zjednoczonych jest obowiązkowy?",
    answer: "Prawnie nie, ale społecznie tak. Kelnerzy polegają na napiwkach, aby osiągnąć płacę minimalną. Normalne jest zostawianie od 18% do 25%.",
  },
  {
    question: "W których krajach zostawianie napiwku jest obraźliwe?",
    answer: "Głównie w Japonii i Korei Południowej. Dobra obsługa jest uważana za część obowiązku i nie wymaga dodatkowej rekompensaty.",
  },
  {
    question: "Czy powiniem dawać napiwek, jeśli obsługa była zła?",
    answer: "W krajach, w których jest on opcjonalny (Europa, Australia), najbardziej poprawnym zachowaniem jest niezostawianie niczego.",
  },
  {
    question: "Czy napiwek liczy się od kwoty przed czy po opodatkowaniu?",
    answer: "W Ameryce Północnej zazwyczaj oblicza się go od kwoty netto (przed opodatkowaniem). W Europie i Ameryce Łacińskiej zawsze od całkowitej kwoty rachunku.",
  },
];

const bibliography: ToolLocaleContent<TipCalculatorUI>['bibliography'] = [
  {
    name: "Condé Nast Traveler: Tipping Etiquette Guide",
    url: "https://www.cntraveler.com/stories/2008-11-11/etiquette-101-tipping-guide",
  },
  {
    name: "Lonely Planet: Napiwki i etykieta w Europie",
    url: "https://www.lonelyplanet.com/articles/tipping-customs-europe",
  },
  {
    name: "Western Union: Global Tipping Guide",
    url: "https://www.westernunion.com/blog/en/global-tipping-guide/",
  },
];

const howTo: ToolLocaleContent<TipCalculatorUI>['howTo'] = [
  {
    name: "Wpisz sumę rachunku",
    text: "Wpisz całkowitą kwotę widniejącą na fakturze przed doliczeniem napiwku.",
  },
  {
    name: "Wybierz kraj",
    text: "Wybierz cel podróży, aby automatycznie załadować zalecenia kulturowe i standardowy procent.",
  },
  {
    name: "Dostosuj i podziel",
    text: "Jeśli jest was więcej, podaj liczbę osób, aby dowiedzieć się, ile każda powinna zapłacić wraz z napiwkiem.",
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
  applicationCategory: 'FinanceApplication',
  operatingSystem: 'All',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'PLN' },
  inLanguage: 'pl',
};

export const content: ToolLocaleContent<TipCalculatorUI> = {
  slug,
  title,
  description,
  ui,
  seo,
  faq,
  faqTitle: "Najczęściej zadawane pytania",
  bibliography,
  bibliographyTitle: "Źródła i referencje",
  howTo,
  howToTitle: "Jak korzystać z kalkulatora",
  schemas: [faqSchema, howToSchema, appSchema],
};
