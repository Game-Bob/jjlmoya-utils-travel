import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { FuelCostCalculatorUI } from '../ui';
import { bibliographyEntries } from '../bibliography';

const slug = 'kraftstoffkostenrechner-fahrt';
const title = "Kraftstoffkostenrechner für Autofahrten";
const description = "Schätzen Sie die Spritkosten Ihrer Fahrt anhand von Distanz, Fahrzeugverbrauch, Zapfsäulenpreis, Passagieren und Hin- oder Rückfahrt.";

const ui: FuelCostCalculatorUI = {
  "metricLabel": "Metrisch",
  "imperialLabel": "Imperial",
  "routeHeading": "Fahrtdetails anpassen",
  "distanceLabel": "Einfache Entfernung",
  "distanceHint": "Wie weit ist Ihr Ziel entfernt?",
  "consumptionLabel": "Fahrzeugverbrauch",
  "consumptionHint": "Verbrauch Ihres Autos eingeben",
  "priceLabel": "Kraftstoffpreis",
  "priceHint": "Aktuellen Preis an der Zapfsäule eingeben",
  "passengersLabel": "Mitfahrer",
  "roundTripLabel": "Hin- und Rückfahrt",
  "currencyLabel": "Währung",
  "presetsLabel": "Schnellrouten",
  "presetCommute": "Tägliche Fahrt",
  "presetWeekend": "Wochenendausflug",
  "presetRoadTrip": "Große Reise",
  "resultHeading": "Prognose der Spritkosten",
  "totalDistanceLabel": "Gesamtentfernung",
  "fuelUsedLabel": "Benötigter Kraftstoff",
  "totalCostLabel": "Gesamte Spritkosten",
  "perPersonLabel": "Kosten pro Mitfahrer",
  "routeStatement": "{distance} {unit} Hin- und Rückfahrt, geteilt durch {passengers}",
  "routeOneWayStatement": "{distance} {unit} einfache Fahrt, geteilt durch {passengers}",
  "statusLight": "Geringe Kosten",
  "statusMedium": "Guter Ausflug zum Teilen",
  "statusHigh": "Große Fahrt",
  "sampleButton": "Beispiel laden",
  "resetButton": "Zurücksetzen",
  "litersUnit": "L",
  "gallonsUnit": "gal",
  "distanceMetricUnit": "km",
  "distanceImperialUnit": "mi",
  "consumptionMetricUnit": "L/100 km",
  "consumptionImperialUnit": "mpg",
  "priceMetricUnit": "pro Liter",
  "priceImperialUnit": "pro Gallone",
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
    "text": "Spritkosten vor einer Autofahrt realistisch berechnen",
    "level": 2
  },
  {
    "type": "paragraph",
    "html": "Für eine genaue Kraftstoffberechnung werden vier Angaben benötigt: die einfache Distanz, der Durchschnittsverbrauch Ihres Fahrzeugs, der Spritpreis an der Tankstelle und die Anzahl der Mitfahrer. Dieser Rechner verdoppelt die Strecke bei Hin- und Rückfahrt, ermittelt den benötigten Kraftstoff und teilt die Kosten gerecht auf alle Personen auf."
  },
  {
    "type": "title",
    "text": "Formel zur Kraftstoffkostenberechnung",
    "level": 2
  },
  {
    "type": "table",
    "headers": [
      "Schritt",
      "Berechnung",
      "Ergebnis"
    ],
    "rows": [
      [
        "Gesamtdistanz",
        "Einfache Strecke x 2 bei Hin- und Rückfahrt",
        "Tatsächliche Fahrstrecke in km oder Meilen"
      ],
      [
        "Kraftstoffverbrauch",
        "Gesamtdistanz x Verbrauch / 100",
        "Benötigte Liter für die gesamte Route"
      ],
      [
        "Gesamtkosten",
        "Kraftstoffverbrauch x Tankstellenpreis",
        "Geschätzte Gesamtausgaben für Sprit"
      ],
      [
        "Kosten pro Person",
        "Gesamtkosten / Anzahl Mitfahrer",
        "Faire Aufteilung der Kosten in der Gruppe"
      ]
    ]
  },
  {
    "type": "tip",
    "title": "Manuelle Preiseingabe nutzen",
    "html": "Kraftstoffpreise variieren je nach Tankstelle, Land, Kraftstoffart und Tageszeit. Geben Sie den aktuellen Preis manuell ein, um eine transparente Planungsgrundlage zu erhalten."
  },
  {
    "type": "title",
    "text": "Metrische und imperiale Einheiten",
    "level": 2
  },
  {
    "type": "paragraph",
    "html": "Der Rechner unterstützt sowohl Kilometer und Liter pro 100 Kilometer als auch Meilen und Meilen pro Gallone (mpg). Das Umschalten der Einheiten ändert nichts an den zugrunde liegenden Gesamtkosten."
  },
  {
    "type": "list",
    "items": [
      "Planen Sie einen kleinen Puffer für Umwege und Parksuche ein.",
      "Nutzen Sie den Re 실wert Ihres Fahrzeugs statt theoretischer Prospektangaben.",
      "Berechnen Sie bei mehreren Zwischenstopps oder Fahrzeugen jede Etappe einzeln."
    ]
  }
];

const faq = [
  {
    "question": "Wie berechne ich die Spritkosten für eine Autofahrt?",
    "answer": "Multiplizieren Sie die Gesamtdistanz mit dem Verbrauch Ihres Autos, teilen Sie durch 100 bei L/100 km und multiplizieren Sie das Ergebnis mit dem Literpreis. Teilen Sie die Summe durch die Anzahl der Mitfahrer."
  },
  {
    "question": "Berücksichtigt der Rechner auch Hin- und Rückfahrten?",
    "answer": "Ja. Aktivieren Sie die Option Hin- und Rückfahrt. Der Rechner verdoppelt die Entfernung automatisch vor der Kostenberechnung."
  },
  {
    "question": "Werden Echtzeit-Spritpreise verwendet?",
    "answer": "Nein. Sie geben den Zapfsäulenpreis manuell ein. Das garantiert eine transparente und flexible Berechnung für jeden Ort."
  },
  {
    "question": "Kann ich mit Meilen und Gallonen rechnen?",
    "answer": "Ja. Schalten Sie auf das imperiale System um, um Meilen und mpg einzugeben. Die mathematische Umrechnung erfolgt im Hintergrund."
  }
];

const howTo = [
  {
    "name": "Einheitensystem wählen",
    "text": "Wählen Sie Metrisch für km und L/100km oder Imperial für Meilen und mpg."
  },
  {
    "name": "Fahrtdaten eingeben",
    "text": "Geben Sie einfache Distanz, Fahrzeugverbrauch, Spritpreis und Mitfahreranzahl ein."
  },
  {
    "name": "Ergebnis prüfen",
    "text": "Aktivieren Sie bei Bedarf Hin- und Rückfahrt und lesen Sie Gesamtkosten sowie Kosten pro Person ab."
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
  inLanguage: 'de',
};

export const content: ToolLocaleContent<FuelCostCalculatorUI> = {
  slug,
  title,
  description,
  ui,
  seo,
  faq,
  howTo,
  howToTitle: "So berechnen Sie die Spritkosten Ihrer Fahrt",
  schemas: [faqSchema, howToSchema, appSchema],
  bibliography: bibliographyEntries,
};
