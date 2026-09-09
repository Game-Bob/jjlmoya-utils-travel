import { describe, expect, it } from 'vitest';
import { parseBcbp } from './bcbp';

describe('boarding pass barcode parsing', () => {
  it('normalizes a decoded BCBP payload and extracts known airport codes', () => {
    const result = parseBcbp('MADMADLHR IB3166 123');
    expect(result.rawValue).toBe('MADMADLHR IB3166 123');
    expect(result.origin).toBe('MAD');
    expect(result.destination).toBe('LHR');
    expect(result.flightNumber).toBe('IB3166');
    expect(result.flightDate).toBe('123');
  });

  it('keeps unknown payloads safe for manual completion', () => {
    expect(parseBcbp('not a boarding pass')).toEqual({ rawValue: 'NOT A BOARDING PASS' });
  });
});
