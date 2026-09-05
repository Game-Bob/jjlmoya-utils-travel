import { describe, expect, it } from 'vitest';
import { calculateJetLagPlan, formatTime } from './logic';

const base = {
  originOffset: 1,
  destinationOffset: 9,
  departure: '2026-09-05T10:00',
  arrival: '2026-09-05T20:00',
  sleepTime: '23:00',
  wakeTime: '07:00',
  days: 8,
};

describe('jet lag recovery planner', () => {
  it('wraps local times and advances an eastward schedule', () => {
    const plan = calculateJetLagPlan(base);
    expect(plan.direction).toBe('east');
    expect(plan.offsetDifference).toBe(8);
    expect(plan.days[0]?.sleep).toBe('06:00');
    expect(plan.days.at(-1)?.sleep).toBe('23:00');
    expect(plan.targetReached).toBe(true);
  });

  it('delays a westward schedule', () => {
    const plan = calculateJetLagPlan({ ...base, originOffset: 9, destinationOffset: 1, days: 4 });
    expect(plan.direction).toBe('west');
    expect(plan.days[0]?.sleep).toBe('16:00');
    expect(plan.days.at(-1)?.sleep).toBe('19:00');
    expect(plan.remainingHours).toBe(4);
  });

  it('shows no shift for the same offset', () => {
    const plan = calculateJetLagPlan({ ...base, destinationOffset: 1, days: 5 });
    expect(plan.direction).toBe('same');
    expect(plan.days[0]?.sleep).toBe('23:00');
    expect(plan.days[0]?.light).toBe('none');
  });

  it('rejects negative travel duration without breaking the plan', () => {
    const plan = calculateJetLagPlan({ ...base, arrival: '2026-09-04T20:00' });
    expect(plan.travelHours).toBeNull();
    expect(plan.days).toHaveLength(8);
  });

  it('formats wrapped times consistently', () => {
    expect(formatTime(-60)).toBe('23:00');
    expect(formatTime(24 * 60 + 15)).toBe('00:15');
  });
});
