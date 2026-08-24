import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { TripExpenseSplitterUI } from '../ui';
import { bibliographyEntries } from '../bibliography';

const slug = 'ausgaben-teilen-reisen-rechner';
const title = "Reiseausgaben Teiler für Gemeinsame Kosten";
const description = "Teilen Sie gemeinsame Reiseausgaben unter Mitreisenden auf, sehen Sie wer zu viel oder zu wenig gezahlt hat, und begleichen Sie die Gruppe mit minimalen Transfers.";

const ui: TripExpenseSplitterUI = {
  "tripNameLabel": "Reisename",
  "tripNamePlaceholder": "Name dieser Reise",
  "currencyLabel": "Währung",
  "travelersHeading": "Mitreisende",
  "travelerPlaceholder": "Mitreisender",
  "addTraveler": "Person hinzufügen",
  "removeTraveler": "Person entfernen",
  "expensesHeading": "Ausgabenbuch",
  "expenseDescriptionPlaceholder": "Wofür war die Ausgabe?",
  "amountLabel": "Betrag",
  "payerLabel": "Bezahlt von",
  "participantsLabel": "Aufgeteilt auf",
  "allTravelers": "Reisende",
  "addExpense": "Ausgabe hinzufügen",
  "emptyExpenses": "Ihr Ausgabenbuch ist leer. Fügen Sie die erste gemeinsame Ausgabe hinzu.",
  "resultHeading": "Vorgeschlagene Zahlungen",
  "totalSpent": "Gesamtausgaben der Gruppe",
  "transferCount": "Transfers",
  "noTransfers": "Alle sind quitt. Keine Zahlungen erforderlich.",
  "owes": "schuldet",
  "receives": "erhält",
  "from": "von",
  "to": "an",
  "eachPays": "Jede Person zahlt",
  "eachReceives": "Jede Person erhält",
  "settlementHint": "Der Verlauf zeigt die Personen dieser Reise und den Abrechnungspfad.",
  "copyLink": "Link kopieren",
  "copied": "Link kopiert",
  "exportJson": "JSON exportieren",
  "reset": "Neu starten",
  "removeExpense": "Ausgabe entfernen",
  "deleteTrip": "Reise zurücksetzen",
  "intro": "Geben Sie ein, was die Gruppe bezahlt hat. Der unten stehende Pfad erstellt einen kurzen Abrechnungsplan.",
  "statusBalanced": "Ausgeglichene Reise",
  "statusSettle": "Bereit zur Abrechnung",
  "statusReady": "Warten auf Ausgaben",
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
  "defaultTripName": "Alpen-Wochenende",
  "defaultTravelerNames": [
    "Maya",
    "Alex",
    "Sam"
  ],
  "defaultExpenseNames": [
    "Hütte",
    "Zugtickets"
  ]
};

const seo: ToolLocaleContent<TripExpenseSplitterUI>['seo'] = [
  {
    "type": "title",
    "text": "Gemeinsame Reiseausgaben fair und einfach aufteilen",
    "level": 2
  },
  {
    "type": "paragraph",
    "html": "Gruppenreisen lassen sich am einfachsten abrechnen, wenn jede Ausgabe einen Zahler und klare Teilnehmer hat. Dieser Rechner summiert die Zahlungen jedes Mitreisenden, teilt die Kosten auf die jeweiligen Personen auf und ermittelt den einfachsten Abrechnungsplan."
  },
  {
    "type": "title",
    "text": "Wie die Reisekostenabrechnung berechnet wird",
    "level": 2
  },
  {
    "type": "table",
    "headers": [
      "Phase",
      "Berechnung",
      "Zweck"
    ],
    "rows": [
      [
        "Gezahlt gesamt",
        "Summe der Ausgaben je Mitreisendem",
        "Erfasst das bereits ausgelegte Geld"
      ],
      [
        "Faire Quote",
        "Aufteilung der Ausgabe auf ausgewählte Personen",
        "Weist Kosten den tatsächlichen Nutzern zu"
      ],
      [
        "Nettosaldo",
        "Gezahlt gesamt minus faire Quote",
        "Zeigt wer Geld bekommt oder zahlt"
      ],
      [
        "Abrechnung",
        "Verrechnung von Schulden und Guthaben",
        "Minimiert die Anzahl der Überweisungen"
      ]
    ]
  },
  {
    "type": "tip",
    "title": "Vereinbaren Sie die Aufteilung vor der Eingabe",
    "html": "Nutzen Sie die Auswahl-Chips für jede Ausgabe. Eine Unterkunft nutzen meist alle, ein Museumsticket oder ein privates Essen oft nur einzelne Personen."
  },
  {
    "type": "title",
    "text": "Einfache Abrechnung zum Reiseende",
    "level": 2
  },
  {
    "type": "paragraph",
    "html": "Das Ergebnis dient als Planungshilfe. Prüfen Sie das Ausgabenbuch gemeinsam und nutzen Sie die vorgeschlagenen Transfers für die kürzeste Abrechnung."
  }
];

const faq = [
  {
    "question": "Wie funktioniert der Reisekosten-Teiler?",
    "answer": "Geben Sie Mitreisende, Ausgaben, Zahler und Beteiligte ein. Der Rechner ermittelt die Nettosalden und erstellt eine Liste mit möglichst wenigen Direktüberweisungen."
  },
  {
    "question": "Können Ausgaben nur für einzelne Personen gelten?",
    "answer": "Ja. Wählen Sie bei jeder Ausgabe genau die Personen aus, die daran beteiligt waren."
  },
  {
    "question": "Werden meine Reisedaten hochgeladen?",
    "answer": "Nein. Der Rechner läuft lokal im Browser. Sie können Daten per JSON oder Link exportieren."
  },
  {
    "question": "Warum gibt es weniger Überweisungen als Ausgaben?",
    "answer": "Das Tool verrechnet Schulden und Guthaben aller Personen untereinander, um unnötiges Hin- und Herüberweisen zu vermeiden."
  }
];

const howTo = [
  {
    "name": "Mitreisende hinzufügen",
    "text": "Tragen Sie die Namen aller Personen ein, die an der Abrechnung teilnehmen."
  },
  {
    "name": "Ausgaben erfassen",
    "text": "Geben Sie Beschreibung, Betrag, Zahler und Beteiligte ein."
  },
  {
    "name": "Abrechnungsplan nutzen",
    "text": "Prüfen Sie die Nettosalden und begleichen Sie die Gruppe mit minimalen Transfers."
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

export const content: ToolLocaleContent<TripExpenseSplitterUI> = {
  slug,
  title,
  description,
  ui,
  seo,
  faq,
  howTo,
  howToTitle: "So teilen Sie gemeinsame Reiseausgaben",
  schemas: [appSchema, faqSchema, howToSchema],
  bibliography: bibliographyEntries,
};
