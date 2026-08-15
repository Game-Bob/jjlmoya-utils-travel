import { describe, it, expect } from 'vitest';
import {
  parseDate,
  formatDate,
  addDays,
  getDaysBetween,
  normalizeTrips,
  countDaysSpentInWindow,
  calculateSchengenCompliance,
  type TripInterval,
} from './logic';

describe('Schengen Calculator Logic', () => {
  it('parses and formats dates consistently in UTC', () => {
    const d = parseDate('2026-06-15');
    expect(formatDate(d)).toBe('2026-06-15');
  });

  it('adds days accurately without timezone drift', () => {
    const d = parseDate('2026-01-01');
    const dPlus30 = addDays(d, 30);
    expect(formatDate(dPlus30)).toBe('2026-01-31');
  });

  it('calculates inclusive days between dates', () => {
    const s = parseDate('2026-05-01');
    const e = parseDate('2026-05-10');
    expect(getDaysBetween(s, e)).toBe(10);
  });

  it('filters invalid or inverted trip intervals', () => {
    const raw: TripInterval[] = [
      { id: '1', startDate: '2026-06-10', endDate: '2026-06-01' },
      { id: '2', startDate: '2026-05-01', endDate: '2026-05-10' },
      { id: '3', startDate: '', endDate: '2026-05-10' },
    ];
    const normalized = normalizeTrips(raw);
    expect(normalized.length).toBe(1);
    expect(normalized[0].id).toBe('2');
  });

  it('computes compliance when no trips are logged', () => {
    const res = calculateSchengenCompliance([], '2026-08-01');
    expect(res.daysUsedIn180).toBe(0);
    expect(res.daysRemaining).toBe(90);
    expect(res.isCompliant).toBe(true);
    expect(res.maxContinuousStayFromRef).toBe(90);
  });

  it('calculates rolling 180-day consumption for single 30-day trip', () => {
    const trips: TripInterval[] = [
      { id: 'trip1', startDate: '2026-06-01', endDate: '2026-06-30' },
    ];
    const res = calculateSchengenCompliance(trips, '2026-07-15');
    expect(res.daysUsedIn180).toBe(30);
    expect(res.daysRemaining).toBe(60);
    expect(res.isCompliant).toBe(true);
  });

  it('flags overstay when 90-day limit is exceeded in 180-day rolling window', () => {
    const trips: TripInterval[] = [
      { id: 'trip1', startDate: '2026-01-01', endDate: '2026-03-31' },
      { id: 'trip2', startDate: '2026-04-15', endDate: '2026-04-30' },
    ];
    const res = calculateSchengenCompliance(trips, '2026-05-01');
    expect(res.daysUsedIn180).toBeGreaterThan(90);
    expect(res.daysRemaining).toBe(0);
    expect(res.isCompliant).toBe(false);
  });

  it('counts days spent in window directly', () => {
    const trips = normalizeTrips([
      { id: 'trip1', startDate: '2026-01-01', endDate: '2026-01-10' },
    ]);
    const start = parseDate('2026-01-01');
    const end = parseDate('2026-01-15');
    expect(countDaysSpentInWindow(start, end, trips)).toBe(10);
  });
});
