import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { LuggageCalculatorUI, LuggageCalculatorLocaleContent } from '../index';

const slug = 'airline-luggage-calculator';
const title = 'Carry-on Luggage Calculator: Airline Measurements 2026';
const description = 'Check the dimensions and weight allowed for your carry-on suitcase and personal item on Ryanair, Vueling, Iberia, and +20 airlines. Avoid surcharges!';

const ui: LuggageCalculatorUI = {
  searchLabel: 'Search your airline',
  searchPlaceholder: 'Search your airline...',
  personalItemTitle: 'Personal Item',
  cabinBagTitle: 'Cabin Bag',
  weightLabel: 'Weight',
  noResults: 'We couldn\'t find that airline. Try the global search.',
  modalNoteTitle: 'Important Note:',
  modalNoteText: 'Some low-cost airlines only allow the cabin suitcase under the seat if "Priority" or an additional suitcase service has not been contracted.',
  personalItemDetail: 'Under-Seat Bag',
  cabinBagDetail: 'Carry-on Suitcase',
  airlines: [
    {
      name: "Ryanair",
      personal: "40 x 20 x 25 cm",
      personalWeight: "No limit",
      cabin: "55 x 40 x 20 cm",
      cabinWeight: "10 kg",
      icon: "mdi:airplane",
    },
    {
      name: "Vueling",
      personal: "40 x 20 x 30 cm",
      personalWeight: "No limit",
      cabin: "55 x 40 x 20 cm",
      cabinWeight: "10 kg",
      icon: "mdi:airplane",
    },
    {
      name: "Iberia",
      personal: "40 x 30 x 15 cm",
      personalWeight: "No limit",
      cabin: "56 x 40 x 25 cm",
      cabinWeight: "10 kg",
      icon: "mdi:airplane",
    },
    {
      name: "EasyJet",
      personal: "45 x 36 x 20 cm",
      personalWeight: "15 kg",
      cabin: "56 x 45 x 25 cm",
      cabinWeight: "15 kg",
      icon: "mdi:airplane",
    },
    {
      name: "Air Europa",
      personal: "40 x 30 x 20 cm",
      personalWeight: "No limit",
      cabin: "55 x 35 x 25 cm",
      cabinWeight: "10 kg",
      icon: "mdi:airplane",
    },
    {
      name: "Lufthansa",
      personal: "40 x 30 x 10 cm",
      personalWeight: "No limit",
      cabin: "55 x 40 x 23 cm",
      cabinWeight: "8 kg",
      icon: "mdi:airplane",
    },
    {
      name: "British Airways",
      personal: "40 x 30 x 15 cm",
      personalWeight: "23 kg",
      cabin: "56 x 45 x 25 cm",
      cabinWeight: "23 kg",
      icon: "mdi:airplane",
    },
    {
      name: "Norwegian",
      personal: "30 x 20 x 38 cm",
      personalWeight: "10 kg (total)",
      cabin: "55 x 40 x 23 cm",
      cabinWeight: "10 kg (total)",
      icon: "mdi:airplane",
    },
    {
      name: "Emirates",
      personal: "Included in cabin",
      personalWeight: "-",
      cabin: "55 x 38 x 20 cm",
      cabinWeight: "7 kg",
      icon: "mdi:airplane",
    },
    {
      name: "Qatar Airways",
      personal: "Included in cabin",
      personalWeight: "-",
      cabin: "50 x 37 x 25 cm",
      cabinWeight: "7 kg",
      icon: "mdi:airplane",
    },
    {
      name: "TAP Air Portugal",
      personal: "40 x 30 x 15 cm",
      personalWeight: "2 kg",
      cabin: "55 x 40 x 20 cm",
      cabinWeight: "8 kg",
      icon: "mdi:airplane",
    },
  ],
};

