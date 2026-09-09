import { describe, expect, it } from 'vitest';
import {
  calculateConnection,
  clockToMinutes,
  minutesBetween,
  statusFromMargin,
} from './logic';

describe('airport connection buffer logic', () => {
  it('parses valid clock values and rejects malformed values', () => {
    expect(clockToMinutes('09:45')).toBe(585);
    expect(clockToMinutes('9:45')).toBeNull();
    expect(clockToMinutes('24:00')).toBeNull();
    expect(clockToMinutes('09:60')).toBeNull();
  });

  it('handles same-day and overnight connection windows', () => {
    expect(minutesBetween('09:00', '11:30')).toBe(150);
    expect(minutesBetween('23:10', '01:00')).toBe(110);
    expect(minutesBetween('bad', '01:00')).toBe(0);
  });

  it('classifies the remaining margin', () => {
    expect(statusFromMargin(-1)).toBe('missed');
    expect(statusFromMargin(0)).toBe('tight');
    expect(statusFromMargin(29)).toBe('tight');
    expect(statusFromMargin(30)).toBe('comfortable');
  });

  it('calculates planned and stress margins', () => {
    const result = calculateConnection({
    arrivalTime: '10:00',
    departureTime: '13:00',
    airportCode: 'MAD',
    arrivalTerminal: 'T1',
    departureTerminal: 'T2',
    flightNumber: '',
    connectionFlightNumber: '',
    deplaningMinutes: 15,
    transferMinutes: 20,
    controlMinutes: 35,
    baggageMinutes: 15,
    personalBufferMinutes: 20,
    gateCloseMinutes: 20,
    officialMctMinutes: 90,
    delayMinutes: 30,
    baggageMode: 'checked',
    routeRule: 'custom',
    });

    expect(result).toEqual({
      valid: true,
      windowMinutes: 180,
      gateWindowMinutes: 160,
      plannedMinutes: 105,
      stressMinutes: 135,
      plannedMarginMinutes: 55,
      stressMarginMinutes: 25,
      plannedStatus: 'comfortable',
      stressStatus: 'tight',
      mctMinutes: 90,
      mctGapMinutes: 90,
      mctStatus: 'pass',
    });
  });

  it('treats negative, non-finite, equal, and invalid inputs safely', () => {
    const result = calculateConnection({
      arrivalTime: '10:00',
      departureTime: '10:00',
      airportCode: 'MAD',
      arrivalTerminal: 'T1',
      departureTerminal: 'T2',
      flightNumber: '',
      connectionFlightNumber: '',
      deplaningMinutes: 15,
      transferMinutes: -5,
      controlMinutes: Number.NaN,
      baggageMinutes: Number.POSITIVE_INFINITY,
      personalBufferMinutes: 15,
      gateCloseMinutes: 20,
      officialMctMinutes: 0,
      delayMinutes: 0,
      baggageMode: 'checked',
      routeRule: 'custom',
    });

    expect(result.valid).toBe(false);
    expect(result.windowMinutes).toBe(0);
    expect(result.plannedMinutes).toBe(30);
    expect(result.stressMinutes).toBe(30);
    expect(result.plannedStatus).toBe('missed');
  });
});
