import type { SchengenCalculatorUI } from './ui';
import {
  parseDate,
  formatDate,
  addDays,
  getDaysBetween,
  calculateMaxContinuousStay,
  findEarliestResetDate,
  type TripInterval,
} from './logic';
import {
  loadSavedTrips,
  saveTripsToStorage,
  loadSavedReferenceDate,
  saveReferenceDateToStorage,
} from './storage';
import { scanOverstayDetails, hasTripOverstay } from './evaluator';
import {
  renderTimeline,
  updateGaugeDisplay,
  renderOverstayBanner,
  renderNormalBanner,
  buildTripRowHtml,
} from './dom-views';

export class SchengenCalculatorController {
  private trips: TripInterval[] = [];
  private referenceDateStr: string;
  private readonly todayStr: string;
  private readonly i18n: SchengenCalculatorUI;

  constructor(i18n: SchengenCalculatorUI) {
    this.i18n = i18n;
    this.todayStr = formatDate(new Date());
    this.referenceDateStr = this.todayStr;
  }

  public init(): void {
    this.trips = loadSavedTrips();
    this.referenceDateStr = loadSavedReferenceDate(this.todayStr);

    const refInput = document.getElementById('sc-ref-date-input') as HTMLInputElement;
    if (refInput) {
      refInput.value = this.referenceDateStr;
      const onChange = (e: Event) => {
        this.referenceDateStr = (e.target as HTMLInputElement).value || this.todayStr;
        this.recalculate();
      };
      refInput.addEventListener('change', onChange);
      refInput.addEventListener('input', onChange);
    }

    this.setupPresets(refInput);
    this.setupGlobalActions();
    this.renderTrips();
  }

  private recalculate(): void {
    const refDate = parseDate(this.referenceDateStr);
    const windowStart = addDays(refDate, -179);
    const scan = scanOverstayDetails(this.trips, refDate);

    this.updateStatusViews(scan, refDate);

    const resetEl = document.getElementById('sc-reset-date');
    if (resetEl) resetEl.textContent = findEarliestResetDate(refDate, this.trips);

    renderTimeline(windowStart, refDate, this.trips, this.i18n);
    saveTripsToStorage(this.trips);
    saveReferenceDateToStorage(this.referenceDateStr);
  }

  private updateStatusViews(
    scan: ReturnType<typeof scanOverstayDetails>,
    refDate: Date
  ): void {
    const maxCont = document.getElementById('sc-max-continuous');
    if (scan.firstOverstayDate) {
      const cap = `${this.i18n.verdictOverstayTitle} (+${scan.maxOverstayDays} ${this.i18n.unitDays})`;
      updateGaugeDisplay(scan.peakDaysUsed, 0, true, cap);
      renderOverstayBanner(scan.firstOverstayDate, scan.maxOverstayDays, this.i18n);
      if (maxCont) {
        maxCont.textContent = `0 ${this.i18n.unitDays}`;
        maxCont.className = 'sc-metric-val is-overstay';
      }
    } else {
      const remaining = Math.max(0, 90 - scan.daysUsedAtRef);
      updateGaugeDisplay(scan.daysUsedAtRef, remaining, false, this.i18n.daysRemainingSub);
      renderNormalBanner(this.referenceDateStr, scan.daysUsedAtRef, this.i18n);
      if (maxCont) {
        const cont = calculateMaxContinuousStay(refDate, this.referenceDateStr, this.trips);
        maxCont.textContent = `${cont} ${this.i18n.unitDays}`;
        maxCont.className = 'sc-metric-val';
      }
    }
  }

  private renderTrips(): void {
    const container = document.getElementById('sc-trips-container');
    const emptyMsg = document.getElementById('sc-empty-msg');
    if (!container || !emptyMsg) return;

    container.innerHTML = '';
    if (this.trips.length === 0) {
      emptyMsg.style.display = 'block';
      this.recalculate();
      return;
    }

    emptyMsg.style.display = 'none';
    this.trips.forEach((trip) => {
      container.appendChild(this.createTripRow(trip));
    });
    this.recalculate();
  }

