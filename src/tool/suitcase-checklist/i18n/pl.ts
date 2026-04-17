import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { SuitcaseChecklistUI } from '../index';

const slug = 'generator-listy-rzeczy-do-walizki';
const title = 'Generator Listy do Walizki | Stwórz swoją listę pakowania';
const description = 'Najlepsze narzędzie online do organizowania bagażu na podstawie rodzaju podróży, celu i czasu trwania. Nigdy więcej nie zapomnij o niezbędnych rzeczach w podróży.';

const ui: SuitcaseChecklistUI = {
  title: "Planer Pakowania",
  form: {
    destTitle: "Cel i Klimat",
    destTypes: [
      { id: "playa", name: "Plaża / Wybrzeże", icon: "mdi:beach" },
      { id: "ciudad", name: "Miasto / Tereny miejskie", icon: "mdi:city" },
      { id: "montana", name: "Góry / Tereny wiejskie", icon: "mdi:pine-tree" },
      { id: "frio", name: "Zimno / Śnieg", icon: "mdi:snowflake" }
    ],
    daysTitle: "Ile dni?",
    intlTitle: "Podróż zagraniczna?",
    intlLabel: "Tak, przekraczanie granic",
    reasonTitle: "Cel podróży",
    reasons: [
      { id: "ocio", name: "Relaks / Przyjemność", icon: "mdi:party-popper" },
      { id: "negocios", name: "Służbowa", icon: "mdi:tie" }
    ],
    submitBtn: "Skonfiguruj Idealny Bagaż"
  },
  results: {
    title: "Twoja Lista Pakowania",
    editBtn: "Edytuj",
    printBtn: "Zapisz PDF",
    tipsTitle: "Porady Podróżne",
    progressText: "Ukończono"
  },
  itemsDb: {
    essentials: {
      id: "essentials",
      title: "Dokumenty i Podstawa",
      icon: "mdi:passport",
      items: [
        { label: "Dowód osobisty / Paszport" },
        { label: "Karty bankowe" },
        { label: "Gotówka" },
        { label: "Bilety (Samolot/Pociąg)" },
        { label: "Potwierdzenia rezerwacji" },
        { label: "Klucze do domu" },
        { label: "Dokumenty międzynarodowe", dynamicId: "item-internacional" }
      ]
    },
    technology: {
      id: "technology",
      title: "Technologia",
      icon: "mdi:laptop",
      items: [
        { label: "Telefon komórkowy" },
        { label: "Ładowarka do telefonu" },
        { label: "Słuchawki" },
        { label: "Powerbank" },
        { label: "Adapter sieciowy", dynamicId: "item-adaptador" }
      ]
    },
    toiletries: {
      id: "toiletries",
      title: "Przybory Toaletowe",
      icon: "mdi:toothbrush",
      items: [
        { label: "Szczoteczka i pasta do zębów" },
        { label: "Dezodorant" },
        { label: "Żel i szampon" },
        { label: "Grzebień / Szczotka" },
        { label: "Mini apteczka" },
        { label: "Osobiste leki" }
      ]
    },
    clothing_base: {
      id: "clothing_base",
      title: "Odzież Codzienna",
      icon: "mdi:tshirt-crew",
      items: [
        { label: "Bielizna", dynamicId: "qty-ropa-interior" },
        { label: "Koszulki / Topy", dynamicId: "qty-camisetas" },
        { label: "Spodnie", dynamicId: "qty-pantalones" },
        { label: "Skarpetki", dynamicId: "qty-calcetines" },
        { label: "Piżama" },
        { label: "Lekka kurtka" },
        { label: "Wygodne buty codzienne" }
      ]
    }
  },
  specificItems: {
    destType: {
      playa: {
        id: "dest-playa",
        title: "Na Wybrzeże",
        icon: "mdi:beach",
        items: [
          { label: "Kostium kąpielowy" },
          { label: "Ręcznik plażowy" },
          { label: "Krem z filtrem" },
          { label: "Okulary przeciwsłoneczne" },
          { label: "Klapki" },
          { label: "Kapelusz lub czapka" }
        ]
      },
      ciudad: {
        id: "dest-ciudad",
        title: "Miejski",
        icon: "mdi:city",
        items: [
          { label: "Sneakersy do chodzenia" },
          { label: "Mały bezpieczny plecak" },
          { label: "Kompaktowa parasolka" },
          { label: "Przewodnik po mieście" }
        ]
      },
      montana: {
        id: "dest-montana",
        title: "Górski",
        icon: "mdi:pine-tree",
        items: [
          { label: "Buty trekkingowe" },
          { label: "Wiatrówka" },
          { label: "Spodnie trekkingowe" },
          { label: "Butelka na wodę" },
          { label: "Plecak górski" }
        ]
      },
      frio: {
        id: "dest-frio",
        title: "Zimny Klimat",
        icon: "mdi:snowflake",
        items: [
          { label: "Gruby płaszcz" },
          { label: "Czapka i rękawiczki" },
          { label: "Obuwie zimowe" },
          { label: "Koszulki termiczne" },
          { label: "Szalik" }
        ]
      }
    },
    travelType: {
      negocios: {
        id: "travel-negocios",
        title: "Służbowa",
        icon: "mdi:tie",
        items: [
          { label: "Garnitur / Strój formalny" },
          { label: "Koszule wyjściowe" },
          { label: "Buty wizytowe" },
          { label: "Laptop" },
          { label: "Ładowarka do laptopa" },
          { label: "Dokumenty do pracy" }
        ]
      },
      ocio: {
        id: "travel-ocio",
        title: "Rekreacja",
        icon: "mdi:camera",
        items: [
          { label: "Ubrania na wieczorne wyjścia" },
          { label: "Aparat (opcjonalnie)" },
          { label: "Książka / Rozrywka" }
        ]
      }
    }
  },
  tips: {
    military: "Rolowanie ubrań w stylu 'wojskowym' bardzo pomaga zapobiegać zagnieceniom i oszczędza miejsce.",
    longTravel: "Wybierasz się na ponad tydzień. Zaplanuj pranie podstawowych rzeczy w połowie podróży.",
    intlPassport: "Podróż zagraniczna: Sprawdź dziś, czy Twój paszport jest ważny przez co najmniej 6 miesięcy.",
    intlBank: "Sprawdź wymagane wizy lub czy Twój bank pobiera opłaty za transakcje zagraniczne.",
    intlAdapter: "Nie zapomnij o adapterze uniwersalnym, jeśli gniazdka w miejscu docelowym są inne!",
    coldLayers: "W zimne dni ubieraj się na cebulkę: warstwa termiczna, izolacja i wodoodporna warstwa zewnętrzna.",
    coldHeavyOn: "Najbardziej nieporęczne/ciężkie rzeczy załóż na siebie do samolotu, aby oszczędzić miejsce w bagażu.",
    beachWet: "Spakuj więcej niż jeden kostium kąpielowy; wilgoć może uniemożliwić ich wyschnięcie przez noc."
  }
};

