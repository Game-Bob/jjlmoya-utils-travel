import { airportProfiles } from './airport-data';

export interface BcbpData {
  rawValue: string;
  origin?: string;
  destination?: string;
  airlineCode?: string;
  flightNumber?: string;
  flightDate?: string;
}

function findAirports(rawValue: string): { origin?: string; destination?: string } {
  const found = airportProfiles
    .map((profile) => ({ code: profile.iata, index: rawValue.indexOf(profile.iata) }))
    .filter((item) => item.index >= 0)
    .sort((left, right) => left.index - right.index)
    .map((item) => item.code);
  return { origin: found[0], destination: found[1] };
}

export function parseBcbp(rawValue: string): BcbpData {
  const normalized = rawValue.replace(/[\r\n]/g, '').trim().toUpperCase();
  const airports = findAirports(normalized);
  const flight = normalized.match(/([A-Z0-9]{2,3})(\d{1,4})/);
  const date = normalized.match(/\b(\d{3})\b/);
  return {
    rawValue: normalized,
    ...airports,
    airlineCode: flight?.[1],
    flightNumber: flight ? `${flight[1]}${flight[2]}` : undefined,
    flightDate: date?.[1],
  };
}
