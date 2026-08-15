export interface TripInterval {
  id: string;
  startDate: string;
  endDate: string;
  notes?: string;
}

export interface DayStatus {
  dateStr: string;
  inTrip: boolean;
  rollingUsed: number;
  isOverstay: boolean;
}

export interface CalculationResult {
  referenceDate: string;
  daysUsedIn180: number;
  daysRemaining: number;
  isCompliant: boolean;
  maxContinuousStayFromRef: number;
  earliestFullResetDate: string;
  timeline: DayStatus[];
  tripBreakdowns: {
    id: string;
    durationDays: number;
    daysInCurrentWindow: number;
  }[];
}

const MS_PER_DAY = 86400000;

export function parseDate(isoString: string): Date {
  const [y, m, d] = isoString.split('-').map(Number);
  return new Date(Date.UTC(y, m - 1, d));
}

export function formatDate(date: Date): string {
  const y = date.getUTCFullYear();
  const m = String(date.getUTCMonth() + 1).padStart(2, '0');
  const d = String(date.getUTCDate()).padStart(2, '0');
  return `${y}-${m}-${d}`;
}

export function addDays(date: Date, days: number): Date {
  return new Date(date.getTime() + days * MS_PER_DAY);
}

export function getDaysBetween(start: Date, end: Date): number {
  return Math.round((end.getTime() - start.getTime()) / MS_PER_DAY) + 1;
}

export function normalizeTrips(trips: TripInterval[]): TripInterval[] {
  return trips
    .filter((t) => t.startDate && t.endDate && t.startDate <= t.endDate)
    .sort((a, b) => a.startDate.localeCompare(b.startDate));
}

export function isDateInTrips(date: Date, trips: TripInterval[]): boolean {
  const dateStr = formatDate(date);
  return trips.some((t) => dateStr >= t.startDate && dateStr <= t.endDate);
}

export function countDaysSpentInWindow(windowStart: Date, windowEnd: Date, trips: TripInterval[]): number {
  let count = 0;
  let current = new Date(windowStart.getTime());
  while (current <= windowEnd) {
    if (isDateInTrips(current, trips)) {
      count++;
    }
    current = addDays(current, 1);
  }
  return count;
}

export function buildTimeline(start: Date, end: Date, trips: TripInterval[]): DayStatus[] {
  const timeline: DayStatus[] = [];
  let cur = new Date(start.getTime());
  while (cur <= end) {
    const curStart = addDays(cur, -179);
    const rollingCount = countDaysSpentInWindow(curStart, cur, trips);
    timeline.push({
      dateStr: formatDate(cur),
      inTrip: isDateInTrips(cur, trips),
      rollingUsed: rollingCount,
      isOverstay: rollingCount > 90,
    });
    cur = addDays(cur, 1);
  }
  return timeline;
}

export function calculateMaxContinuousStay(refDate: Date, refStr: string, trips: TripInterval[]): number {
  if (isDateInTrips(refDate, trips)) {
    const start = addDays(refDate, -179);
    const used = countDaysSpentInWindow(start, refDate, trips);
    return Math.max(0, 90 - used);
  }
  let maxContinuous = 0;
  let simDate = new Date(refDate.getTime());
  while (maxContinuous < 90) {
    const testStart = addDays(simDate, -179);
    const testSpent = countDaysSpentInWindow(testStart, simDate, [
      ...trips,
      { id: 'sim', startDate: refStr, endDate: formatDate(simDate) },
    ]);
    if (testSpent > 90) {
      break;
    }
    maxContinuous++;
    simDate = addDays(simDate, 1);
  }
  return maxContinuous;
}

export function findEarliestResetDate(refDate: Date, trips: TripInterval[]): string {
  let futureDate = new Date(refDate.getTime());
  for (let i = 0; i <= 365; i++) {
    const checkStart = addDays(futureDate, -179);
    if (countDaysSpentInWindow(checkStart, futureDate, trips) === 0) {
      return formatDate(futureDate);
    }
    futureDate = addDays(futureDate, 1);
  }
  return formatDate(refDate);
}

export function calculateTripBreakdowns(
  trips: TripInterval[],
  windowStart: Date,
  refDate: Date
) {
  return trips.map((trip) => {
    const s = parseDate(trip.startDate);
    const e = parseDate(trip.endDate);
    const overlapStart = s < windowStart ? windowStart : s;
    const overlapEnd = e > refDate ? refDate : e;
    const inWindow = overlapStart <= overlapEnd ? getDaysBetween(overlapStart, overlapEnd) : 0;
    return {
      id: trip.id,
      durationDays: getDaysBetween(s, e),
      daysInCurrentWindow: inWindow,
    };
  });
}

export function calculateSchengenCompliance(
  rawTrips: TripInterval[],
  referenceDateStr: string
): CalculationResult {
  const trips = normalizeTrips(rawTrips);
  const refDate = parseDate(referenceDateStr);
  const windowStartDate = addDays(refDate, -179);
  const daysUsedIn180 = countDaysSpentInWindow(windowStartDate, refDate, trips);
  return {
    referenceDate: referenceDateStr,
    daysUsedIn180,
    daysRemaining: Math.max(0, 90 - daysUsedIn180),
    isCompliant: daysUsedIn180 <= 90,
    maxContinuousStayFromRef: calculateMaxContinuousStay(refDate, referenceDateStr, trips),
    earliestFullResetDate: findEarliestResetDate(refDate, trips),
    timeline: buildTimeline(windowStartDate, refDate, trips),
    tripBreakdowns: calculateTripBreakdowns(trips, windowStartDate, refDate),
  };
}
