import type { SplitResult } from './logic';

export type SettlementStatus = 'ready' | 'balanced' | 'settle';

export const evaluateSettlement = (result: SplitResult): SettlementStatus => {
  if (result.totalSpent <= 0) return 'ready';
  return result.transfers.length === 0 ? 'balanced' : 'settle';
};
