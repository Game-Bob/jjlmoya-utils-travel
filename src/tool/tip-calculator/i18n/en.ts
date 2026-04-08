import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { TipCalculatorUI } from '../index';

const slug = 'international-tip-calculator';
const title = 'International Tip Calculator';
const description = 'Calculate how much to tip on your trips. Includes percentage guide and etiquette rules for more than 50 countries. Don\'t mess up when paying!';

const ui: TipCalculatorUI = {
  title: "Tip Calculator",
  badge: "International Tip Tool",
  billLabel: "Bill Amount",
  countryLabel: "Country / Local Custom",
  tipLabel: "Tip Percentage",
  splitLabel: "Split Bill",
  summaryTip: "Total Tip",
  summarySubtotal: "Subtotal",
  summaryTotalPerson: "Total per Person",
  protocolTitle: "Protocol",
  placeholderAmount: "0.00",
  placeholderFilter: "Search country...",
  placeholderSelect: "Select a country",
  countries: [
    {
      id: "usa",
      name: "USA & Canada",
      min: 18,
      max: 25,
      default: 20,
      culture: "Tipping is essential for waiter salaries. Between 18% and 25% is expected. Not leaving it is considered a serious breach of North American culture.",
    },
    {
      id: "esp",
      name: "Spain",
      min: 0,
      max: 10,
      default: 5,
      culture: "Optional. It is common to round up the change or leave 5-10% on dinners if the service has been of quality.",
    },
    {
      id: "jpn",
      name: "Japan",
      min: 0,
      max: 0,
      default: 0,
      culture: "No tipping. It is considered an insult to professionalism. If you leave money, they will likely follow you to return it.",
    },
    {
      id: "ita",
      name: "Italy",
      min: 0,
      max: 10,
      default: 0,
      culture: "The 'coperto' is a charge for table service, bread, and cover, it is not the tip itself. Leaving an extra 5-10% is an appreciated but entirely optional gesture.",
    },
    {
      id: "fra",
      name: "France",
      min: 0,
      max: 10,
      default: 5,
      culture: "Service is included by law. Leave the 'pourboire' (small extra) only for exceptional treatment.",
    },
    {
      id: "gbr",
      name: "United Kingdom",
      min: 0,
      max: 12.5,
      default: 10,
      culture: "An optional 12.5% is often added to the bill. If it's not there, 10% is the standard in restaurants.",
    },
    {
      id: "mex",
      name: "Mexico",
      min: 10,
      max: 15,
      default: 12,
      culture: "A 10-15% 'propina' is expected. It is a vital part of the economy for workers in the sector.",
    },
    {
      id: "arg",
      name: "Argentina",
      min: 0,
      max: 10,
      default: 10,
      culture: "The standard is 10%. It is almost always left if the service has been normal or good.",
    },
    {
      id: "bra",
      name: "Brazil",
      min: 0,
      max: 10,
      default: 10,
      culture: "Normally a 10% charge is included in the bill as 'Serviço'. It is optional but most pay it.",
    },
    {
      id: "deu",
      name: "Germany",
      min: 5,
      max: 10,
      default: 7,
      culture: "It is common to round up or add 5-10%. Tell the waiter the total including the tip when paying.",
    },
    {
      id: "tur",
      name: "Turkey",
      min: 5,
      max: 10,
      default: 10,
      culture: "In tourist areas, 10% in cash is expected. It can't usually be added to the credit card.",
    },
    {
      id: "aus",
      name: "Australia",
      min: 0,
      max: 10,
      default: 0,
      culture: "Not expected. Salaries are high. In fine dining, 10% can be left.",
    },
    {
      id: "chn",
      name: "China",
      min: 0,
      max: 0,
      default: 0,
      culture: "Historically, no tipping is left and in many places it is prohibited or considered strange.",
    },
    {
      id: "prt",
      name: "Portugal",
      min: 0,
      max: 10,
      default: 5,
      culture: "It is customary to leave the change or round up. In tourist areas, 5-10% is common.",
    },
    {
      id: "grc",
      name: "Greece",
      min: 0,
      max: 10,
      default: 5,
      culture: "It is usually enough to round up the bill. An extra 5-10% is much appreciated but not mandatory.",
    },
  ]
};

const seo: ToolLocaleContent<TipCalculatorUI>['seo'] = [
  {
    type: "title",
    text: "International Tipping Guide: Etiquette and Percentages 2026",
    level: 2,
  },
  {
    type: "summary",
    title: "Learn to tip like a local anywhere in the world",
    items: [
      "Complete guide on the expected tip percentage in major tourist destinations.",
      "How to quickly calculate the tip starting from the subtotal or the total including taxes.",
      "Difference between service charges, cover (coperto), and voluntary tipping.",
      "Etiquette rules for special situations: taxis, hotels, and tour guides.",
    ],
  },
  {
    type: "paragraph",
    html: "One of the most stressful moments of any international trip occurs when the bill arrives at the table. Our <strong>international tip calculator</strong> is designed to eliminate that uncertainty.",
  }
];

const faq: ToolLocaleContent<TipCalculatorUI>['faq'] = [
  {
    question: "Is it mandatory to leave a tip in the United States?",
    answer: "Legally no, but socially it is mandatory. Waiters depend on tips to reach minimum wage. It is normal to leave between 18% and 25%.",
  },
  {
    question: "In which countries is it offensive to leave a tip?",
    answer: "Mainly in Japan and South Korea. Good service is considered part of the duty and does not require extra compensation.",
  },
  {
    question: "Should I tip if the service was bad?",
    answer: "In countries where it is optional (Europe, Australia), the most correct thing is to leave nothing.",
  },
  {
    question: "Is the tip calculated before or after taxes?",
    answer: "In North America it is usually calculated on the subtotal (before taxes). In Europe and Latin America, it is always calculated on the total of the bill.",
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
    name: "Enter the bill total",
    text: "Type the total amount that appears on your invoice before applying the tip.",
  },
  {
    name: "Select the country",
    text: "Choose your destination to automatically load the cultural recommendation and standard percentage.",
  },
  {
    name: "Adjust and split",
    text: "If there are several of you, indicate the number of people to know how much each should pay including the tip.",
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
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  inLanguage: 'en',
};

export const content: ToolLocaleContent<TipCalculatorUI> = {
  slug,
  title,
  description,
  ui,
  seo,
  faq,
  faqTitle: "Frequently Asked Questions",
  bibliography,
  bibliographyTitle: "Sources and References",
  howTo,
  howToTitle: "How to use the calculator",
  schemas: [faqSchema, howToSchema, appSchema],
};
