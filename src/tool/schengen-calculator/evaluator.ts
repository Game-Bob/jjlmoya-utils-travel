import { parseDate, formatDate, addDays, countDaysSpentInWindow, type TripInterval } from './logic';

export interface OverstayScanResult {
  firstOverstayDate: string | null;
  maxOverstayDays: number;
  peakDaysUsed: number;
  daysUsedAtRef: number;
}

export function scanOverstayDetails(
  trips: TripInterval[],
  refDate: Date
): OverstayScanResult {
  const windowStart = addDays(refDate, -179);
  const daysUsedAtRef = countDaysSpentInWindow(windowStart, refDate, trips);
  let peakDaysUsed = daysUsedAtRef;
  let firstOverstayDate: string | null = null;
  let maxOverstayDays = 0;

  const dates = getMinMaxTripDates(trips, refDate);
  let scanDate = new Date(dates.min.getTime());

  while (scanDate <= dates.max) {
    const scanStart = addDays(scanDate, -179);
    const usedOnScan = countDaysSpentInWindow(scanStart, scanDate, trips);
    if (usedOnScan > peakDaysUsed) {
      peakDaysUsed = usedOnScan;
    }
    if (usedOnScan > 90) {
      if (!firstOverstayDate) {
        firstOverstayDate = formatDate(scanDate);
      }
      if (usedOnScan - 90 > maxOverstayDays) {
        maxOverstayDays = usedOnScan - 90;
      }
    }
    scanDate = addDays(scanDate, 1);
  }

  return { firstOverstayDate, maxOverstayDays, peakDaysUsed, daysUsedAtRef };
}

function getMinMaxTripDates(trips: TripInterval[], fallback: Date) {
  let min = fallback;
  let max = fallback;
  trips.forEach((t) => {
    if (t.startDate) {
      const s = parseDate(t.startDate);
      if (s < min) min = s;
    }
    if (t.endDate) {
      const e = parseDate(t.endDate);
      if (e > max) max = e;
    }
  });
  return { min, max };
}

export function hasTripOverstay(trip: TripInterval, allTrips: TripInterval[]): boolean {
  if (!trip.startDate || !trip.endDate || trip.startDate > trip.endDate) {
    return false;
  }
  const s = parseDate(trip.startDate);
  const e = parseDate(trip.endDate);
  let cur = new Date(s.getTime());
  while (cur <= e) {
    const checkStart = addDays(cur, -179);
    if (countDaysSpentInWindow(checkStart, cur, allTrips) > 90) {
      return true;
    }
    cur = addDays(cur, 1);
  }
  return false;
}
