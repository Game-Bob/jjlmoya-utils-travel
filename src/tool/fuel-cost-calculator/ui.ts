export interface CurrencyOption {
  code: string;
  symbol: string;
}

export interface FuelCostCalculatorUI {
  [key: string]: unknown;
  metricLabel: string;
  imperialLabel: string;
  routeHeading: string;
  distanceLabel: string;
  distanceHint: string;
  consumptionLabel: string;
  consumptionHint: string;
  priceLabel: string;
  priceHint: string;
  passengersLabel: string;
  roundTripLabel: string;
  currencyLabel: string;
  presetsLabel: string;
  presetCommute: string;
  presetWeekend: string;
  presetRoadTrip: string;
  resultHeading: string;
  totalDistanceLabel: string;
  fuelUsedLabel: string;
  totalCostLabel: string;
  perPersonLabel: string;
  routeStatement: string;
  routeOneWayStatement: string;
  statusLight: string;
  statusMedium: string;
  statusHigh: string;
  sampleButton: string;
  resetButton: string;
  litersUnit: string;
  gallonsUnit: string;
  distanceMetricUnit: string;
  distanceImperialUnit: string;
  consumptionMetricUnit: string;
  consumptionImperialUnit: string;
  priceMetricUnit: string;
  priceImperialUnit: string;
  currencyOptions: CurrencyOption[];
}
