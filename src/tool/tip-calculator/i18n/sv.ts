import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { TipCalculatorUI } from '../index';

const slug = 'internationell-drickskalkylator';
const title = 'Internationell drickskalkylator';
const description = 'Beräkna hur mycket dricks du bör ge på dina resor. Inkluderar en guide för procentsatser och etikettregler för mer än 50 länder. Gör inget misstag när du betalar!';

const ui: TipCalculatorUI = {
  title: "Drickskalkylator",
  badge: "Internationellt dricksverktyg",
  billLabel: "Fakturabelopp",
  countryLabel: "Land / Lokala sedvänjor",
  tipLabel: "Dricksprocent",
  splitLabel: "Dela på notan",
  summaryTip: "Total dricks",
  summarySubtotal: "Subtotal",
  summaryTotalPerson: "Totalt per person",
  protocolTitle: "Etikett",
  placeholderAmount: "0.00",
  placeholderFilter: "Sök land...",
  placeholderSelect: "Välj ett land",
  countries: [
    {
      id: "usa",
      name: "USA & Kanada",
      min: 18,
      max: 25,
      default: 20,
      culture: "Dricks är avgörande för kypares löner. Mellan 18 % och 25 % förväntas. Att inte lämna dricks anses vara ett allvarligt brott mot den nordamerikanska kulturen.",
    },
    {
      id: "esp",
      name: "Spanien",
      min: 0,
      max: 10,
      default: 5,
      culture: "Valfritt. Det är vanligt att runda upp växeln eller lämna 5–10 % på middagar om servicen har varit av bra kvalitet.",
    },
    {
      id: "jpn",
      name: "Japan",
      min: 0,
      max: 0,
      default: 0,
      culture: "Ingen dricks. Det anses vara en förolämpning mot professionalism. Om du lämnar pengar kommer de sannolikt att följa efter dig för att lämna tillbaka dem.",
    },
    {
      id: "ita",
      name: "Italien",
      min: 0,
      max: 10,
      default: 0,
      culture: "'Coperto' är en avgift för dukning, bröd och service, det är inte själva dricksen. Att lämna ytterligare 5–10 % är en uppskattad men helt valfri gest.",
    },
    {
      id: "fra",
      name: "Frankrike",
      min: 0,
      max: 10,
      default: 5,
      culture: "Service ingår enligt lag. Lämna 'pourboire' (litet extra) endast för exceptionellt bemötande.",
    },
    {
      id: "gbr",
      name: "Storbritannien",
      min: 0,
      max: 12.5,
      default: 10,
      culture: "En frivillig avgift på 12,5 % läggs ofta till på notan. Om den inte finns där är 10 % standard på restauranger.",
    },
    {
      id: "mex",
      name: "Mexiko",
      min: 10,
      max: 15,
      default: 12,
      culture: "En 'propina' på 10–15 % förväntas. Det är en viktig del av ekonomin för arbetare inom sektorn.",
    },
    {
      id: "arg",
      name: "Argentina",
      min: 0,
      max: 10,
      default: 10,
      culture: "Standarden är 10 %. Det lämnas nästan alltid ifall servicen har varit normal eller bra.",
    },
    {
      id: "bra",
      name: "Brasilien",
      min: 0,
      max: 10,
      default: 10,
      culture: "Normalt ingår en avgift på 10 % på notan som 'Serviço'. Det är valfritt men de flesta betalar.",
    },
    {
      id: "deu",
      name: "Tyskland",
      min: 5,
      max: 10,
      default: 7,
      culture: "Det är vanligt att runda upp eller lägga till 5–10 %. Berätta för kyparen det totala beloppet inkl. dricks när du betalar.",
    },
    {
      id: "tur",
      name: "Turkiet",
      min: 5,
      max: 10,
      default: 10,
      culture: "I turistområden förväntas 10 % i kontanter. Det kan vanligtvis inte läggas till på kreditkortet.",
    },
    {
      id: "aus",
      name: "Australien",
      min: 0,
      max: 10,
      default: 0,
      culture: "Förväntas inte. Lönerna är höga. På finare restauranger kan 10 % lämnas.",
    },
    {
      id: "chn",
      name: "Kina",
      min: 0,
      max: 0,
      default: 0,
      culture: "Historiskt sett lämnas ingen dricks och på många ställen är det förbjudet eller betraktas som konstigt.",
    },
    {
      id: "prt",
      name: "Portugal",
      min: 0,
      max: 10,
      default: 5,
      culture: "Det är sedvänja att lämna växeln eller runda upp. I turistområden är 5–10 % vanligt.",
    },
    {
      id: "grc",
      name: "Grekland",
      min: 0,
      max: 10,
      default: 5,
      culture: "Det räcker vanligtvis att runda upp notan. Extra 5–10 % är mycket uppskattat men inte obligatoriskt.",
    },
  ]
};

