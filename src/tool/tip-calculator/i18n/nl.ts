import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { TipCalculatorUI } from '../index';

const slug = 'internationale-fooi-calculator';
const title = 'Internationale Fooi Calculator';
const description = 'Bereken hoeveel fooi u moet geven op reis. Inclusief percentages en etiquetteregels voor meer dan 50 landen. Ga niet de mist in bij het betalen!';

const ui: TipCalculatorUI = {
  title: "Fooi Calculator",
  badge: "Internationale Fooi Tool",
  billLabel: "Factuurbedrag",
  countryLabel: "Land / Lokale Gewoonten",
  tipLabel: "Fooi Percentage",
  splitLabel: "Rekening splitsen",
  summaryTip: "Totale Fooi",
  summarySubtotal: "Subtotaal",
  summaryTotalPerson: "Totaal per Persoon",
  protocolTitle: "Protocol",
  placeholderAmount: "0,00",
  placeholderFilter: "Zoek land...",
  placeholderSelect: "Selecteer een land",
  countries: [
    {
      id: "usa",
      name: "VS & Canada",
      min: 18,
      max: 25,
      default: 20,
      culture: "Fooi is essentieel voor het salaris van het bedienend personeel. Tussen 18% en 25% wordt verwacht. Niets achterlaten wordt beschouwd als een ernstige belediging in de Noord-Amerikaanse cultuur.",
    },
    {
      id: "esp",
      name: "Spanje",
      min: 0,
      max: 10,
      default: 5,
      culture: "Optioneel. Het is gebruikelijk om het wisselgeld af te ronden of 5-10% achter te laten bij het diner als de service goed was.",
    },
    {
      id: "jpn",
      name: "Japan",
      min: 0,
      max: 0,
      default: 0,
      culture: "Geen fooi. Het wordt gezien als een belediging voor de professionaliteit. Als u geld achterlaat, zullen ze u waarschijnlijk achtervolgen om het terug te geven.",
    },
    {
      id: "ita",
      name: "Italië",
      min: 0,
      max: 10,
      default: 0,
      culture: "De 'coperto' is een vergoeding voor bediening, brood en servies, het is niet de fooi zelf. Een extra 5-10% achterlaten wordt gewaardeerd maar is geheel vrijblijvend.",
    },
    {
      id: "fra",
      name: "Frankrijk",
      min: 0,
      max: 10,
      default: 5,
      culture: "Service is wettelijk inbegrepen. Laat alleen 'pourboire' (klein extraatje) achter voor een uitzonderlijke behandeling.",
    },
    {
      id: "gbr",
      name: "Verenigd Koninkrijk",
      min: 0,
      max: 12.5,
      default: 10,
      culture: "Vaak wordt een optionele 12,5% aan de rekening toegevoegd. Als dit niet het geval is, is 10% de standaard in restaurants.",
    },
    {
      id: "mex",
      name: "Mexico",
      min: 10,
      max: 15,
      default: 12,
      culture: "Een 'propina' van 10-15% wordt verwacht. Het is een essentieel onderdeel van het inkomen voor werknemers in deze sector.",
    },
    {
      id: "arg",
      name: "Argentinië",
      min: 0,
      max: 10,
      default: 10,
      culture: "De standaard is 10%. Het wordt bijna altijd gegeven als de service normaal of goed was.",
    },
    {
      id: "bra",
      name: "Brazilië",
      min: 0,
      max: 10,
      default: 10,
      culture: "Normaal gesproken wordt er 10% 'Serviço' op de rekening gezet. Dit is optioneel, maar de meeste mensen betalen het.",
    },
    {
      id: "deu",
      name: "Duitsland",
      min: 5,
      max: 10,
      default: 7,
      culture: "Het is gebruikelijk om af te ronden of 5-10% toe te voegen. Geef bij het betalen het totaalbedrag inclusief de fooi door aan de ober.",
    },
    {
      id: "tur",
      name: "Turkije",
      min: 5,
      max: 10,
      default: 10,
      culture: "In toeristische gebieden wordt 10% contant verwacht. Het kan meestal niet aan de creditcardrekening worden toegevoegd.",
    },
    {
      id: "aus",
      name: "Australië",
      min: 0,
      max: 10,
      default: 0,
      culture: "Niet verwacht. De salarissen zijn hoog. In chique restaurants kan 10% worden gegeven.",
    },
    {
      id: "chn",
      name: "China",
      min: 0,
      max: 0,
      default: 0,
      culture: "Van oudsher wordt er geen fooi gegeven en op veel plaatsen is het verboden of wordt het als vreemd beschouwd.",
    },
    {
      id: "prt",
      name: "Portugal",
      min: 0,
      max: 10,
      default: 5,
      culture: "Het is gebruikelijk om het wisselgeld achter te laten of af te ronden. In toeristische gebieden is 5-10% gangbaar.",
    },
    {
      id: "grc",
      name: "Griekenland",
      min: 0,
      max: 10,
      default: 5,
      culture: "Het is meestal voldoende om de rekening af te ronden. Een extra 5-10% wordt zeer gewaardeerd maar is niet verplicht.",
    },
  ]
};