const seo: ToolLocaleContent<SuitcaseChecklistUI>['seo'] = [
  { type: "title", text: "Generator Listy do Walizki: Twój idealny towarzysz podróży", level: 2 },
  { type: "paragraph", html: "Pakowanie walizki to często jeden z najbardziej stresujących momentów przed podróżą. Strach przed zapomnieniem czegoś ważnego, wątpliwości co do pogody na miejscu czy niepewność co do ilości bagażu mogą przyćmić dni przed wyczekiwanym urlopem. Właśnie tutaj <strong>generator listy do walizki</strong> staje się Twoim najlepszym sojusznikiem." },
  {
    type: "summary",
    title: "Korzyści z korzystania z naszego kreatora list",
    items: [
      "Absolutna personalizacja dostosowana do klimatu Twojego celu (plaża, góry, miasto lub śnieg).",
      "Automatyczne obliczanie ilości ubrań na podstawie czasu trwania Twojego wyjazdu.",
      "Drastyczna redukcja stresu logistycznego dzięki interaktywnej liście, którą możesz odznaczać.",
      "Optymalizacja miejsca w bagażu, pozwalająca uniknąć syndromu 'na wszelki wypadek'."
    ]
  },
  { type: "title", text: "Dlaczego planowanie bagażu jest fundamentalne?", level: 3 },
  { type: "paragraph", html: "Podróżowanie to doświadczenie zmieniające życie, ale słabe planowanie może przynieść niepotrzebne bóle głowy. Korzystając z naszego inteligentnego narzędzia, automatyzujesz proces, który w przeciwnym razie zająłby godziny obliczeń i zapamiętywania. Efektywna organizacja to podstawa każdej udanej przygody." }
];

const faq: ToolLocaleContent<SuitcaseChecklistUI>['faq'] = [
  { question: "Czy mogę zapisać wygenerowaną listę?", answer: "Możesz zaznaczać i odznaczać elementy na liście, a także skorzystać z przycisku, aby ją wydrukować lub zapisać jako plik PDF na swoim urządzeniu." },
  { question: "Jak obliczana jest ilość ubrań?", answer: "Nasze narzędzie szacuje zestawy ubrań na podstawie wybranego czasu trwania podróży, promując lekkie podróżowanie i optymalizację bagażu." },
  { question: "Czy działa dla zimnej pogody i śniegu?", answer: "Tak, możesz wybrać cel o zimnym klimacie, aby lista kontrolna automatycznie zawierała niezbędne przedmioty w takich warunkach." },
  { question: "Czy narzędzie jest darmowe?", answer: "Tak, nasz generator listy pakowania do walizki jest w 100% darmowy i nie wymaga rejestracji ani pobierania dodatkowych aplikacji." }
];

const bibliography: ToolLocaleContent<SuitcaseChecklistUI>['bibliography'] = [
  { name: "KonMari - Jak spakować walizkę metodą KonMari", url: "https://konmari.com/how-to-konmari-a-suitcase/" },
  { name: "Eagle Creek - Co spakować: Najlepsza lista kontrolna pakowania w podróży", url: "https://eaglecreek.com/blogs/articles/what-pack-ultimate-travel-packing-checklist" }
];

const howTo: ToolLocaleContent<SuitcaseChecklistUI>['howTo'] = [
  { name: "Zdefiniuj swoja podróż", text: "Wybierz klimat, powód i czas trwania swojego wyjazdu." },
  { name: "Generuj listę", text: "Naciśnij przycisk i natychmiast otrzymaj wszystkie niezbędne rzeczy, od kosmetyków po technologię." },
  { name: "Spakuj walizkę", text: "Odznaczaj przedmioty w miarę ich pakowania, aby o niczym istotnym nie zapomnieć." }
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
  applicationCategory: 'UtilitiesApplication',
  operatingSystem: 'All',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  inLanguage: 'pl',
};

export const content: ToolLocaleContent<SuitcaseChecklistUI> = {
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
  howToTitle: "Jak spakować walizkę",
  schemas: [faqSchema, howToSchema, appSchema],
};
