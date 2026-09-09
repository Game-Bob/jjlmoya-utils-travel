export type BaggageMode = 'hand' | 'checked' | 'self-transfer';
export type RouteRule = 'domestic' | 'schengen' | 'us-international' | 'custom';

export interface ConnectionInputs {
  arrivalTime: string;
  departureTime: string;
  airportCode: string;
  arrivalTerminal: string;
  departureTerminal: string;
  flightNumber: string;
  connectionFlightNumber: string;
  transferMinutes: number;
  controlMinutes: number;
  baggageMinutes: number;
  deplaningMinutes: number;
  personalBufferMinutes: number;
  gateCloseMinutes: number;
  officialMctMinutes: number;
  delayMinutes: number;
  baggageMode: BaggageMode;
  routeRule: RouteRule;
}

export type ConnectionStatus = 'comfortable' | 'tight' | 'missed';

export interface ConnectionResult {
  valid: boolean;
  windowMinutes: number;
  gateWindowMinutes: number;
  plannedMinutes: number;
  stressMinutes: number;
  plannedMarginMinutes: number;
  stressMarginMinutes: number;
  plannedStatus: ConnectionStatus;
  stressStatus: ConnectionStatus;
  mctMinutes: number;
  mctGapMinutes: number;
  mctStatus: 'pass' | 'fail' | 'unknown';
}

function positiveMinutes(value: number): number {
  return Number.isFinite(value) && value > 0 ? value : 0;
}

export function clockToMinutes(value: string): number | null {
  if (!/^\d{2}:\d{2}$/.test(value)) return null;

  const [hoursText, minutesText] = value.split(':');
  const hours = Number(hoursText);
  const minutes = Number(minutesText);
  if (hours > 23 || minutes > 59) return null;

  return hours * 60 + minutes;
}

export function minutesBetween(arrivalTime: string, departureTime: string): number {
  const arrival = clockToMinutes(arrivalTime);
  const departure = clockToMinutes(departureTime);
  if (arrival === null || departure === null) return 0;

  const difference = departure - arrival;
  return difference < 0 ? difference + 1440 : difference;
}

export function statusFromMargin(marginMinutes: number): ConnectionStatus {
  if (marginMinutes < 0) return 'missed';
  if (marginMinutes < 30) return 'tight';
  return 'comfortable';
}

function mctStatus(windowMinutes: number, mctMinutes: number): 'pass' | 'fail' | 'unknown' {
  if (mctMinutes <= 0) return 'unknown';
  return windowMinutes >= mctMinutes ? 'pass' : 'fail';
}

function plannedStepMinutes(inputs: ConnectionInputs): number {
  const steps = [inputs.deplaningMinutes, inputs.transferMinutes, inputs.controlMinutes, inputs.baggageMinutes, inputs.personalBufferMinutes];
  return steps.reduce((total, value) => total + positiveMinutes(value), 0);
}

export function calculateConnection(inputs: ConnectionInputs): ConnectionResult {
  const arrival = clockToMinutes(inputs.arrivalTime);
  const departure = clockToMinutes(inputs.departureTime);
  const valid = arrival !== null && departure !== null && arrival !== departure;
  const windowMinutes = valid ? minutesBetween(inputs.arrivalTime, inputs.departureTime) : 0;
  const gateWindowMinutes = Math.max(0, windowMinutes - positiveMinutes(inputs.gateCloseMinutes));
  const plannedMinutes = plannedStepMinutes(inputs);
  const stressMinutes = plannedMinutes + positiveMinutes(inputs.delayMinutes);
  const plannedMarginMinutes = gateWindowMinutes - plannedMinutes;
  const stressMarginMinutes = gateWindowMinutes - stressMinutes;
  const mctMinutes = positiveMinutes(inputs.officialMctMinutes);

  return {
    valid,
    windowMinutes,
    gateWindowMinutes,
    plannedMinutes,
    stressMinutes,
    plannedMarginMinutes,
    stressMarginMinutes,
    plannedStatus: statusFromMargin(plannedMarginMinutes),
    stressStatus: statusFromMargin(stressMarginMinutes),
    mctMinutes,
    mctGapMinutes: windowMinutes - mctMinutes,
    mctStatus: mctStatus(windowMinutes, mctMinutes),
  };
}
