import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { SchengenCalculatorUI } from '../ui';
import { bibliographyEntries } from '../bibliography';

const slug = 'schengen-calculator';
const title = 'Schengen 90/180 Visa Stay Calculator';
const description =
  'Check if your planned European trip is legal under the 90/180 rolling visa rule. Calculate allowed stay days and avoid overstays with real-time border tracking.';

const ui: SchengenCalculatorUI = {
  verdictSafeTitle: 'Safe to Travel (Within Legal Limits)',
  verdictWarningTitle: 'Caution: Approaching 90-Day Limit',
  verdictOverstayTitle: 'Illegal Overstay Detected',
  daysRemainingSub: 'Days Allowed Remaining',
  daysUsedSub: 'Days Used in 180-Day Window',
  maxStaySub: 'Max Continuous Stay from Date',
  fullResetSub: 'Full 90-Day Reset Date',
  plannerHeading: '1. Check Status on Target Date',
  plannerEntryLabel: 'Evaluation Date (Entry / Flight Date)',
  quickDatesLabel: 'Jump to Date',
  presetToday: 'Today',
  presetPlus7: '+1 Week',
  presetPlus14: '+2 Weeks',
  presetPlus30: '+1 Month',
  tripsHeading: '2. Your Schengen Trips (Past & Planned)',
  addTripBtn: '+ Add Trip',
  emptyTripsMsg: 'No trips added yet. Add past or planned trips to calculate your Schengen allowance.',
  colArrival: 'Entry (Arrival)',
  colDeparture: 'Exit (Departure)',
  colDestination: 'Country / Notes',
  colDays: 'Days',
  sampleBtn: 'Load Sample Trips',
  clearBtn: 'Clear All',
  timelineTitle: '180-Day Rolling Window',
  legendInSchengen: 'In Schengen',
  legendOutside: 'Outside',
  legendOverstay: 'Overstay',
  bannerSafe: 'On {date}, you will have used {used} ({rem} available).',
  bannerWarning: 'On {date}, you will have used {used} (only {rem} remaining).',
  bannerOverstay: 'Overstay violation detected starting on {date}. Your itinerary exceeds the legal limit by {days}.',
  unitDays: 'days',
  notesPlaceholder: 'e.g. France, Spain',
  sampleNotes1: 'Italy Roadtrip (20 days)',
  sampleNotes2: 'Germany & Austria (20 days)',
  sampleNotesDefault: 'France & Spain',
};

const seo: ToolLocaleContent<SchengenCalculatorUI>['seo'] = [
  {
    type: 'title',
    text: 'How the 90 180 Schengen Rule Actually Works',
    level: 2,
  },
  {
    type: 'summary',
    title: 'Core Principles of the Schengen Rolling Window System',
    items: [
      'Non-EU travelers can stay up to 90 days within any rolling 180-day reference period.',
      'The 180-day window is perpetually dynamic and looks backward from each individual day of presence.',
      'Both arrival day and departure day count as full calendar days of physical presence.',
      'Leaving Europe does not automatically reset your allowance unless you spend 90 consecutive days outside.',
    ],
  },
  {
    type: 'paragraph',
    html: 'The Schengen Area enforces a strict <strong>90-day maximum duration of stay within any 180-day window</strong> for third-country nationals traveling visa-free or on a standard Uniform Schengen C-type visa under Article 6(1) of the <em>Schengen Borders Code (Regulation EU 2016/399)</em>. Unlike calendar-year quotas or fixed reset dates, the observation window is perpetually moving. On every single day of your physical presence in the European territory, immigration authorities calculate the exact number of days spent inside the area across the preceding 179 days plus the current day.',
  },
  {
    type: 'title',
    text: 'Key Regulatory Metrics and Border Standards',
    level: 2,
  },
  {
    type: 'stats',
    items: [
      {
        value: '90 Days',
        label: 'Maximum Total Stay',
      },
      {
        value: '180 Days',
        label: 'Rolling Lookback Horizon',
      },
      {
        value: 'Both Ends',
        label: 'Inclusive Border Rule',
      },
      {
        value: '29 States',
        label: 'Unified Territorial Zone',
      },
    ],
  },
  {
    type: 'title',
    text: 'Fixed Calendar Quotas vs Dynamic Rolling Windows',
    level: 2,
  },
  {
    type: 'comparative',
    items: [
      {
        title: 'Outdated Fixed Calendar Approach',
        description:
          'Visitors frequently assume that their 90 days reset automatically on January 1st or reset after exiting the continent for a brief period. This common misconception leads to accidental overstays and severe administrative penalties.',
      },
      {
        title: 'Enforced Dynamic Rolling Window',
        description:
          'Every single day spent inside any Schengen member state is tracked on a continuous timeline. As time progresses forward, older days drop off the back of the 180-day window one day at a time, gradually unlocking new allowable allowance.',
      },
    ],
  },
  {
    type: 'title',
    text: 'Standard Travel Profiles and Compliance Outcomes',
    level: 2,
  },
  {
    type: 'table',
    headers: ['Travel Profile', 'Pattern Example', 'Compliance Status', 'Operational Advice'],
    rows: [
      [
        'Single Continuous Stay',
        'Enter June 1, exit August 29 (90 days)',
        'Compliant',
        'Must exit immediately on day 90 and stay outside the area for a full 90 consecutive days before re-entry.',
      ],
      [
        'Multi-Trip Frequent Traveler',
        'Three separate 30-day trips with 30-day gaps',
        'Compliant',
        'Each trip must be verified against its rolling 180-day lookback window at both entry and exit borders.',
      ],
      [
        'Digital Nomad Hopping',
        'Alternating 60 days inside Schengen and 30 days outside',
        'High Risk of Overstay',
        'A 30-day gap only recovers 30 days from the oldest trips that occurred 180 days prior, risking sudden denial at border.',
      ],
      [
        'Full 90-Day Reset',
        'Continuous 90-day absence outside Schengen',
        'Fully Restored',
        'Guarantees complete restoration of the maximum 90-day allowance upon next entry.',
      ],
    ],
  },
  {
    type: 'title',
    text: 'Strategic Guidelines for Border Compliance',
    level: 2,
  },
  {
    type: 'tip',
    title: 'Plan Safety Buffer Days',
    html: 'Never schedule your departure flight on exactly day 90. Unforeseen airline cancellations, mechanical delays, or medical emergencies could push your exit to day 91, resulting in an automatic overstay registration on European Entry/Exit System (EES) databases, administrative fines, and entry bans.',
  },
  {
    type: 'card',
    title: 'Proof of Physical Presence Outside Schengen',
    html: 'Always retain passport stamps, flight boarding passes, train tickets, and accommodation receipts from non-Schengen countries (such as the United Kingdom, Ireland, Cyprus, Montenegro, or Albania) to definitively substantiate days spent outside the zone if audited.',
  },
  {
    type: 'title',
    text: 'Schengen Border Terminology Glossary',
    level: 2,
  },
  {
    type: 'glossary',
    items: [
      {
        term: 'Overstay',
        definition:
          'Remaining within the Schengen territory beyond the legally permitted 90 days in any 180-day period, resulting in fines, deportation, or future entry bans.',
      },
      {
        term: 'EES (Entry/Exit System)',
        definition:
          'The automated IT system registering non-EU travelers entering and exiting the Schengen area, replacing manual passport stamping with biometric tracking.',
      },
      {
        term: 'Third-Country National',
        definition:
          'Any individual who is not a citizen of an EU member state or an EFTA member country (Iceland, Liechtenstein, Norway, Switzerland).',
      },
    ],
  },
];