const faq: LuggageCalculatorLocaleContent['faq'] = [
  {
    question: "What happens if my suitcase exceeds the measurements by 1 or 2 cm?",
    answer: "It depends on the airline and the gate staff. Low-cost airlines usually use a metal measuring box; if the suitcase does not enter freely (including wheels), they will charge you the gate check-in fee, which usually ranges between €45 and €65.",
  },
  {
    question: "Can I bring a backpack and a carry-on for free?",
    answer: "On airlines like Iberia, British Airways, or Lufthansa, yes. On airlines like Ryanair or Vueling (basic fare), you can only bring a small item that fits under the seat. To take the carry-on suitcase in the cabin, you must pay for the 'Priority' extra.",
  },
  {
    question: "Do wheels count in luggage measurements?",
    answer: "Yes, always. Official airline measurements (e.g., 55x40x20) are total dimensions. If your suitcase measures 55cm in body but the wheels add another 3cm, you are legally exceeding the limit.",
  },
  {
    question: "Is there a weight limit for the personal item under the seat?",
    answer: "Most airlines do not usually weigh the small personal item, as long as it maintains reasonable dimensions and fits under the seat. However, some like EasyJet set a limit of 15kg for all combined carry-on luggage.",
  },
];

const howTo: LuggageCalculatorLocaleContent['howTo'] = [
  {
    name: "Search for your airline",
    text: "Type the name of the airline you are flying with in our search engine to see its specific limits.",
  },
  {
    name: "Measure your suitcase at home",
    text: "Use a measuring tape to measure the height (including wheels), width, and depth of your luggage.",
  },
  {
    name: "Check the weight",
    text: "Use a luggage scale or a domestic one to ensure you do not exceed the allowed kilos (usually 8kg or 10kg).",
  },
];

const bibliography: LuggageCalculatorLocaleContent['bibliography'] = [
  {
    name: "AENA: Hand and Checked Luggage",
    url: "https://www.aena.es/es/pasajeros/equipajes/equipaje-mano.html",
  },
  {
    name: "EASA: Air Passenger Rights & Safety Rules",
    url: "https://www.easa.europa.eu/en/light/topics/passenger-rights",
  },
  {
    name: "IATA: Passenger Baggage Information",
    url: "https://www.iata.org/en/programs/ops-infra/baggage/check-bag-rules/",
  },
];