  private createTripRow(trip: TripInterval): HTMLElement {
    const row = document.createElement('div');
    row.className = 'sc-trip-item';
    const s = trip.startDate ? parseDate(trip.startDate) : null;
    const e = trip.endDate ? parseDate(trip.endDate) : null;
    const duration = s && e && s <= e ? getDaysBetween(s, e) : 0;
    const isOverstay = hasTripOverstay(trip, this.trips);

    if (isOverstay) row.classList.add('is-overstay');

    row.innerHTML = buildTripRowHtml(trip, duration, isOverstay, this.i18n);
    this.bindRowEvents(row, trip);
    return row;
  }

  private bindRowEvents(row: HTMLElement, trip: TripInterval): void {
    const updateHandler = (ev: Event) => {
      const target = ev.target as HTMLInputElement;
      const field = target.dataset.field as keyof TripInterval;
      if (field) {
        trip[field] = target.value;
        saveTripsToStorage(this.trips);
        this.recalculate();
        this.updateBadge(row, trip);
      }
    };

    row.querySelectorAll('input').forEach((input) => {
      input.addEventListener('change', updateHandler);
      input.addEventListener('input', updateHandler);
    });

    const removeBtn = row.querySelector('[data-action="remove"]');
    if (removeBtn) {
      removeBtn.addEventListener('click', () => {
        this.trips = this.trips.filter((t) => t.id !== trip.id);
        saveTripsToStorage(this.trips);
        this.renderTrips();
      });
    }
  }

  private updateBadge(row: HTMLElement, trip: TripInterval): void {
    const s = trip.startDate ? parseDate(trip.startDate) : null;
    const e = trip.endDate ? parseDate(trip.endDate) : null;
    const dur = s && e && s <= e ? getDaysBetween(s, e) : 0;
    const badge = row.querySelector('.sc-trip-badge');
    if (badge) badge.textContent = dur > 0 ? `${dur}d` : '--';
  }

  private setupPresets(refInput: HTMLInputElement | null): void {
    const presets = [
      { id: 'sc-preset-today', days: 0 },
      { id: 'sc-preset-plus7', days: 7 },
      { id: 'sc-preset-plus14', days: 14 },
      { id: 'sc-preset-plus30', days: 30 },
    ];
    presets.forEach(({ id, days }) => {
      const btn = document.getElementById(id);
      if (!btn) return;
      btn.addEventListener('click', () => {
        this.referenceDateStr = formatDate(addDays(parseDate(this.todayStr), days));
        if (refInput) refInput.value = this.referenceDateStr;
        this.recalculate();
      });
    });
  }

  private setupGlobalActions(): void {
    const addBtn = document.getElementById('sc-add-trip-btn');
    if (addBtn) {
      addBtn.addEventListener('click', () => {
        const ref = parseDate(this.referenceDateStr);
        this.trips.push({
          id: 'trip_' + Date.now(),
          startDate: formatDate(addDays(ref, -30)),
          endDate: formatDate(addDays(ref, -16)),
          notes: this.i18n.sampleNotesDefault,
        });
        this.renderTrips();
      });
    }
    this.setupSampleAndClearButtons();
  }

  private setupSampleAndClearButtons(): void {
    const sampleBtn = document.getElementById('sc-sample-btn');
    if (sampleBtn) {
      sampleBtn.addEventListener('click', () => {
        const ref = parseDate(this.referenceDateStr);
        this.trips = [
          {
            id: 'sample_1',
            startDate: formatDate(addDays(ref, -110)),
            endDate: formatDate(addDays(ref, -91)),
            notes: this.i18n.sampleNotes1,
          },
          {
            id: 'sample_2',
            startDate: formatDate(addDays(ref, -50)),
            endDate: formatDate(addDays(ref, -31)),
            notes: this.i18n.sampleNotes2,
          },
        ];
        this.renderTrips();
      });
    }
    const clearBtn = document.getElementById('sc-clear-btn');
    if (clearBtn) {
      clearBtn.addEventListener('click', () => {
        this.trips = [];
        this.renderTrips();
      });
    }
  }
}
