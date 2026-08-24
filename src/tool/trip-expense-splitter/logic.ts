export interface Traveler {
  id: string;
  name: string;
}

export interface TripExpense {
  id: string;
  description: string;
  amount: number;
  payerId: string;
  participantIds: string[];
}

export interface TripState {
  tripName: string;
  currency: string;
  travelers: Traveler[];
  expenses: TripExpense[];
}

export interface Balance {
  travelerId: string;
  paid: number;
  owed: number;
  balance: number;
}

export interface Transfer {
  fromId: string;
  toId: string;
  amount: number;
}

export interface SplitResult {
  balances: Balance[];
  transfers: Transfer[];
  totalSpent: number;
}

const toCents = (value: number) => Math.round(value * 100);
const fromCents = (value: number) => value / 100;

const validParticipants = (expense: TripExpense, ids: Set<string>) =>
  expense.participantIds.filter((id) => ids.has(id));

const distributeCents = (amount: number, count: number) => {
  const base = Math.floor(amount / count);
  const remainder = amount - base * count;
  return Array.from({ length: count }, (_, index) => base + (index < remainder ? 1 : 0));
};

export const calculateBalances = (state: TripState): SplitResult => {
  const ids = new Set(state.travelers.map((traveler) => traveler.id));
  const balances = new Map<string, { paid: number; owed: number }>();
  state.travelers.forEach((traveler) => balances.set(traveler.id, { paid: 0, owed: 0 }));
  let totalCents = 0;

  state.expenses.forEach((expense) => {
    const amount = toCents(Number(expense.amount));
    const participants = validParticipants(expense, ids);
    if (amount <= 0 || !ids.has(expense.payerId) || participants.length === 0) return;
    balances.get(expense.payerId)!.paid += amount;
    distributeCents(amount, participants.length).forEach((share, index) => {
      balances.get(participants[index])!.owed += share;
    });
    totalCents += amount;
  });

  const result = state.travelers.map((traveler) => {
    const value = balances.get(traveler.id)!;
    return {
      travelerId: traveler.id,
      paid: fromCents(value.paid),
      owed: fromCents(value.owed),
      balance: fromCents(value.paid - value.owed),
    };
  });
  return { balances: result, transfers: settleBalances(result), totalSpent: fromCents(totalCents) };
};

export const settleBalances = (balances: Balance[]): Transfer[] => {
  const creditors = balances
    .filter((balance) => balance.balance > 0.005)
    .map((balance) => ({ id: balance.travelerId, cents: toCents(balance.balance) }))
    .sort((a, b) => b.cents - a.cents);
  const debtors = balances
    .filter((balance) => balance.balance < -0.005)
    .map((balance) => ({ id: balance.travelerId, cents: toCents(-balance.balance) }))
    .sort((a, b) => b.cents - a.cents);
  const transfers: Transfer[] = [];
  let debtorIndex = 0;
  let creditorIndex = 0;

  while (debtorIndex < debtors.length && creditorIndex < creditors.length) {
    const debtor = debtors[debtorIndex];
    const creditor = creditors[creditorIndex];
    const amount = Math.min(debtor.cents, creditor.cents);
    transfers.push({ fromId: debtor.id, toId: creditor.id, amount: fromCents(amount) });
    debtor.cents -= amount;
    creditor.cents -= amount;
    if (debtor.cents === 0) debtorIndex += 1;
    if (creditor.cents === 0) creditorIndex += 1;
  }
  return transfers;
};

export const createDefaultState = (ui: { defaultTripName: string; defaultTravelerNames: string[]; defaultExpenseNames: string[] }): TripState => {
  const travelers = ui.defaultTravelerNames.map((name, index) => ({ id: `traveler-${index + 1}`, name }));
  const expenses = ui.defaultExpenseNames.map((description, index) => ({
    id: `expense-${index + 1}`,
    description,
    amount: index === 0 ? 540 : 180,
    payerId: travelers[index % travelers.length].id,
    participantIds: travelers.map((traveler) => traveler.id),
  }));
  return { tripName: ui.defaultTripName, currency: 'EUR', travelers, expenses };
};
