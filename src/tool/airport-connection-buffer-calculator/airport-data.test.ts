import { describe, expect, it } from 'vitest';
import { getAirportProfile, getTransferEstimate } from './airport-data';

describe('local airport connection data', () => {
  it('returns the sourced Madrid terminal transfer', () => {
    const transfer = getTransferEstimate('MAD', 'T1', 'T2');
    expect(transfer?.minutes).toBe(15);
    expect(transfer?.confidence).toBe('official');
  });

  it('marks uncovered terminal pairs for manual verification', () => {
    expect(getTransferEstimate('LHR', 'T2', 'T5')).toBeUndefined();
    expect(getAirportProfile('LHR')?.terminals).toContain('T5');
  });
});
