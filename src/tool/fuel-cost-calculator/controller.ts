import {
  calculateFuelCost,
  kilometersToMiles,
  litersPer100KmToMpg,
  milesToKilometers,
  mpgToLitersPer100Km,
  type FuelInputs,
  type FuelUnitSystem,
} from './logic';
import { loadFuelState, saveFuelState, type FuelStorageState } from './storage';
import { renderResult, syncUnitLabels } from './dom-views';
import type { FuelCostCalculatorUI } from './ui';

const DEFAULT_STATE: FuelStorageState = {
  distanceKm: 320,
  consumptionLPer100Km: 6.5,
  pricePerLiter: 1.72,
  passengers: 2,
  roundTrip: true,
  currency: 'EUR',
  unitSystem: 'metric',
};

function numberValue(id: string, fallback: number): number {
  const input = document.getElementById(id) as HTMLInputElement | null;
  const value = Number(input?.value);
  return Number.isFinite(value) ? value : fallback;
}

export class FuelCostController {
  private state: FuelStorageState;
  private readonly ui: FuelCostCalculatorUI;

  constructor(ui: FuelCostCalculatorUI) {
    this.ui = ui;
    this.state = loadFuelState(DEFAULT_STATE);
  }

  public init(): void {
    this.bindInputs();
    this.bindUnitToggle();
    this.bindCurrencyChips();
    this.bindPresets();
    this.bindActions();
    this.syncInputs();
    this.update();
  }

  private bindInputs(): void {
    document.getElementById('fc-distance')?.addEventListener('input', () => this.readDistance());
    document.getElementById('fc-consumption')?.addEventListener('input', () => this.readConsumption());
    document.getElementById('fc-price')?.addEventListener('input', () => {
      const price = numberValue('fc-price', this.displayedPrice());
      this.state.pricePerLiter = this.state.unitSystem === 'metric' ? price : price / 3.785411784;
      this.update();
    });
    document.getElementById('fc-passengers')?.addEventListener('input', () => {
      this.state.passengers = Math.max(1, Math.round(numberValue('fc-passengers', this.state.passengers)));
      this.update();
    });
    document.getElementById('fc-round-trip')?.addEventListener('change', (event) => {
      this.state.roundTrip = (event.target as HTMLInputElement).checked;
      this.update();
    });
  }

  private bindUnitToggle(): void {
    document.querySelectorAll<HTMLButtonElement>('[data-fc-unit]').forEach((button) => {
      button.addEventListener('click', () => {
        const next = button.dataset.fcUnit as FuelUnitSystem;
        if (next === this.state.unitSystem) return;
        this.state.unitSystem = next;
        this.syncInputs();
        this.updateUnitButtons();
        this.update();
      });
    });
    this.updateUnitButtons();
  }

  private bindCurrencyChips(): void {
    document.querySelectorAll<HTMLButtonElement>('[data-fc-currency]').forEach((button) => {
      button.addEventListener('click', () => {
        this.state.currency = button.dataset.fcCurrency ?? 'EUR';
        this.updateCurrencyButtons();
        this.update();
      });
    });
    this.updateCurrencyButtons();
  }

  private bindPresets(): void {
    document.querySelectorAll<HTMLButtonElement>('[data-fc-preset]').forEach((button) => {
      button.addEventListener('click', () => {
        this.state.distanceKm = Number(button.dataset.fcPreset ?? this.state.distanceKm);
        this.syncInputs();
        this.update();
      });
    });
  }

  private bindActions(): void {
    document.getElementById('fc-sample')?.addEventListener('click', () => {
      this.state = { ...DEFAULT_STATE, distanceKm: 680, consumptionLPer100Km: 7.2, pricePerLiter: 1.89, passengers: 3 };
      this.syncInputs();
      this.updateCurrencyButtons();
      this.update();
    });
    document.getElementById('fc-reset')?.addEventListener('click', () => {
      this.state = { ...DEFAULT_STATE };
      this.syncInputs();
      this.updateCurrencyButtons();
      this.update();
    });
  }

  private readDistance(): void {
    const value = numberValue('fc-distance', 0);
    this.state.distanceKm = this.state.unitSystem === 'metric' ? value : milesToKilometers(value);
    this.update();
  }

  private readConsumption(): void {
    const value = numberValue('fc-consumption', 0);
    this.state.consumptionLPer100Km = this.state.unitSystem === 'metric' ? value : mpgToLitersPer100Km(value);
    this.update();
  }

  private syncInputs(): void {
    const distance = this.state.unitSystem === 'metric' ? this.state.distanceKm : kilometersToMiles(this.state.distanceKm);
    const consumption = this.state.unitSystem === 'metric'
      ? this.state.consumptionLPer100Km
      : litersPer100KmToMpg(this.state.consumptionLPer100Km);
    this.setInputValue('fc-distance', distance, 0);
    this.setInputValue('fc-consumption', consumption, 1);
    this.setInputValue('fc-price', this.displayedPrice(), 2);
    this.setInputValue('fc-passengers', this.state.passengers, 0);
    const roundTrip = document.getElementById('fc-round-trip') as HTMLInputElement | null;
    if (roundTrip) roundTrip.checked = this.state.roundTrip;
    syncUnitLabels(this.state.unitSystem, this.ui);
  }

  private setInputValue(id: string, value: number, digits: number): void {
    const input = document.getElementById(id) as HTMLInputElement | null;
    if (input) input.value = value.toFixed(digits);
  }

  private displayedPrice(): number {
    return this.state.unitSystem === 'metric' ? this.state.pricePerLiter : this.state.pricePerLiter * 3.785411784;
  }

  private updateUnitButtons(): void {
    document.querySelectorAll<HTMLButtonElement>('[data-fc-unit]').forEach((button) => {
      const active = button.dataset.fcUnit === this.state.unitSystem;
      button.classList.toggle('is-active', active);
      button.setAttribute('aria-pressed', String(active));
    });
  }

  private updateCurrencyButtons(): void {
    document.querySelectorAll<HTMLButtonElement>('[data-fc-currency]').forEach((button) => {
      const active = button.dataset.fcCurrency === this.state.currency;
      button.classList.toggle('is-active', active);
      button.setAttribute('aria-pressed', String(active));
    });
  }

  private update(): void {
    const inputs: FuelInputs = { ...this.state };
    renderResult(calculateFuelCost(inputs), this.state, this.ui);
    saveFuelState(this.state);
  }
}