const seo: ToolLocaleContent<TipCalculatorUI>['seo'] = [
  {
    type: "title",
    text: "Internationale Fooi Gids: Etiquette en Percentages 2026",
    level: 2,
  },
  {
    type: "summary",
    title: "Leer overal ter wereld fooi geven als een local",
    items: [
      "Volledige gids over het verwachte fooipercentage in de belangrijkste toeristische bestemmingen.",
      "Hoe u snel de fooi berekent op basis van het subtotaal of het totaal inclusief belastingen.",
      "Verschil tussen servicekosten, couvert (coperto) und vrijwillige fooien.",
      "Etiquetteregels voor speciale situaties: taxi's, hotels en gidsen.",
    ],
  },
  {
    type: "paragraph",
    html: "Een van de meest stressvolle momenten van elke internationale reis is wanneer de rekening op tafel komt. Onze <strong>internationale fooi calculator</strong> is ontworpen om die onzekerheid weg te nemen.",
  }
];

const faq: ToolLocaleContent<TipCalculatorUI>['faq'] = [
  {
    question: "Is het verplicht om fooi te geven in de Verenigde Staten?",
    answer: "Wettelijk niet, maar sociaal gezien wel. Bedienend personeel is afhankelijk van fooien om het minimumloon te bereiken. Het is normaal om tussen de 18% en 25% te geven.",
  },
  {
    question: "In welke landen is het beledigend om fooi te geven?",
    answer: "Voornamelijk in Japan en Zuid-Korea. Goede service wordt beschouwd als onderdeel van de taak en vereist geen extra beloning.",
  },
  {
    question: "Moet ik fooi geven als de service slecht was?",
    answer: "In landen waar het optioneel is (Europa, Australië), is het het meest correct om niets te geven.",
  },
  {
    question: "Wordt de fooi berekend voor of na belastingen?",
    answer: "In Noord-Amerika wordt het meestal berekend over het subtotaal (vóór belastingen). In Europa en Latijns-Amerika wordt het altijd berekend over het totaalbedrag.",
  },
];

const bibliography: ToolLocaleContent<TipCalculatorUI>['bibliography'] = [
  {
    name: "Condé Nast Traveler: Tipping Etiquette Guide",
    url: "https://www.cntraveler.com/stories/2008-11-11/etiquette-101-tipping-guide",
  },
  {
    name: "Lonely Planet: Tipping and Etiquette in Europe",
    url: "https://www.lonelyplanet.com/articles/tipping-customs-europe",
  },
  {
    name: "Western Union: Global Tipping Guide",
    url: "https://www.westernunion.com/blog/en/global-tipping-guide/",
  },
];

const howTo: ToolLocaleContent<TipCalculatorUI>['howTo'] = [
  {
    name: "Voer het factuurtotaal in",
    text: "Typ het totaalbedrag dat op uw factuur staat voordat de fooi wordt toegepast.",
  },
  {
    name: "Selecteer het land",
    text: "Kies uw bestemming om automatisch de culturele aanbeveling en het standaardpercentage te laden.",
  },
  {
    name: "Aanpassen en splitsen",
    text: "Geef aan met hoeveel personen u bent om te weten hoeveel iedereen inclusief fooi moet betalen.",
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
  inLanguage: 'nl',
};

export const content: ToolLocaleContent<TipCalculatorUI> = {
  slug,
  title,
  description,
  ui,
  seo,
  faq,
  faqTitle: "Veelgestelde Vragen",
  bibliography,
  bibliographyTitle: "Bronnen en Referenties",
  howTo,
  howToTitle: "Hoe de calculator te gebruiken",
  schemas: [faqSchema, howToSchema, appSchema],
};
