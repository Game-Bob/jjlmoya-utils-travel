import type { ConnectionStatus } from './logic';

export interface ConnectionEvaluation {
  status: ConnectionStatus;
  tone: 'positive' | 'caution' | 'negative';
}

export function evaluateConnection(status: ConnectionStatus): ConnectionEvaluation {
  if (status === 'comfortable') return { status, tone: 'positive' };
  if (status === 'tight') return { status, tone: 'caution' };
  return { status, tone: 'negative' };
}
