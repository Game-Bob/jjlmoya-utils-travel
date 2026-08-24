export type FuelUnitSystem = 'metric' | 'imperial';

export interface FuelInputs {
  distanceKm: number;
  consumptionLPer100Km: number;
  pricePerLiter: number;
  passengers: number;
  roundTrip: boolean;
  currency: string;
}

export interface FuelResult {
  totalDistanceKm: number;
  fuelLiters: number;
  fuelGallons: number;
  totalCost: number;
  costPerPerson: number;
}

const MILES_PER_KILOMETER = 0.6213711922;
const LITERS_PER_GALLON = 3.785411784;
const MPG_CONVERSION = 235.214583;

export function milesToKilometers(miles: number): number {
  return miles / MILES_PER_KILOMETER;
}

export function kilometersToMiles(kilometers: number): number {
  return kilometers * MILES_PER_KILOMETER;
}

export function mpgToLitersPer100Km(mpg: number): number {
  return mpg > 0 ? MPG_CONVERSION / mpg : 0;
}

export function litersPer100KmToMpg(litersPer100Km: number): number {
  return litersPer100Km > 0 ? MPG_CONVERSION / litersPer100Km : 0;
}

export function calculateFuelCost(inputs: FuelInputs): FuelResult {
  const tripMultiplier = inputs.roundTrip ? 2 : 1;
  const totalDistanceKm = Math.max(0, inputs.distanceKm) * tripMultiplier;
  const fuelLiters = (totalDistanceKm * Math.max(0, inputs.consumptionLPer100Km)) / 100;
  const fuelGallons = fuelLiters / LITERS_PER_GALLON;
  const totalCost = fuelLiters * Math.max(0, inputs.pricePerLiter);
  const passengerCount = Math.max(1, Math.round(inputs.passengers));
  return {
    totalDistanceKm,
    fuelLiters,
    fuelGallons,
    totalCost,
    costPerPerson: totalCost / passengerCount,
  };
}
