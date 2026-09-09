import type { ConnectionInputs } from './logic';

const STORAGE_KEY = 'jjlmoya-travel-airport-connection-buffer';

export const defaultConnectionInputs: ConnectionInputs = {
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
  baggageMinutes: 0,
  personalBufferMinutes: 20,
  gateCloseMinutes: 20,
  officialMctMinutes: 90,
  delayMinutes: 30,
  baggageMode: 'checked',
  routeRule: 'custom',
};

function asMinutes(value: unknown, fallback: number): number {
  return typeof value === 'number' && Number.isFinite(value) && value >= 0 ? value : fallback;
}

function asClock(value: unknown, fallback: string): string {
  return typeof value === 'string' && /^\d{2}:\d{2}$/.test(value) ? value : fallback;
}

function asBaggageMode(value: unknown): ConnectionInputs['baggageMode'] {
  return value === 'hand' || value === 'self-transfer' ? value : 'checked';
}

function asRouteRule(value: unknown): ConnectionInputs['routeRule'] {
  return value === 'domestic' || value === 'schengen' || value === 'us-international' ? value : 'custom';
}

function asBaggageMinutes(value: unknown, mode: ConnectionInputs['baggageMode']): number {
  if (mode === 'hand' || mode === 'checked') return 0;
  return asMinutes(value, 45);
}

function sanitize(value: unknown): ConnectionInputs {
  if (!value || typeof value !== 'object') return { ...defaultConnectionInputs };
  const input = value as Partial<ConnectionInputs>;
  const baggageMode = asBaggageMode(input.baggageMode);
  return {
    arrivalTime: asClock(input.arrivalTime, defaultConnectionInputs.arrivalTime),
    departureTime: asClock(input.departureTime, defaultConnectionInputs.departureTime),
    airportCode: typeof input.airportCode === 'string' ? input.airportCode : defaultConnectionInputs.airportCode,
    arrivalTerminal: typeof input.arrivalTerminal === 'string' ? input.arrivalTerminal : defaultConnectionInputs.arrivalTerminal,
    departureTerminal: typeof input.departureTerminal === 'string' ? input.departureTerminal : defaultConnectionInputs.departureTerminal,
    flightNumber: typeof input.flightNumber === 'string' ? input.flightNumber : defaultConnectionInputs.flightNumber,
    connectionFlightNumber: typeof input.connectionFlightNumber === 'string' ? input.connectionFlightNumber : defaultConnectionInputs.connectionFlightNumber,
    deplaningMinutes: asMinutes(input.deplaningMinutes, defaultConnectionInputs.deplaningMinutes),
    transferMinutes: asMinutes(input.transferMinutes, defaultConnectionInputs.transferMinutes),
    controlMinutes: asMinutes(input.controlMinutes, defaultConnectionInputs.controlMinutes),
    baggageMinutes: asBaggageMinutes(input.baggageMinutes, baggageMode),
    personalBufferMinutes: asMinutes(input.personalBufferMinutes, defaultConnectionInputs.personalBufferMinutes),
    gateCloseMinutes: asMinutes(input.gateCloseMinutes, defaultConnectionInputs.gateCloseMinutes),
    officialMctMinutes: asMinutes(input.officialMctMinutes, defaultConnectionInputs.officialMctMinutes),
    delayMinutes: asMinutes(input.delayMinutes, defaultConnectionInputs.delayMinutes),
    baggageMode,
    routeRule: asRouteRule(input.routeRule),
  };
}

export function loadConnectionInputs(): ConnectionInputs {
  if (typeof window === 'undefined') return { ...defaultConnectionInputs };

  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    return raw ? sanitize(JSON.parse(raw)) : { ...defaultConnectionInputs };
  } catch {
    return { ...defaultConnectionInputs };
  }
}

export function saveConnectionInputs(inputs: ConnectionInputs): void {
  if (typeof window === 'undefined') return;

  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(inputs));
  } catch {}
}
