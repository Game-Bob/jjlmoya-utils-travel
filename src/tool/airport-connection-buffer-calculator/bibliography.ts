import type { BibliographyEntry } from '../../types';

export const bibliographyEntries: BibliographyEntry[] = [
  {
    name: 'Aena, Conexión de vuelos en el Aeropuerto Adolfo Suárez Madrid-Barajas',
    url: 'https://www.aena.es/es/adolfo-suarez-madrid-barajas/servicios-del-aeropuerto/conexion-de-vuelos.html',
  },
  {
    name: 'Heathrow, Connecting flights',
    url: 'https://www.heathrow.com/connecting-flights',
  },
  {
    name: 'IATA, Bar Coded Boarding Passes (BCBP)',
    url: 'https://www.iata.org/en/programs/passenger/common-use/',
  },
  {
    name: 'IATA, Station Standard Minimum Connecting Time (MCT)',
    url: 'https://www.iata.org/en/publications/manuals/station-standard-minimum-connecting-time-mct/',
  },
];

export const bibliographyTraceability = [
  { name: 'Aena', country: 'Spain', language: 'Spanish', claim: 'Connection time depends on route, airline, baggage, terminal movement, and required controls.' },
  { name: 'Heathrow Airport Limited', country: 'United Kingdom', language: 'English', claim: 'Separate tickets can require baggage reclaim, check-in, passport control, terminal transfer, and security.' },
  { name: 'IATA', country: 'International', language: 'English', claim: 'BCBP standards support PDF417 on printed boarding passes and mobile barcode formats.' },
  { name: 'IATA', country: 'International', language: 'English', claim: 'Official Station Standard MCT data is a sourced airport connection reference, not a generic guessed constant.' },
];

export const bibliography = bibliographyEntries;
