import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { FuelCostCalculatorUI } from '../ui';
import { bibliographyEntries } from '../bibliography';

const slug = 'brandstofkosten-berekenen-autoreis';
const title = "Brandstofkosten Berekenen voor Autoreizen";
const description = "Bereken eenvoudig de verwachte brandstofkosten van uw autoreis op basis van afstand, verbruik, brandstofprijs per liter, passagiers en retourrit.";

const ui: FuelCostCalculatorUI = {
  "metricLabel": "Metrisch",
  "imperialLabel": "Imperiaal",
  "routeHeading": "Uw reis aanpassen",
  "distanceLabel": "Enkele reisafstand",
  "distanceHint": "Wat is de afstand tot uw bestemming?",
  "consumptionLabel": "Brandstofverbruik",
  "consumptionHint": "Vul het verbruik van uw auto in",
  "priceLabel": "Brandstofprijs",
  "priceHint": "Vul de actuele prijs aan de pomp in",
  "passengersLabel": "Passagiers",
  "roundTripLabel": "Retourrit",
  "currencyLabel": "Valuta",
  "presetsLabel": "Snelkeuze routes",
  "presetCommute": "Dagelijkse rit",
  "presetWeekend": "Weekendje weg",
  "presetRoadTrip": "Grote rondreis",
  "resultHeading": "Brandstofprognose",
  "totalDistanceLabel": "Totale afstand",
  "fuelUsedLabel": "Benodigde brandstof",
  "totalCostLabel": "Totale brandstofkosten",
  "perPersonLabel": "Kosten per passagier",
  "routeStatement": "{distance} {unit} retour, gedeeld door {passengers} personen",
  "routeOneWayStatement": "{distance} {unit} enkele reis, gedeeld door {passengers} personen",
  "statusLight": "Lage kosten",
  "statusMedium": "Prima rit om te delen",
  "statusHigh": "Lange autoreis",
  "sampleButton": "Voorbeeld laden",
  "resetButton": "Resetten",
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
    "text": "Brandstofkosten berekenen voor een zorgeloze autoreis",
    "level": 2
  },
  {
    "type": "paragraph",
    "html": "Om de brandstofkosten nauwkeurig te berekenen heeft u vier gegevens nodig: de enkele afstand, het gemiddelde verbruik van de auto, de literprijs bij het tankstation en het aantal medereizigers. Deze calculator verdubbelt de afstand bij een retourrit en verdeelt de kosten eerlijk."
  },
  {
    "type": "title",
    "text": "Formule voor het berekenen van brandstofkosten",
    "level": 2
  },
  {
    "type": "table",
    "headers": [
      "Stap",
      "Toegepaste berekening",
      "Resultaat"
    ],
    "rows": [
      [
        "Totale afstand",
        "Enkele afstand x 2 voor een retourrit",
        "Werkelijke afstand in km of mijlen"
      ],
      [
        "Brandstofverbruik",
        "Totale afstand x Verbruik / 100",
        "Totaal aantal benodigde liters brandstof"
      ],
      [
        "Totale kosten",
        "Verbruikte liters x Literprijs",
        "Geschatte totale brandstofkosten"
      ],
      [
        "Kosten per persoon",
        "Totale kosten / Aantal passagiers",
        "Eerlijk kostenafsplitsing per persoon"
      ]
    ]
  },
  {
    "type": "tip",
    "title": "Gebruik actuele pompprijzen",
    "html": "Brandstofprijzen verschillen per tankstation en land. Vul de verwachte literprijs handmatig in voor een nauwkeurige en transparante berekening."
  },
  {
    "type": "title",
    "text": "Metrische en imperiale eenheden",
    "level": 2
  },
  {
    "type": "paragraph",
    "html": "De calculator ondersteunt zowel kilometers en liters per 100 km als mijlen en mpg. Het wisselen van eenheden verandert niets aan de totale verwachte kosten."
  },
  {
    "type": "list",
    "items": [
      "Reken een kleine marge voor omrijden en parkeren.",
      "Gebruik het werkelijke verbruik van uw voertuig in plaats van fabrieksopgaven.",
      "Bereken bij lange reizen met meerdere tankbeurten elke etappe afzonderlijk."
    ]
  }
];

const faq = [
  {
    "question": "Hoe bereken ik de brandstofkosten van een autoreis?",
    "answer": "Vermenigvuldig de totale afstand met het gemiddelde verbruik, deel door 100 bij L/100 km en vermenigvuldig met de literprijs. Deel het totaal door het aantal passagiers."
  },
  {
    "question": "Houdt de calculator rekening met een retourrit?",
    "answer": "Ja. Vink Retourrit aan en de calculator verdubbelt automatisch de afstand voor de berekening."
  },
  {
    "question": "Gebruikt de calculator live brandstofprijzen?",
    "answer": "Nee. U vult de prijs zelf in voor een transparante berekening die overal toepasbaar is."
  },
  {
    "question": "Kan ik rekenen met mijlen en gallons?",
    "answer": "Ja. Schakel over naar het imperiale systeem voor mijlen en mpg."
  }
];

const howTo = [
  {
    "name": "Kies het eenhedensysteem",
    "text": "Kies Metrisch voor km en L/100km of Imperiaal voor mijlen en mpg."
  },
  {
    "name": "Vul uw reisgegevens in",
    "text": "Voer enkele afstand, verbruik, brandstofprijs en aantal passagiers in."
  },
  {
    "name": "Bekijk de kostenverdeling",
    "text": "Schakel indien nodig retourrit in, kies uw valuta en bekijk de totale en individuele kosten."
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

export const content: ToolLocaleContent<FuelCostCalculatorUI> = {
  slug,
  title,
  description,
  ui,
  seo,
  faq,
  howTo,
  howToTitle: "Hoe berekent u de brandstofkosten van uw reis",
  schemas: [faqSchema, howToSchema, appSchema],
  bibliography: bibliographyEntries,
};
