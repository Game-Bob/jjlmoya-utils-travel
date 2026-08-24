import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { FuelCostCalculatorUI } from '../ui';
import { bibliographyEntries } from '../bibliography';

const slug = 'fuel-cost-calculator';
const title = 'Fuel Cost Calculator for Road Trips';
const description = 'Estimate the fuel cost of a drive from distance, vehicle consumption, manual pump price, passengers, and a one-way or round-trip route. Works in metric and imperial units without live price claims.';

const ui: FuelCostCalculatorUI = {
  metricLabel: 'Metric',
  imperialLabel: 'Imperial',
  routeHeading: 'Tune your trip',
  distanceLabel: 'One-way distance',
  distanceHint: 'How far is the destination?',
  consumptionLabel: 'Vehicle consumption',
  consumptionHint: 'Use the figure from your car',
  priceLabel: 'Fuel price',
  priceHint: 'Enter the current pump price',
  passengersLabel: 'Passengers',
  roundTripLabel: 'Round trip',
  currencyLabel: 'Currency',
  presetsLabel: 'Quick routes',
  presetCommute: 'Daily run',
  presetWeekend: 'Weekend escape',
  presetRoadTrip: 'Road trip',
  resultHeading: 'Trip fuel forecast',
  totalDistanceLabel: 'Total distance',
  fuelUsedLabel: 'Fuel used',
  totalCostLabel: 'Total fuel cost',
  perPersonLabel: 'Each traveler pays',
  routeStatement: '{distance} {unit} there and back, shared by {passengers}',
  routeOneWayStatement: '{distance} {unit} one way, shared by {passengers}',
  statusLight: 'Light lift',
  statusMedium: 'Worth sharing',
  statusHigh: 'Big journey',
  sampleButton: 'Load a sample',
  resetButton: 'Reset',
  litersUnit: 'L',
  gallonsUnit: 'gal',
  distanceMetricUnit: 'km',
  distanceImperialUnit: 'mi',
  consumptionMetricUnit: 'L/100 km',
  consumptionImperialUnit: 'mpg',
  priceMetricUnit: 'per litre',
  priceImperialUnit: 'per gallon',
  currencyOptions: [
    { code: 'EUR', symbol: '€' },
    { code: 'USD', symbol: '$' },
    { code: 'GBP', symbol: '£' },
    { code: 'JPY', symbol: '¥' },
  ],
};

const seo: ToolLocaleContent<FuelCostCalculatorUI>['seo'] = [
  { type: 'title', text: 'How to estimate fuel cost before a road trip', level: 2 },
  { type: 'paragraph', html: 'A useful road trip fuel estimate needs four facts: the one-way distance, the vehicle consumption, the pump price you choose, and the number of travelers sharing the bill. This calculator doubles the route when you select round trip, calculates fuel from the vehicle rate, and divides the result by the passenger count.' },
  { type: 'title', text: 'The fuel cost formula', level: 2 },
  { type: 'table', headers: ['Step', 'Calculation', 'What it tells you'], rows: [
    ['Total distance', 'One-way distance x 2 for a return trip', 'How far the vehicle actually travels'],
    ['Fuel used', 'Total distance x consumption / 100', 'Litres needed for the route'],
    ['Total cost', 'Fuel used x your manual price', 'The estimated fuel spend'],
    ['Cost per person', 'Total cost / passengers', 'A fair share for the group'],
  ] },
  { type: 'tip', title: 'Use a current manual price', html: 'Fuel prices vary by station, country, fuel grade, and date. Enter the price you expect to pay and treat the result as a planning estimate, not a live quote.' },
  { type: 'title', text: 'Metric and imperial fuel figures', level: 2 },
  { type: 'paragraph', html: 'Metric mode uses kilometres and litres per 100 kilometres. Imperial mode shows miles and miles per gallon while preserving the same physical trip underneath. Switching units does not change the estimated cost.' },
  { type: 'list', items: ['Add a small buffer for detours, traffic, and searching for parking.', 'Use the consumption figure from your own vehicle rather than a best-case brochure value.', 'For mixed cars or multiple fuel stops, calculate each leg separately and add the results.'] },
];

const faq = [
  { question: 'How do I calculate fuel cost for a road trip?', answer: 'Multiply the total route distance by the vehicle consumption rate, divide by 100 when using litres per 100 kilometres, then multiply by your manual fuel price. Divide the final amount by the number of passengers if you are sharing the cost.' },
  { question: 'Does this calculator include a return journey?', answer: 'Yes. Enter the one-way distance and turn on Round trip. The calculator doubles the distance before estimating fuel and cost.' },
  { question: 'Does it use live fuel prices?', answer: 'No. You enter the pump price yourself. This keeps the estimate transparent because fuel prices change by location, station, fuel grade, and date.' },
  { question: 'Can I use miles per gallon?', answer: 'Yes. Switch to Imperial mode to enter miles and mpg. The calculator converts those figures internally while preserving the same trip economics.' },
];

const howTo = [
  { name: 'Choose your unit system', text: 'Select Metric for kilometres and litres per 100 kilometres, or Imperial for miles and mpg.' },
  { name: 'Enter your route and car data', text: 'Add the one-way distance, vehicle consumption, manual fuel price, and number of passengers.' },
  { name: 'Review the shared cost', text: 'Turn on Round trip when needed, choose the currency label, and read the total fuel cost and amount per traveler.' },
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
  inLanguage: 'en',
};

export const content: ToolLocaleContent<FuelCostCalculatorUI> = {
  slug,
  title,
  description,
  ui,
  seo,
  faq,
  howTo,
  howToTitle: 'How to estimate road trip fuel cost',
  schemas: [faqSchema, howToSchema, appSchema],
  bibliography: bibliographyEntries,
};
