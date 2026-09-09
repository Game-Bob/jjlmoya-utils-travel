export interface TerminalTransfer {
  minutes: number;
  source: string;
  sourceUrl: string;
  confidence: 'official' | 'estimate';
}

export interface AirportProfile {
  iata: string;
  name: string;
  terminals: string[];
  transfers: Record<string, TerminalTransfer>;
  source: string;
  sourceUrl: string;
}

const profiles: AirportProfile[] = [
  {
    iata: 'MAD',
    name: 'Adolfo Suárez Madrid-Barajas',
    terminals: ['T1', 'T2', 'T3', 'T4', 'T4S'],
    transfers: {
      'T1>T2': { minutes: 15, source: 'Aena free terminal shuttle', sourceUrl: 'https://www.aena.es/es/adolfo-suarez-madrid-barajas/servicios-del-aeropuerto/conexion-de-vuelos.html', confidence: 'official' },
      'T2>T1': { minutes: 15, source: 'Aena free terminal shuttle', sourceUrl: 'https://www.aena.es/es/adolfo-suarez-madrid-barajas/servicios-del-aeropuerto/conexion-de-vuelos.html', confidence: 'official' },
      'T1>T3': { minutes: 15, source: 'Aena free terminal shuttle', sourceUrl: 'https://www.aena.es/es/adolfo-suarez-madrid-barajas/servicios-del-aeropuerto/conexion-de-vuelos.html', confidence: 'official' },
      'T3>T1': { minutes: 15, source: 'Aena free terminal shuttle', sourceUrl: 'https://www.aena.es/es/adolfo-suarez-madrid-barajas/servicios-del-aeropuerto/conexion-de-vuelos.html', confidence: 'official' },
      'T4>T4S': { minutes: 3, source: 'Aena automatic people mover', sourceUrl: 'https://www.aena.es/es/adolfo-suarez-madrid-barajas/servicios-del-aeropuerto/categorias-y-terminales/conexion-de-vuelos.html', confidence: 'official' },
      'T4S>T4': { minutes: 3, source: 'Aena automatic people mover', sourceUrl: 'https://www.aena.es/es/adolfo-suarez-madrid-barajas/servicios-del-aeropuerto/categorias-y-terminales/conexion-de-vuelos.html', confidence: 'official' },
    },
    source: 'Aena flight connections',
    sourceUrl: 'https://www.aena.es/es/adolfo-suarez-madrid-barajas/servicios-del-aeropuerto/conexion-de-vuelos.html',
  },
  {
    iata: 'LHR',
    name: 'London Heathrow',
    terminals: ['T2', 'T3', 'T4', 'T5'],
    transfers: {},
    source: 'Heathrow connecting flights',
    sourceUrl: 'https://www.heathrow.com/connecting-flights',
  },
  {
    iata: 'JFK',
    name: 'John F. Kennedy International',
    terminals: ['T1', 'T4', 'T5', 'T7', 'T8'],
    transfers: {},
    source: 'Manual verification required',
    sourceUrl: 'https://www.jfkairport.com/',
  },
  {
    iata: 'AMS',
    name: 'Amsterdam Schiphol',
    terminals: ['Schengen', 'Non-Schengen'],
    transfers: {},
    source: 'Manual verification required',
    sourceUrl: 'https://www.schiphol.nl/en/transfer/',
  },
  {
    iata: 'CDG',
    name: 'Paris Charles de Gaulle',
    terminals: ['1', '2A', '2B', '2C', '2D', '2E', '2F', '2G', '3'],
    transfers: {},
    source: 'Manual verification required',
    sourceUrl: 'https://www.parisaeroport.fr/en/passengers/flights/connecting-flights',
  },
];

export const airportProfiles = profiles;

export function getAirportProfile(iata: string): AirportProfile | undefined {
  return profiles.find((profile) => profile.iata === iata);
}

export function getTransferEstimate(airport: string, arrivalTerminal: string, departureTerminal: string): TerminalTransfer | undefined {
  if (!arrivalTerminal || !departureTerminal || arrivalTerminal === departureTerminal) return undefined;
  return getAirportProfile(airport)?.transfers[`${arrivalTerminal}>${departureTerminal}`];
}
