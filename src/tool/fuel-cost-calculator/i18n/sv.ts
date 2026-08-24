import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { FuelCostCalculatorUI } from '../ui';
import { bibliographyEntries } from '../bibliography';

const slug = 'branslekostnad-kalkylator-bilresa';
const title = "Bränslekostnad Kalkylator för Bilresor";
const description = "Beräkna den uppskattade bränslekostnaden för din bilresa baserat på avstånd, bilens förbrukning, pumppris, passagerare och enkel eller tur-och-retur-resa.";

const ui: FuelCostCalculatorUI = {
  "metricLabel": "Metrisk",
  "imperialLabel": "Imperial",
  "routeHeading": "Anpassa din resa",
  "distanceLabel": "Enkel resa",
  "distanceHint": "Hur långt är det till destinationen?",
  "consumptionLabel": "Fordonets förbrukning",
  "consumptionHint": "Ange bilens förbrukning",
  "priceLabel": "Bränslepris",
  "priceHint": "Ange aktuellt pris per liter",
  "passengersLabel": "Passagerare",
  "roundTripLabel": "Tur och retur",
  "currencyLabel": "Valuta",
  "presetsLabel": "Snabbval",
  "presetCommute": "Daglig pendling",
  "presetWeekend": "Helgresa",
  "presetRoadTrip": "Långresa",
  "resultHeading": "Bränsleprognos",
  "totalDistanceLabel": "Total sträcka",
  "fuelUsedLabel": "Bränsle som krävs",
  "totalCostLabel": "Total bränslekostnad",
  "perPersonLabel": "Kostnad per passagerare",
  "routeStatement": "{distance} {unit} tur och retur, delat på {passengers} personer",
  "routeOneWayStatement": "{distance} {unit} enkel resa, delat på {passengers} personer",
  "statusLight": "Låg kostnad",
  "statusMedium": "Bra resa att dela",
  "statusHigh": "Långresa",
  "sampleButton": "Ladda exempel",
  "resetButton": "Återställ",
  "litersUnit": "L",
  "gallonsUnit": "gal",
  "distanceMetricUnit": "km",
  "distanceImperialUnit": "mi",
  "consumptionMetricUnit": "L/100 km",
  "consumptionImperialUnit": "mpg",
  "priceMetricUnit": "per liter",
  "priceImperialUnit": "per gallon",
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
    "text": "Beräkna bränslebudgeten inför din bilresa",
    "level": 2
  },
  {
    "type": "paragraph",
    "html": "För att beräkna bränslekostnaden för en bilresa behövs fyra uppgifter: enkel sträcka, bilens genomsnittliga förbrukning, literpriset på macken och antal passagerare. Kalkylatorn dubblerar sträckan vid tur och retur och delar totalkostnaden jämnt."
  },
  {
    "type": "title",
    "text": "Formel för beräkning av bränslekostnad",
    "level": 2
  },
  {
    "type": "table",
    "headers": [
      "Steg",
      "Tillämpad beräkning",
      "Resultat"
    ],
    "rows": [
      [
        "Total sträcka",
        "Enkel sträcka x 2 för tur och retur",
        "Faktiskt köravstånd i km eller miles"
      ],
      [
        "Bränsleförbrukning",
        "Total sträcka x Förbrukning / 100",
        "Totalt antal liter bränsle som krävs"
      ],
      [
        "Total kostnad",
        "Förbrukat bränsle x Literpris",
        "Uppskattad total bränslekostnad"
      ],
      [
        "Kostnad per person",
        "Total kostnad / Antal passagerare",
        "Rättvis kostnad per person"
      ]
    ]
  },
  {
    "type": "tip",
    "title": "Ange det faktiska mackpriset",
    "html": "Bränslepriser varierar beroende på station och land. Ange det literpris du förväntar dig att betala för att få en tillförlitlig beräkning."
  },
  {
    "type": "title",
    "text": "Metriska och imperiala enheter",
    "level": 2
  },
  {
    "type": "paragraph",
    "html": "Det metriska läget använder kilometer och liter per 100 km, medan det imperiala läget använder miles och mpg. Att byta enhet ändrar inte totalkostnaden."
  },
  {
    "type": "list",
    "items": [
      "Lägg till en liten marginal för omvägar och parkering.",
      "Använd bilens verkliga förbrukning istället för teoretiska siffror.",
      "Vid långresor med flera tankningar kan varje etapp beräknas separat."
    ]
  }
];

const faq = [
  {
    "question": "Hur beräknar jag bränslekostnaden för en bilresa?",
    "answer": "Multiplicera den totala sträckan med bilens förbrukning, dela med 100 för L/100 km och multiplicera med literpriset. Dela totalsumman med antalet passagerare."
  },
  {
    "question": "Räknar kalkylatorn med tur och retur?",
    "answer": "Ja. Aktivera Tur och retur så dubblerar kalkylatorn sträckan automatiskt innan beräkningen."
  },
  {
    "question": "Använder kalkylatorn live-priser?",
    "answer": "Nej. Du anger priset själv vilket gör beräkningen transparent och anpassningsbar för alla mackar."
  },
  {
    "question": "Kan jag beräkna i miles och gallons?",
    "answer": "Ja. Byt till Imperialt läge för att ange miles och mpg."
  }
];

const howTo = [
  {
    "name": "Välj enhetssystem",
    "text": "Välj Metrisk för km och L/100km eller Imperial för miles och mpg."
  },
  {
    "name": "Ange resedata",
    "text": "Fyll i enkel sträcka, förbrukning, literpris och antal passagerare."
  },
  {
    "name": "Granska kostnadsfördelningen",
    "text": "Slå på tur och retur vid behov, välj valuta och se kostnaden per person."
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

export const content: ToolLocaleContent<FuelCostCalculatorUI> = {
  slug,
  title,
  description,
  ui,
  seo,
  faq,
  howTo,
  howToTitle: "Så beräknar du bränslekostnaden för din bilresa",
  schemas: [faqSchema, howToSchema, appSchema],
  bibliography: bibliographyEntries,
};
