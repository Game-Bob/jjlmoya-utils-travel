import { describe, expect, it } from 'vitest';
import {
  calculateFuelCost,
  kilometersToMiles,
  litersPer100KmToMpg,
  milesToKilometers,
  mpgToLitersPer100Km,
} from './logic';

describe('Fuel cost calculator logic', () => {
  it('calculates a round trip and splits the result', () => {
    const result = calculateFuelCost({
      distanceKm: 320,
      consumptionLPer100Km: 6.5,
      pricePerLiter: 1.72,
      passengers: 2,
      roundTrip: true,
      currency: 'EUR',
    });
    expect(result.totalDistanceKm).toBe(640);
    expect(result.fuelLiters).toBeCloseTo(41.6, 5);
    expect(result.totalCost).toBeCloseTo(71.552, 5);
    expect(result.costPerPerson).toBeCloseTo(35.776, 5);
  });

  it('calculates a one-way trip for one passenger', () => {
    const result = calculateFuelCost({
      distanceKm: 100,
      consumptionLPer100Km: 5,
      pricePerLiter: 2,
      passengers: 1,
      roundTrip: false,
      currency: 'EUR',
    });
    expect(result.totalDistanceKm).toBe(100);
    expect(result.fuelLiters).toBe(5);
    expect(result.totalCost).toBe(10);
    expect(result.costPerPerson).toBe(10);
  });

  it('converts between metric and imperial values', () => {
    expect(milesToKilometers(62.1371)).toBeCloseTo(100, 3);
    expect(kilometersToMiles(100)).toBeCloseTo(62.1371, 3);
    expect(mpgToLitersPer100Km(30)).toBeCloseTo(7.8405, 3);
    expect(litersPer100KmToMpg(7.8405)).toBeCloseTo(30, 3);
  });

  it('protects the result from invalid zero values', () => {
    const result = calculateFuelCost({
      distanceKm: -10,
      consumptionLPer100Km: -1,
      pricePerLiter: -2,
      passengers: 0,
      roundTrip: true,
      currency: 'EUR',
    });
    expect(result.totalCost).toBe(0);
    expect(result.costPerPerson).toBe(0);
  });
});
