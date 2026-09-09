import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { AirportConnectionBufferUI } from '../ui';
import { bibliographyEntries } from '../bibliography';

const slug = 'airport-connection-buffer-calculator';
const title = 'Airport connection buffer calculator';
const description = 'Estimate an airport connection with local boarding-pass scanning, terminal transfer data, baggage modes, gate-close timing, route controls, delay stress tests, and a transparent MCT check.';

const ui: AirportConnectionBufferUI = {
  flightDataHeading: 'Fast flight data entry',
  flightNumberLabel: 'Flight number',
  flightNumberHint: 'Arrival flight: type a code or scan the first boarding-pass segment',
  connectionFlightLabel: 'Connection flight',
  connectionFlightHint: 'Optional: add the onward flight separately',
  scanFileButton: 'Scan image or PDF',
  scanCameraButton: 'Scan with camera',
  stopCameraButton: 'Stop camera',
  scannerStatus: 'Local scanner: choose an image or allow camera access.',
  airportLabel: 'Connecting airport (IATA)',
  arrivalAirportLabel: 'Arrival airport',
  departureAirportLabel: 'Departure airport',
  terminalLabel: 'Terminal',
  arrivalTerminalLabel: 'Arrival terminal',
  departureTerminalLabel: 'Departure terminal',
  airportManualHint: 'Use the local catalog when it has a sourced transfer; otherwise verify the route yourself.',
  arrivalLabel: 'Arrival time',
  arrivalHint: 'When your inbound flight is due to land',
  departureLabel: 'Next departure',
  departureHint: 'When the onward flight leaves',
  baggageHeading: 'Baggage and ticket shape',
  baggageHand: 'Hand luggage only',
  baggageChecked: 'Checked through',
  baggageSelfTransfer: 'Separate tickets / self-transfer',
  routeRuleHeading: 'Route controls',
  routeDomestic: 'Domestic → domestic',
  routeSchengen: 'Non-Schengen → Schengen',
  routeUsInternational: 'International connection in US',
  routeCustom: 'Custom',
  deplaningLabel: 'Leave inbound aircraft',
  deplaningHint: 'Walk off, jet bridge, and exit',
  transferLabel: 'Terminal transfer',
  transferHint: 'Walk, bus, train, or gate change',
  controlLabel: 'Security or passport control',
  controlHint: 'Include any required checkpoint',
  baggageLabel: 'Baggage and check in',
  baggageHint: 'Use zero if your bag is checked through',
  personalBufferLabel: 'Your personal buffer',
  personalBufferHint: 'Time you want before boarding',
  gateCloseLabel: 'Gate closes before departure',
  gateCloseHint: 'Compare against this deadline, not take-off',
  mctLabel: 'MCT to compare',
  mctHint: 'Enter an official value when you have one; 0 leaves it unknown',
  localDataLabel: 'Local transfer data',
  localDataKnown: 'Sourced local estimate',
  localDataUnknown: 'Manual verification required',
  sourceLabel: 'Source and limits',
  advancedSettingsLabel: 'Advanced settings',
  advancedSettingsHint: 'Fine-tune each walking, control, baggage, gate, and MCT assumption',
  delayHeading: 'Cascade-delay simulator',
  delayLabel: 'Delay stress test',
  delayHint: 'Extra arrival delay to test',
  delayZero: '+0 min',
  delayFifteen: '+15 min',
  delayThirty: '+30 min',
  delayFortyFive: '+45 min',
  presetsLabel: 'Start with a route shape',
  presetShort: 'Short transfer',
  presetStandard: 'Typical transfer',
  presetLong: 'Long transfer',
  resultHeading: 'Connection margin',
  windowLabel: 'Flight window',
  plannedLabel: 'Planned steps',
  gateWindowLabel: 'Until gate closes',
  mctLabelResult: 'MCT check',
  mctUnknown: 'No official MCT entered; this is not a sourced pass/fail.',
  stressLabel: 'With test delay',
  marginLabel: 'Stress margin',
  statusComfortable: 'Positive margin',
  statusTight: 'Tight margin',
  statusMissed: 'Not enough time',
  timelineArrival: 'Land',
  timelineExit: 'Exit aircraft',
  timelineTransfer: 'Move',
  timelineControl: 'Clear',
  timelineGate: 'Gate deadline',
  timelineDeparture: 'Fly',
  marginStatement: '{minutes} remain after your planned connection steps.',
  stressStatement: '{minutes} remain after adding the delay stress test.',
  invalidStatement: 'Enter different valid arrival and departure times to see the connection window.',
  mctStatement: 'The entered window is compared with the MCT you supplied.',
  sourceStatement: 'Transfer times are local estimates; controls, queues, gate changes, and airline cutoffs can change the result.',
  sampleButton: 'Load typical transfer',
  resetButton: 'Reset',
  minuteUnit: 'min',
};