const faq: ToolLocaleContent<SchengenCalculatorUI>['faq'] = [
  {
    question: 'What is the 90 180 rule in the Schengen Area?',
    answer:
      'It allows non-EU citizens traveling visa-free or on a short-stay C visa to remain in the 29 Schengen member states for up to 90 days within any moving 180-day window.',
  },
  {
    question: 'Does the 90-day allowance reset after leaving Europe?',
    answer:
      'No. Leaving the Schengen zone does not automatically reset your allowance. The 180-day period is a rolling window looking backward from every single day. Full 90-day restoration only occurs after 90 consecutive days spent outside the Schengen zone.',
  },
  {
    question: 'Do entry and exit days count as full days of stay?',
    answer:
      'Yes. Under Article 6(1) of the Schengen Borders Code, both the day of arrival and the day of departure are counted as full calendar days spent in the Schengen territory.',
  },
  {
    question: 'Which countries belong to the Schengen Area for this calculation?',
    answer:
      'The area includes Austria, Belgium, Bulgaria, Croatia, Czech Republic, Denmark, Estonia, Finland, France, Germany, Greece, Hungary, Iceland, Italy, Latvia, Liechtenstein, Lithuania, Luxembourg, Malta, Netherlands, Norway, Poland, Portugal, Romania, Slovakia, Slovenia, Spain, Sweden, and Switzerland. Ireland and the UK are not in Schengen.',
  },
];

const howTo: ToolLocaleContent<SchengenCalculatorUI>['howTo'] = [
  {
    name: 'Enter Your Reference Planning Date',
    text: 'Select the date for which you want to calculate your current or future legal status, such as today or your upcoming flight date.',
  },
  {
    name: 'Log Your Past and Planned Trips',
    text: 'Add each individual entry and exit date for all stays inside the Schengen area over the past 6 to 12 months.',
  },
  {
    name: 'Review Remaining Days and Safe Horizon',
    text: 'Examine the allowance gauge, maximum continuous stay limit, and rolling timeline to verify you remain strictly within 90 days.',
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
  description,
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
  description,
  applicationCategory: 'TravelApplication',
  operatingSystem: 'All',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  inLanguage: 'en',
};

export const content: ToolLocaleContent<SchengenCalculatorUI> = {
  slug,
  title,
  description,
  ui,
  seo,
  faq,
  howTo,
  howToTitle: 'How to calculate Schengen stay',
  schemas: [faqSchema, howToSchema, appSchema],
  bibliography: bibliographyEntries,
};
