import type { FuelResult, FuelUnitSystem } from './logic';
import { kilometersToMiles } from './logic';
import { evaluateCost } from './evaluator';
import type { FuelCostCalculatorUI } from './ui';

function getElement<T extends Element>(id: string): T | null {
  return document.getElementById(id) as T | null;
}

function formatNumber(value: number, digits = 1): string {
  return new Intl.NumberFormat('en', { maximumFractionDigits: digits }).format(value);
}

function formatMoney(value: number, symbol: string, code: string): string {
  const digits = code === 'JPY' ? 0 : 2;
  return `${symbol}${value.toFixed(digits)}`;
}

interface ResultView {
  distance: string;
  fuel: string;
  total: string;
  perPerson: string;
  route: string;
  status: string;
  level: string;
  progress: string;
}

type ResultState = { unitSystem: FuelUnitSystem; currency: string; roundTrip: boolean; passengers: number };

function buildResultView(result: FuelResult, state: ResultState, ui: FuelCostCalculatorUI): ResultView {
  const currency = ui.currencyOptions.find((option) => option.code === state.currency) ?? ui.currencyOptions[0];
  const metric = state.unitSystem === 'metric';
  const distance = metric ? result.totalDistanceKm : kilometersToMiles(result.totalDistanceKm);
  const fuel = metric ? result.fuelLiters : result.fuelGallons;
  const distanceUnit = metric ? ui.distanceMetricUnit : ui.distanceImperialUnit;
  const fuelUnit = metric ? ui.litersUnit : ui.gallonsUnit;
  const status = evaluateCost(result.costPerPerson, ui);
  const routeTemplate = state.roundTrip ? ui.routeStatement : ui.routeOneWayStatement;
  const route = routeTemplate
    .replace('{distance}', formatNumber(distance))
    .replace('{unit}', distanceUnit)
    .replace('{passengers}', String(Math.max(1, Math.round(state.passengers))));
  return {
    distance: `${formatNumber(distance)} ${distanceUnit}`,
    fuel: `${formatNumber(fuel)} ${fuelUnit}`,
    total: formatMoney(result.totalCost, currency.symbol, currency.code),
    perPerson: formatMoney(result.costPerPerson, currency.symbol, currency.code),
    route,
    status: status.label,
    level: status.level,
    progress: String(Math.max(0, 340 - Math.min(1, result.totalDistanceKm / 1600) * 340)),
  };
}

function setText(id: string, value: string): void {
  const element = getElement<HTMLElement>(id);
  if (element) element.textContent = value;
}

export function renderResult(
  result: FuelResult,
  state: ResultState,
  ui: FuelCostCalculatorUI,
): void {
  const view = buildResultView(result, state, ui);
  setText('fc-total-distance', view.distance);
  setText('fc-fuel-used', view.fuel);
  setText('fc-total-cost', view.total);
  setText('fc-cost-person', view.perPerson);
  setText('fc-route-statement', view.route);
  const statusEl = getElement<HTMLSpanElement>('fc-cost-status');
  if (statusEl) {
    statusEl.textContent = view.status;
    statusEl.dataset.level = view.level;
  }
  const road = getElement<SVGPathElement>('fc-road-progress');
  if (road) road.style.strokeDashoffset = view.progress;
}

export function syncUnitLabels(unitSystem: FuelUnitSystem, ui: FuelCostCalculatorUI): void {
  const distanceUnit = unitSystem === 'metric' ? ui.distanceMetricUnit : ui.distanceImperialUnit;
  const consumptionUnit = unitSystem === 'metric' ? ui.consumptionMetricUnit : ui.consumptionImperialUnit;
  const distanceHint = getElement<HTMLSpanElement>('fc-distance-unit');
  const consumptionHint = getElement<HTMLSpanElement>('fc-consumption-unit');
  const priceHint = getElement<HTMLSpanElement>('fc-price-unit');
  if (distanceHint) distanceHint.textContent = distanceUnit;
  if (consumptionHint) consumptionHint.textContent = consumptionUnit;
  if (priceHint) priceHint.textContent = unitSystem === 'metric' ? ui.priceMetricUnit : ui.priceImperialUnit;
}