const seo: ToolLocaleContent<TipCalculatorUI>['seo'] = [
  {
    type: "title",
    text: "Internationell dricksguide: Etikett och procentsatser 2026",
    level: 2,
  },
  {
    type: "summary",
    title: "Lär dig lämna dricks som en lokalbo var som helst i världen",
    items: [
      "Komplett guide om förväntad dricksprocent på stora turistdestinationer.",
      "Hur man snabbt beräknar dricksen utifrån subtotalen eller totalen inklusive skatt.",
      "Skillnad mellan serviceavgifter, dukningsavgift (coperto) och frivillig dricks.",
      "Etikettregler för speciella situationer: taxi, hotell och guider.",
    ],
  },
  {
    type: "paragraph",
    html: "Ett av de mest stressiga ögonblicken på en internationell resa är när notan landar på bordet. Vår <strong>internationella dricks-kalkylator</strong> är utformad för att eliminera den osäkerheten.",
  }
];

const faq: ToolLocaleContent<TipCalculatorUI>['faq'] = [
  {
    question: "Är det obligatoriskt att lämna dricks i USA?",
    answer: "Lagligt sett nej, men socialt sett ja. Servitörer är beroende av dricks för att nå upp till minimilönen. Det är normalt att lämna mellan 18 % och 25 %.",
  },
  {
    question: "I vilka länder är det förolämpande att lämna dricks?",
    answer: "Främst i Japan och Sydkorea. God service anses vara en del av plikten och kräver ingen extra ersättning.",
  },
  {
    question: "Ska jag ge dricks om servicen var dålig?",
    answer: "I länder där det är valfritt (Europa, Australien) är det mest korrekta att inte lämna någonting alls.",
  },
  {
    question: "Beräknas dricksen före eller efter skatt?",
    answer: "I Nordamerika beräknas den vanligtvis på subtotalen (före skatt). I Europa och Latinamerika beräknas den alltid på notans totalbelopp.",
  },
];

const howTo: ToolLocaleContent<TipCalculatorUI>['howTo'] = [
  {
    name: "Ange notans totalbelopp",
    text: "Skriv in det totalbelopp som står på notan innan dricks läggs till.",
  },
  {
    name: "Välj land",
    text: "Välj din destination för att automatiskt ladda kulturella rekommendationer och standardprocent.",
  },
  {
    name: "Justera och dela",
    text: "Om ni är flera, ange antal personer för att veta hur mycket var och en ska betala inklusive dricks.",
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
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'SEK' },
  inLanguage: 'sv',
};

export const content: ToolLocaleContent<TipCalculatorUI> = {
  slug,
  title,
  description,
  ui,
  seo,
  faq,
  faqTitle: "Vanliga frågor",
  bibliography: "Källor och referenser",
  howTo,
  howToTitle: "Hur man använder kalkylatorn",
  schemas: [faqSchema, howToSchema, appSchema],
};
