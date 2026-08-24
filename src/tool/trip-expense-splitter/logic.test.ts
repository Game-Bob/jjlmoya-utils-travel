import { describe, expect, it } from 'vitest';
import { calculateBalances, settleBalances, type TripState } from './logic';

const state: TripState = {
  tripName: 'Weekend',
  currency: 'EUR',
  travelers: [
    { id: 'a', name: 'A' },
    { id: 'b', name: 'B' },
    { id: 'c', name: 'C' },
  ],
  expenses: [
    { id: 'one', description: 'Cabin', amount: 90, payerId: 'a', participantIds: ['a', 'b', 'c'] },
    { id: 'two', description: 'Dinner', amount: 30, payerId: 'b', participantIds: ['a', 'b'] },
  ],
};

describe('trip expense splitter logic', () => {
  it('calculates paid, owed and net balances', () => {
    const result = calculateBalances(state);
    expect(result.totalSpent).toBe(120);
    expect(result.balances).toEqual([
      { travelerId: 'a', paid: 90, owed: 45, balance: 45 },
      { travelerId: 'b', paid: 30, owed: 45, balance: -15 },
      { travelerId: 'c', paid: 0, owed: 30, balance: -30 },
    ]);
  });

  it('minimizes transfers with a deterministic greedy settlement', () => {
    const result = calculateBalances(state);
    expect(result.transfers).toEqual([
      { fromId: 'c', toId: 'a', amount: 30 },
      { fromId: 'b', toId: 'a', amount: 15 },
    ]);
  });

  it('splits cents without losing the remainder', () => {
    const result = calculateBalances({ ...state, expenses: [{ ...state.expenses[0], amount: 10, participantIds: ['a', 'b', 'c'] }] });
    expect(result.balances.map((balance) => balance.owed)).toEqual([3.34, 3.33, 3.33]);
  });

  it('ignores invalid expenses and unknown participants', () => {
    const result = calculateBalances({ ...state, expenses: [{ ...state.expenses[0], amount: 0, payerId: 'unknown', participantIds: ['unknown'] }] });
    expect(result.totalSpent).toBe(0);
    expect(result.transfers).toEqual([]);
  });

  it('returns no transfer for a balanced group', () => {
    expect(settleBalances(state.travelers.map((traveler) => ({ travelerId: traveler.id, paid: 10, owed: 10, balance: 0 })))).toEqual([]);
  });
});
