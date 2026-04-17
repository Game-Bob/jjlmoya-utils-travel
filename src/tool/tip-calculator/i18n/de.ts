import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { TipCalculatorUI } from '../index';

const slug = 'internationaler-trinkgeld-rechner';
const title = 'Internationaler Trinkgeld Rechner';
const description = 'Berechnen Sie, wie viel Trinkgeld Sie auf Ihren Reisen geben sollten. Inklusive Prozent-Leitfaden und Etikette-Regeln für mehr als 50 Länder. Vermeiden Sie Fettnäpfchen beim Bezahlen!';

const ui: TipCalculatorUI = {
  title: "Trinkgeld Rechner",
  badge: "Internationales Trinkgeld-Tool",
  billLabel: "Rechnungsbetrag",
  countryLabel: "Land / Lokale Gepflogenheiten",
  tipLabel: "Trinkgeld in %",
  splitLabel: "Rechnung teilen",
  summaryTip: "Gesamtes Trinkgeld",
  summarySubtotal: "Zwischensumme",
  summaryTotalPerson: "Gesamt pro Person",
  protocolTitle: "Protokoll & Etikette",
  placeholderAmount: "0,00",
  placeholderFilter: "Land suchen...",
  placeholderSelect: "Wählen Sie ein Land",
  countries: [
    {
      id: "usa",
      name: "USA & Kanada",
      min: 18,
      max: 25,
      default: 20,
      culture: "Trinkgeld ist für das Einkommen des Servicepersonals essenziell. Erwartet werden zwischen 18% und 25%. Kein Trinkgeld zu geben, gilt als schwerer kultureller Fauxpas.",
    },
    {
      id: "esp",
      name: "Spanien",
      min: 0,
      max: 10,
      default: 5,
      culture: "Optional. Es ist üblich, das Wechselgeld aufzurunden oder bei gutem Service 5-10% nach dem Abendessen zu geben.",
    },
    {
      id: "jpn",
      name: "Japan",
      min: 0,
      max: 0,
      default: 0,
      culture: "Kein Trinkgeld. Es wird als Beleidigung der Professionalität angesehen. Wenn Sie Geld liegen lassen, wird man Ihnen wahrscheinlich folgen, um es zurückzugeben.",
    },
    {
      id: "ita",
      name: "Italien",
      min: 0,
      max: 10,
      default: 0,
      culture: "Das 'coperto' ist eine Gebühr für Gedeck und Brot, kein Trinkgeld. Ein zusätzliches Trinkgeld von 5-10% ist eine gern gesehene, aber völlig freiwillige Geste.",
    },
    {
      id: "fra",
      name: "Frankreich",
      min: 0,
      max: 10,
      default: 5,
      culture: "Der Service ist gesetzlich inbegriffen. Geben Sie ein 'pourboire' (kleines Extra) nur für außergewöhnlich gute Bedienung.",
    },
    {
      id: "gbr",
      name: "Großbritannien",
      min: 0,
      max: 12.5,
      default: 10,
      culture: "Oft wird automatisch eine optionale Servicegebühr von 12,5% aufgeschlagen. Wenn nicht, sind 10% in Restaurants Standard.",
    },
    {
      id: "mex",
      name: "Mexiko",
      min: 10,
      max: 15,
      default: 12,
      culture: "Eine 'propina' von 10-15% wird erwartet. Sie ist Teil des Einkommens für die Angestellten im Dienstleistungssektor.",
    },
    {
      id: "arg",
      name: "Argentinien",
      min: 0,
      max: 10,
      default: 10,
      culture: "Der Standard liegt bei 10%. Es wird fast immer gegeben, wenn der Service normal oder gut war.",
    },
    {
      id: "bra",
      name: "Brasilien",
      min: 0,
      max: 10,
      default: 10,
      culture: "In der Regel wird eine Servicegebühr von 10% als 'Serviço' berechnet. Sie ist optional, aber die meisten zahlen sie.",
    },
    {
      id: "deu",
      name: "Deutschland",
      min: 5,
      max: 10,
      default: 7,
      culture: "Üblich ist es, aufzurunden oder 5-10% zu geben. Sagen Sie beim Bezahlen den Gesamtbetrag inklusive Trinkgeld direkt an.",
    },
    {
      id: "tur",
      name: "Türkei",
      min: 5,
      max: 10,
      default: 10,
      culture: "In touristischen Gebieten werden 10% in bar erwartet. Trinkgeld kann meist nicht per Kreditkarte hinzugefügt werden.",
    },
    {
      id: "aus",
      name: "Australien",
      min: 0,
      max: 10,
      default: 0,
      culture: "Nicht erwartet, da die Gehälter hoch sind. In der gehobenen Gastronomie können 10% gegeben werden.",
    },
    {
      id: "chn",
      name: "China",
      min: 0,
      max: 0,
      default: 0,
      culture: "Historisch gesehen wird kein Trinkgeld gegeben. In vielen Gegenden ist es unüblich oder sogar untersagt.",
    },
    {
      id: "prt",
      name: "Portugal",
      min: 0,
      max: 10,
      default: 5,
      culture: "Es ist üblich, das Wechselgeld liegen zu lassen oder aufzurunden. In Tourismusgebieten sind 5-10% gängig.",
    },
    {
      id: "grc",
      name: "Griechenland",
      min: 0,
      max: 10,
      default: 5,
      culture: "Meist reicht es, den Rechnungsbetrag aufzurunden. Ein Extra von 5-10% wird sehr geschätzt, ist aber nicht Pflicht.",
    },
  ]
};

