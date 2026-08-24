import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import { bibliographyEntries } from '../bibliography';
import type { TripExpenseSplitterUI } from '../ui';

const slug = 'trip-expense-splitter';
const title = 'Trip Expense Splitter for Shared Travel Costs';
const description = 'Split shared trip expenses between travelers, see who paid too much or too little, and settle the group with the fewest practical transfers. Everything stays in your browser.';

const ui: TripExpenseSplitterUI = {
  tripNameLabel: 'Trip name', tripNamePlaceholder: 'Name this trip', currencyLabel: 'Currency', travelersHeading: 'Travelers', travelerPlaceholder: 'Traveler', addTraveler: 'Add traveler', removeTraveler: 'Remove traveler', expensesHeading: 'Expense ledger', expenseDescriptionPlaceholder: 'What was it for?', amountLabel: 'Amount', payerLabel: 'paid by', participantsLabel: 'Split between', allTravelers: 'travelers', addExpense: 'Add expense', emptyExpenses: 'Your ledger is clear. Add the first shared expense.', resultHeading: 'Suggested transfers', totalSpent: 'Group spend', transferCount: 'transfers', noTransfers: 'Everyone is even. No hand-offs needed.', owes: 'owes', receives: 'receives', from: 'from', to: 'to', eachPays: 'Each person pays', eachReceives: 'Each person receives', settlementHint: 'The route shows the people in this trip and the settlement path.', copyLink: 'Copy share link', copied: 'Link copied', exportJson: 'Export JSON', reset: 'Start over', removeExpense: 'Remove expense', deleteTrip: 'Reset this trip', intro: 'Enter what the group paid for. The route below turns the ledger into a short settlement plan.', statusBalanced: 'Balanced trip', statusSettle: 'Ready to settle', statusReady: 'Waiting for expenses', currencyOptions: [{ code: 'EUR', symbol: '€' }, { code: 'USD', symbol: '$' }, { code: 'GBP', symbol: '£' }], defaultTripName: 'Alpine weekend', defaultTravelerNames: ['Maya', 'Alex', 'Sam'], defaultExpenseNames: ['Cabin', 'Train tickets'],
};

const seo: ToolLocaleContent<TripExpenseSplitterUI>['seo'] = [
  { type: 'title', text: 'How to split shared trip expenses fairly', level: 2 },
  { type: 'paragraph', html: 'A group trip becomes easier to close when every expense has a payer and a clear set of participants. This calculator totals what each traveler paid, assigns each shared cost evenly to the people who used it, and compares those figures to produce a compact settlement plan.' },
  { type: 'title', text: 'How the trip expense splitter calculates balances', level: 2 },
  { type: 'table', headers: ['Stage', 'Calculation', 'Purpose'], rows: [['Paid total', 'Add expenses paid by each traveler', 'Record the money already fronted'], ['Fair share', 'Divide each expense between its selected participants', 'Assign the cost to the people who used it'], ['Net balance', 'Paid total minus fair share', 'Show who should receive or pay'], ['Settlement', 'Match the largest debts with the largest credits', 'Reduce the number of hand-offs']] },
  { type: 'tip', title: 'Agree the split before entering it', html: 'Use the participant chips for each expense. A room may be shared by everyone, while a museum ticket or a private meal may belong to a smaller group.' },
  { type: 'title', text: 'Keep the final conversation simple', level: 2 },
  { type: 'paragraph', html: 'The result is a planning aid, not a bank transfer. Check the ledger together, round only when your group agrees, and use the suggested hand-offs as the shortest practical route to settle the trip.' },
];

const faq = [
  { question: 'How does a trip expense splitter work?', answer: 'Enter the travelers, each expense, the person who paid, and the people who shared it. The calculator totals each person\'s payments and fair share, then matches debtors with creditors to suggest a short settlement list.' },
  { question: 'Can an expense be shared by only some travelers?', answer: 'Yes. Select the participants for each expense. The amount is divided equally among those selected people, so a private meal or a separate activity does not affect the whole group.' },
  { question: 'Does this tool upload my trip expenses?', answer: 'No. The calculator runs in your browser and stores the current trip locally. You can export a JSON copy or copy a share link when you choose to send the data somewhere.' },
  { question: 'Why are there fewer transfers than expenses?', answer: 'The tool first combines every payment into a net balance for each traveler. It then matches people who owe money with people who should receive money, avoiding unnecessary back-and-forth payments.' },
];

const howTo = [
  { name: 'Add the travelers', text: 'Enter the names of everyone who should appear in the trip settlement.' },
  { name: 'Record each expense', text: 'Add a description and amount, choose who paid, and select the travelers who shared that cost.' },
  { name: 'Follow the settlement route', text: 'Review the net balances and use the suggested transfers to settle the group with fewer hand-offs.' },
];

const faqSchema: WithContext<FAQPage> = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faq.map((item) => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } })) };
const howToSchema: WithContext<HowTo> = { '@context': 'https://schema.org', '@type': 'HowTo', name: title, description, step: howTo.map((step) => ({ '@type': 'HowToStep', name: step.name, text: step.text })) };
const appSchema: WithContext<SoftwareApplication> = { '@context': 'https://schema.org', '@type': 'SoftwareApplication', name: title, description, applicationCategory: 'TravelApplication', operatingSystem: 'All', offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' }, inLanguage: 'en' };

export const content: ToolLocaleContent<TripExpenseSplitterUI> = { slug, title, description, ui, seo, faq, howTo, howToTitle: 'How to split shared trip expenses', schemas: [appSchema, faqSchema, howToSchema], bibliography: bibliographyEntries };
