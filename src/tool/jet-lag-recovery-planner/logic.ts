export type TravelDirection = 'east' | 'west' | 'same';

export interface JetLagInputs {
  originOffset: number;
  destinationOffset: number;
  departure: string;
  arrival: string;
  sleepTime: string;
  wakeTime: string;
  days: number;
}

export interface JetLagDay {
  day: number;
  sleep: string;
  wake: string;
  breakfast: string;
  lunch: string;
  dinner: string;
  light: 'morning' | 'afternoon' | 'none';
  shiftHours: number;
}

export interface JetLagPlan {
  direction: TravelDirection;
  offsetDifference: number;
  absoluteDifference: number;
  travelHours: number | null;
  dailyShift: number;
  targetReached: boolean;
  remainingHours: number;
  days: JetLagDay[];
}

const MINUTES_IN_DAY = 24 * 60;

const toMinutes = (time: string): number => {
  const [hours, minutes] = time.split(':').map(Number);
  if (!Number.isFinite(hours) || !Number.isFinite(minutes)) return 0;
  return Math.max(0, Math.min(MINUTES_IN_DAY - 1, hours * 60 + minutes));
};

const wrapMinutes = (minutes: number): number => ((minutes % MINUTES_IN_DAY) + MINUTES_IN_DAY) % MINUTES_IN_DAY;

export const formatTime = (minutes: number): string => {
  const wrapped = wrapMinutes(Math.round(minutes));
  return `${String(Math.floor(wrapped / 60)).padStart(2, '0')}:${String(wrapped % 60).padStart(2, '0')}`;
};

const hoursBetween = (start: string, end: string): number | null => {
  const startDate = new Date(start);
  const endDate = new Date(end);
  if (Number.isNaN(startDate.getTime()) || Number.isNaN(endDate.getTime())) return null;
  const difference = (endDate.getTime() - startDate.getTime()) / 3_600_000;
  return difference >= 0 ? Math.round(difference * 10) / 10 : null;
};

const resolveDirection = (offsetDifference: number): TravelDirection => {
  if (offsetDifference === 0) return 'same';
  return offsetDifference > 0 ? 'east' : 'west';
};

const buildDay = (inputs: JetLagInputs, context: { offsetDifference: number; direction: TravelDirection; dailyShift: number; day: number }): JetLagDay => {
  const progress = Math.min(Math.abs(context.offsetDifference), context.dailyShift * (context.day + 1));
  const adjustment = context.direction === 'east' ? -progress : progress;
  const sleep = toMinutes(inputs.sleepTime) + context.offsetDifference * 60 + adjustment * 60;
  const wake = toMinutes(inputs.wakeTime) + context.offsetDifference * 60 + adjustment * 60;
  let light: JetLagDay['light'] = 'none';
  if (context.direction === 'east') light = 'morning';
  if (context.direction === 'west') light = 'afternoon';
  return {
    day: context.day + 1,
    sleep: formatTime(sleep),
    wake: formatTime(wake),
    breakfast: formatTime(wake + 60),
    lunch: formatTime(wake + 5 * 60),
    dinner: formatTime(wake + 10 * 60),
    light,
    shiftHours: Math.round(progress * 10) / 10,
  };
};

export const calculateJetLagPlan = (inputs: JetLagInputs): JetLagPlan => {
  const offsetDifference = inputs.destinationOffset - inputs.originOffset;
  const absoluteDifference = Math.abs(offsetDifference);
  const direction = resolveDirection(offsetDifference);
  const daysCount = Math.max(1, Math.min(14, Math.round(inputs.days)));
  const dailyShift = absoluteDifference === 0 ? 0 : Math.min(1, absoluteDifference / daysCount);
  const travelHours = hoursBetween(inputs.departure, inputs.arrival);
  const plan = Array.from({ length: daysCount }, (_, day) => buildDay(inputs, { offsetDifference, direction, dailyShift, day }));
  const shifted = plan.at(-1)?.shiftHours ?? 0;
  return {
    direction,
    offsetDifference,
    absoluteDifference,
    travelHours,
    dailyShift: Math.round(dailyShift * 10) / 10,
    targetReached: shifted >= absoluteDifference,
    remainingHours: Math.max(0, Math.round((absoluteDifference - shifted) * 10) / 10),
    days: plan,
  };
};