const seo: ToolLocaleContent<TipCalculatorUI>['seo'] = [
  {
    type: "title",
    text: "Internationaler Trinkgeld-Guide: Etikette und Prozentsätze 2026",
    level: 2,
  },
  {
    type: "summary",
    title: "Trinkgeld geben wie ein Einheimischer – überall auf der Welt",
    items: [
      "Vollständiger Leitfaden zu erwarteten Trinkgeldern in den wichtigsten Reisezielen.",
      "Schnelle Berechnung des Trinkgelds basierend auf der Zwischensumme oder dem Endbetrag.",
      "Unterschied zwischen Servicegebühren, Gedeck (Coperto) und freiwilligem Trinkgeld.",
      "Etikette-Regeln für Sondersituationen: Taxis, Hotels und Reiseleiter.",
    ],
  },
  {
    type: "paragraph",
    html: "Einer der stressigsten Momente einer Auslandsreise ist oft der Augenblick, in dem die Rechnung kommt. Unser <strong>internationaler Trinkgeld-Rechner</strong> wurde entwickelt, um diese Unsicherheit zu beseitigen.",
  }
];

const faq: ToolLocaleContent<TipCalculatorUI>['faq'] = [
  {
    question: "Ist Trinkgeld in den USA Pflicht?",
    answer: "Gesetzlich nein, aber gesellschaftlich ja. Servicekräfte sind auf Trinkgelder angewiesen, um den Mindestlohn zu erreichen. Üblich sind zwischen 18% und 25%.",
  },
  {
    question: "In welchen Ländern ist Trinkgeld unhöflich?",
    answer: "Vor allem in Japan und Südkorea. Guter Service wird als Teil der beruflichen Pflicht angesehen und erfordert keine zusätzliche Belohnung.",
  },
  {
    question: "Sollte ich bei schlechtem Service Trinkgeld geben?",
    answer: "In Ländern, in denen Trinkgeld optional ist (Europa, Australien), ist es am korrektesten, gar nichts zu geben.",
  },
  {
    question: "Wird das Trinkgeld vor oder nach Steuern berechnet?",
    answer: "In Nordamerika wird es meist auf die Zwischensumme (vor Steuern) berechnet. In Europa und Lateinamerika immer auf den Gesamtbetrag.",
  },
];

const bibliography: ToolLocaleContent<TipCalculatorUI>['bibliography'] = [
  {
    name: "Condé Nast Traveler: Tipping Etiquette Guide",
    url: "https://www.cntraveler.com/stories/2008-11-11/etiquette-101-tipping-guide",
  },
  {
    name: "Lonely Planet: Trinkgeld und Etikette in Europa",
    url: "https://www.lonelyplanet.com/articles/tipping-customs-europe",
  },
  {
    name: "Western Union: Global Tipping Guide",
    url: "https://www.westernunion.com/blog/en/global-tipping-guide/",
  },
];

const howTo: ToolLocaleContent<TipCalculatorUI>['howTo'] = [
  {
    name: "Rechnungsbetrag eingeben",
    text: "Geben Sie den Gesamtbetrag Ihrer Rechnung ein, bevor Trinkgeld hinzugefügt wurde.",
  },
  {
    name: "Land auswählen",
    text: "Wählen Sie Ihr Reiseziel aus, um automatisch Kulturempfehlungen und Standard-Prozentsätze zu laden.",
  },
  {
    name: "Anpassen und teilen",
    text: "Geben Sie die Personenanzahl an, um zu sehen, wie viel jeder inklusive Trinkgeld zahlen sollte.",
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
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  inLanguage: 'de',
};

export const content: ToolLocaleContent<TipCalculatorUI> = {
  slug,
  title,
  description,
  ui,
  seo,
  faq,
  faqTitle: "Häufig gestellte Fragen",
  bibliography,
  bibliographyTitle: "Quellen und Referenzen",
  howTo,
  howToTitle: "Anleitung für den Rechner",
  schemas: [faqSchema, howToSchema, appSchema],
};