const seo: ToolLocaleContent<AirportConnectionBufferUI>['seo'] = [
  { type: 'title', text: 'What this connection calculator measures', level: 2 },
  { type: 'paragraph', html: 'A connecting flight gives you a time window, not a guarantee. This calculator turns the scheduled arrival and departure times into a visible window, subtracts the steps you expect to take, and checks the result against the gate-closing deadline you enter.' },
  { type: 'paragraph', html: 'You can scan a boarding-pass image when your browser exposes a local PDF417 or Aztec detector, or use the manual IATA and terminal selectors. The scanner is deliberately transparent: it reads the barcode locally and asks you to check the fields it fills.' },
  { type: 'title', text: 'How to build a useful estimate', level: 2 },
  { type: 'list', items: ['Enter the scheduled landing and onward departure times shown on your itinerary.', 'Add the time for the actual terminal or gate movement, including a shuttle if one is required.', 'Add each control or baggage step that applies to your ticket and route.', 'Keep a personal buffer for finding the gate, boarding cutoffs, mobility needs, or an unfamiliar airport.', 'Use the delay stress test to see how quickly the spare margin disappears.'] },
  { type: 'title', text: 'How to read the two margins', level: 2 },
  { type: 'paragraph', html: 'The main margin is what remains before the gate closes after your planned steps. The stress margin subtracts the extra arrival delay you entered as a simple what-if. The MCT check is separate: it only becomes a sourced comparison when you enter an official airport or airline value.' },
  { type: 'tip', title: 'A positive margin is not an airport guarantee', html: 'Check the airline itinerary, terminal instructions, boarding cutoff, passport requirements, and baggage rules. The calculator does not know the airport layout, live queues, gate changes, or whether a missed connection is protected by one booking.' },
  { type: 'title', text: 'Before you rely on the result', level: 2 },
  { type: 'paragraph', html: 'Use the result to compare your own scenarios before booking or while planning a transfer. Separate tickets activate a larger baggage and check-in allowance in the quick mode, but you should still verify the airline and airport instructions. If the inbound flight is delayed, contact the airline rather than treating the simulator as a promise.' },
];

const faq = [
  { question: 'Does this calculator know the official minimum connection time?', answer: 'Only if you enter the official value yourself. MCT depends on airport, terminal, airline, route, ticket type, and controls; an empty MCT field is shown as unknown rather than guessed.' },
  { question: 'What should I include in terminal transfer?', answer: 'Include the walk, train, bus, shuttle, or gate movement between where you arrive and where you must continue. If you do not know the route yet, use a conservative estimate and verify it with the airport instructions.' },
  { question: 'Why is there a delay stress test?', answer: 'It is a transparent what-if scenario. Enter an arrival delay you want to test and compare the remaining margin without and with that delay. It does not predict the probability of a delay.' },
  { question: 'What does the self-transfer mode change?', answer: 'It adds a stronger local allowance for baggage reclaim, check-in, and the extra movement associated with separate tickets. It is a planning assumption, not a legal or airline guarantee; verify the exact steps for your itinerary.' },
];

const howTo = [
  { name: 'Enter the flight window', text: 'Add the scheduled arrival time and the departure time of the onward flight. A departure earlier on the clock is treated as the next day.' },
  { name: 'Add the connection steps', text: 'Enter terminal movement, security or passport control, baggage and check-in, and the personal buffer you want before boarding.' },
  { name: 'Test a delay', text: 'Add an arrival delay to the stress test and compare the planned margin with the stressed margin.' },
  { name: 'Verify the assumptions', text: 'Check official airport and airline instructions for terminals, controls, baggage, boarding cutoffs, and the conditions of your ticket.' },
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

export const content: ToolLocaleContent<AirportConnectionBufferUI> = {
  slug,
  title,
  description,
  ui,
  seo,
  faq,
  howTo,
  howToTitle: 'How to estimate a connecting flight buffer',
  schemas: [faqSchema, howToSchema, appSchema],
  bibliography: bibliographyEntries,
};