const seo: LuggageCalculatorLocaleContent['seo'] = [
    {
        type: "title",
        text: "Complete Guide to Carry-on Luggage Dimensions 2026",
        level: 2,
    },
    {
        type: "summary",
        title: "Everything you need to know before you fly",
        items: [
            "Updated guide to personal item and cabin bag dimensions.",
            "Weight allowance comparison by airline (from 7kg to 23kg).",
            "Difference between personal item, carry-on bag, and checked luggage.",
            "Tips to avoid boarding gate surcharges.",
        ],
    },
    {
        type: "paragraph",
        html: "Traveling today has become a logistical puzzle. What used to be a universal standard (the 10kg bag) is now a jungle of measurements that vary by a few centimeters between airlines. Our <strong>luggage calculator</strong> was born to answer the most repeated question at airports: \"Will I be charged for this bag?\".",
    },
    {
        type: "title",
        text: "Personal Item vs. Cabin Bag",
        level: 3,
    },
    {
        type: "paragraph",
        html: "Understanding the modern luggage hierarchy is vital. Since the *Low Cost* model took over, most airlines have fragmented what you can take on the plane. The <strong>personal item</strong> (small backpack, purse, or laptop bag) is usually the only one that is free on basic fares, while the <strong>cabin bag</strong> (the traditional trolley) usually requires a supplement or is included in Priority.",
    },
    {
        type: "comparative",
        items: [
            {
                title: "Low Cost Airlines",
                description: "Strict rules, usually only allowing one small bag under the seat for free.",
                icon: "mdi:tag-outline",
                points: [
                    "Ryanair/Vueling: Cabin bag is paid",
                    "Dimensions monitored with sizer box",
                    "Maximum weights between 8kg and 10kg",
                    "High surcharges if you exceed size",
                ],
            },
            {
                title: "Flat Carriers / Traditional",
                description: "More flexible policies, usually including a cabin bag in almost all fares.",
                icon: "mdi:airplane-takeoff",
                highlight: true,
                points: [
                    "Iberia/Lufthansa: Cabin bag included",
                    "Higher weight limits (up to 23kg on BA)",
                    "Combination of personal item + bag",
                    "Free gate checking service if flight is full",
                ],
            },
        ],
    },
    {
        type: "title",
        text: "Measurements by Airline: Reference Table",
        level: 3,
    },
    {
        type: "paragraph",
        html: "Although you can use our interactive search, here is a summary of the most common policies for quick planning:",
    },
    {
        type: "table",
        headers: ["Airline", "Personal Item (Under seat)", "Cabin Bag (Hand)"],
        rows: [
            ["<strong>Ryanair</strong>", "40 x 20 x 25 cm", "55 x 40 x 20 cm (Paid)"],
            ["<strong>Vueling</strong>", "40 x 20 x 30 cm", "55 x 40 x 20 cm (Paid)"],
            ["<strong>Iberia</strong>", "40 x 30 x 15 cm", "56 x 40 x 25 cm (Included)"],
            ["<strong>EasyJet</strong>", "45 x 36 x 20 cm", "56 x 45 x 25 cm (Paid/Plus)"],
            ["<strong>Lufthansa</strong>", "40 x 30 x 10 cm", "55 x 40 x 23 cm (Included)"],
        ],
    },
    {
        type: "tip",
        title: "The Weight Trick",
        html: "<p>Many airlines like Emirates or Qatar are very strict with weight (7kg) but more relaxed with measurements. Others like British Airways allow up to 23kg as long as you can lift the bag yourself. Always weigh it at home!</p>",
    },
    {
        type: "title",
        text: "Why standard measurements fail",
        level: 3,
    },
    {
        type: "paragraph",
        html: "Many travelers buy bags labeled \"Cabin Size\" and get an unpleasant surprise. The reason is that manufacturers usually indicate the measurement of the bag body, but airlines measure the total set: <strong>wheels + handle + outside pockets</strong>.",
    },
    {
        type: "title",
        text: "Expert Packing Tips",
        level: 3,
    },
    {
        type: "list",
        icon: "mdi:check-decagram",
        items: [
            "<strong>Difference between 'Personal Item' and 'Carry-on':</strong> The personal item must fit under the front seat. The carry-on bag goes in the overhead bins.",
            "<strong>The wheel factor:</strong> The measurements we indicate include wheels and handles. A 55cm bag with 3cm wheels will stick out of the official sizer.",
            "<strong>Compression and Flexibility:</strong> Soft backpacks are preferable to hard suitcases if you are at the limit, as they can be slightly compressed in the sizer.",
            "<strong>Combined rates:</strong> Sometimes it's cheaper to pay a 'Plus' fare than to add the cabin bag separately after purchase.",
        ],
    },
    {
        type: "title",
        text: "Special Rules and Prohibited Items",
        level: 3,
    },
    {
        type: "paragraph",
        html: "It's not all centimeters and kilos. Hand luggage is subject to strict security regulations (EASA regulation). Remember the liquids rule: containers of maximum 100ml stored in a transparent bag of 1 liter total capacity.",
    },
    {
        type: "table",
        headers: ["Object", "Allowed?"],
        rows: [
            ["External batteries (Powerbanks)", "Yes (Carry-on only)"],
            ["Liquids > 100ml", "Not allowed"],
            ["Small scissors (<6cm)", "Generally yes"],
            ["Sharp tools", "Not allowed"],
        ],
    },
    {
        type: "tip",
        title: "Security notice",
        html: "<p>Lithium batteries are prohibited in the aircraft hold due to fire risk. They must always travel in your carry-on luggage.</p>",
    },
    {
        type: "title",
        text: "Conclusion: Travel Stress-Free",
        level: 3,
    },
    {
        type: "paragraph",
        html: "Checking your bag measurements before leaving for the airport will save you not only money (gate charges often exceed €50), but also the stress of starting your vacation with a discussion at the counter. Use our calculator and fly with peace of mind!",
    },
];

const faqSchema: WithContext<FAQPage> = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faq.map((item: any) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: { '@type': 'Answer', text: item.answer },
  })),
};

const howToSchema: WithContext<HowTo> = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: title,
  description,
  step: howTo.map((step: any) => ({
    '@type': 'HowToStep',
    name: step.name,
    text: step.text,
  })),
};

const appSchema: WithContext<SoftwareApplication> = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: title,
  description,
  applicationCategory: 'UtilitiesApplication',
  operatingSystem: 'Web',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  inLanguage: 'en',
};

export const content: LuggageCalculatorLocaleContent = {
  slug,
  title,
  description,
  ui,
  seo,
  faq,
  bibliography,
  howTo,
  schemas: [faqSchema, howToSchema, appSchema],
};
