import type { SchengenCalculatorUI } from './ui';
import { formatDate, addDays, isDateInTrips, countDaysSpentInWindow, type TripInterval } from './logic';

export function renderTimeline(start: Date, end: Date, trips: TripInterval[], i18n: SchengenCalculatorUI): void {
  const ribbon = document.getElementById('sc-timeline-ribbon');
  if (!ribbon) return;
  ribbon.innerHTML = '';

  let cur = new Date(start.getTime());
  while (cur <= end) {
    const seg = document.createElement('div');
    seg.className = 'sc-seg';
    const isSpent = isDateInTrips(cur, trips);
    if (isSpent) {
      seg.classList.add('spent');
      const curStart = addDays(cur, -179);
      if (countDaysSpentInWindow(curStart, cur, trips) > 90) {
        seg.classList.add('overstay');
      }
    }
    seg.title = `${formatDate(cur)}: ${isSpent ? i18n.legendInSchengen : i18n.legendOutside}`;
    ribbon.appendChild(seg);
    cur = addDays(cur, 1);
  }
}

export function updateGaugeDisplay(used: number, remaining: number, isOverstay: boolean, captionText: string): void {
  const dRem = document.getElementById('sc-days-remaining');
  const dUsed = document.getElementById('sc-days-used');
  const gauge = document.getElementById('sc-gauge-circle');
  const caption = document.getElementById('sc-gauge-caption');

  if (dRem) {
    dRem.textContent = String(remaining);
    dRem.className = isOverstay ? 'sc-gauge-num is-overstay' : 'sc-gauge-num';
  }
  if (caption) caption.textContent = captionText;
  if (dUsed) {
    dUsed.textContent = `${used} / 90`;
    dUsed.className = isOverstay ? 'sc-metric-val is-overstay' : 'sc-metric-val';
  }
  if (gauge) {
    const offset = isOverstay ? 0 : 314.159 - Math.min(1, used / 90) * 314.159;
    gauge.style.strokeDashoffset = String(offset);
    gauge.setAttribute('class', getGaugeBarClass(used, isOverstay));
  }
}

function getGaugeBarClass(used: number, isOverstay: boolean): string {
  if (isOverstay) return 'sc-gauge-bar is-overstay';
  if (used >= 75) return 'sc-gauge-bar is-warning';
  return 'sc-gauge-bar';
}

export function renderOverstayBanner(overstayDate: string, overstayDays: number, i18n: SchengenCalculatorUI): void {
  const badge = document.getElementById('sc-status-badge');
  const badgeText = document.getElementById('sc-status-text');
  const banner = document.getElementById('sc-explanation-banner');
  if (!badge || !badgeText || !banner) return;

  const overstayLabel = `${i18n.verdictOverstayTitle} (+${overstayDays} ${i18n.unitDays})`;
  badge.className = 'sc-status-pill overstay';
  badgeText.textContent = overstayLabel;
  banner.className = 'sc-explanation-banner is-overstay';
  banner.innerHTML = i18n.bannerOverstay
    .replace('{date}', `<strong>${overstayDate}</strong>`)
    .replace('{days}', `<strong>${overstayDays} ${i18n.unitDays}</strong>`);
}

export function renderNormalBanner(refDateStr: string, used: number, i18n: SchengenCalculatorUI): void {
  const badge = document.getElementById('sc-status-badge');
  const badgeText = document.getElementById('sc-status-text');
  const banner = document.getElementById('sc-explanation-banner');
  if (!badge || !badgeText || !banner) return;

  const rem = Math.max(0, 90 - used);
  const isWarn = used >= 75;
  badge.className = isWarn ? 'sc-status-pill warning' : 'sc-status-pill legal';
  badgeText.textContent = isWarn ? i18n.verdictWarningTitle : i18n.verdictSafeTitle;
  banner.className = 'sc-explanation-banner';

  const tpl = isWarn ? i18n.bannerWarning : i18n.bannerSafe;
  banner.innerHTML = tpl
    .replace('{date}', `<strong>${refDateStr}</strong>`)
    .replace('{used}', `<strong>${used} ${i18n.unitDays}</strong>`)
    .replace('{rem}', `<strong>${rem} ${i18n.unitDays}</strong>`);
}

function buildDateInputHtml(id: string, val: string, field: string, label: string): string {
  return `
    <div>
      <div class="sc-date-wrap">
        <input type="date" id="${id}" class="sc-input-control" value="${val}" data-field="${field}" aria-label="${label}" />
        <span class="sc-date-icon-btn" aria-hidden="true">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V10h14v10zm0-12H5V6h14v2zM9 14H7v-2h2v2zm4 0h-2v-2h2v2zm4 0h-2v-2h2v2zm-8 4H7v-2h2v2zm4 4h-2v-2h2v2zm4 0h-2v-2h2v2z"/>
          </svg>
        </span>
      </div>
    </div>
  `;
}

export function buildTripRowHtml(trip: TripInterval, duration: number, isOverstay: boolean, i18n: SchengenCalculatorUI): string {
  const badgeClass = isOverstay ? 'sc-trip-badge is-overstay' : 'sc-trip-badge';
  const durLabel = duration > 0 ? `${duration}d` : '--';
  const startHtml = buildDateInputHtml(`sc-start-${trip.id}`, trip.startDate, 'startDate', i18n.colArrival);
  const endHtml = buildDateInputHtml(`sc-end-${trip.id}`, trip.endDate, 'endDate', i18n.colDeparture);
  return `
    ${startHtml}
    ${endHtml}
    <div class="sc-trip-notes-col">
      <input type="text" id="sc-notes-${trip.id}" class="sc-input-control" value="${trip.notes || ''}" placeholder="${i18n.notesPlaceholder}" data-field="notes" aria-label="${i18n.colDestination}" />
    </div>
    <div class="${badgeClass}">${durLabel}</div>
    <button type="button" class="sc-btn-del" data-action="remove" aria-label="Remove trip">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"/>
      </svg>
    </button>
  `;
}
