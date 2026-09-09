import { getAirportProfile, getTransferEstimate } from './airport-data';
import { parseBcbp } from './bcbp';
import { calculateConnection, type ConnectionInputs, type BaggageMode, type RouteRule } from './logic';
import { renderConnectionResult } from './dom-views';
import { defaultConnectionInputs, loadConnectionInputs, saveConnectionInputs } from './storage';
import { scanImageFile, scanVideoFrame } from './scanner';
import type { AirportConnectionBufferUI } from './ui';

interface ControllerConfig { ui: AirportConnectionBufferUI; locale: string; }

const presets: Record<string, ConnectionInputs> = {
  short: { ...defaultConnectionInputs, departureTime: '12:00', transferMinutes: 15, controlMinutes: 10, baggageMinutes: 0, personalBufferMinutes: 10, delayMinutes: 15 },
  standard: { ...defaultConnectionInputs },
  long: { ...defaultConnectionInputs, departureTime: '15:00', transferMinutes: 30, controlMinutes: 45, baggageMinutes: 25, personalBufferMinutes: 30, delayMinutes: 45 },
};

function field(root: HTMLElement, name: string): HTMLInputElement | null {
  return root.querySelector<HTMLInputElement>(`[data-input="${name}"]`);
}

function numberField(root: HTMLElement, name: string, fallback: number): number {
  const value = field(root, name)?.valueAsNumber;
  return typeof value === 'number' && Number.isFinite(value) ? value : fallback;
}

function selected(root: HTMLElement, name: string, fallback: string): string {
  return root.querySelector<HTMLElement>(`[data-select="${name}"]`)?.dataset.value ?? fallback;
}

function textField(root: HTMLElement, name: string, fallback: string): string {
  return field(root, name)?.value ?? fallback;
}

function mode(root: HTMLElement, selector: string, fallback: string): string {
  return root.querySelector<HTMLButtonElement>(`${selector}[aria-pressed="true"]`)?.dataset.baggage
    ?? root.querySelector<HTMLButtonElement>(`${selector}[aria-pressed="true"]`)?.dataset.route
    ?? fallback;
}

function baggageMode(root: HTMLElement): BaggageMode {
  return mode(root, '[data-baggage]', 'checked') as BaggageMode;
}

function routeRule(root: HTMLElement): RouteRule {
  return mode(root, '[data-route]', 'custom') as RouteRule;
}

function normalizeBaggageControl(root: HTMLElement): BaggageMode {
  const selectedBaggage = baggageMode(root);
  const control = field(root, 'baggageMinutes');
  if (control) {
    control.readOnly = selectedBaggage !== 'self-transfer';
    if (selectedBaggage !== 'self-transfer') control.value = '0';
  }
  return selectedBaggage;
}

function readInputs(root: HTMLElement): ConnectionInputs {
  const selectedBaggage = normalizeBaggageControl(root);
  return {
    arrivalTime: textField(root, 'arrivalTime', defaultConnectionInputs.arrivalTime),
    departureTime: textField(root, 'departureTime', defaultConnectionInputs.departureTime),
    airportCode: selected(root, 'airportCode', defaultConnectionInputs.airportCode),
    arrivalTerminal: selected(root, 'arrivalTerminal', defaultConnectionInputs.arrivalTerminal),
    departureTerminal: selected(root, 'departureTerminal', defaultConnectionInputs.departureTerminal),
    flightNumber: textField(root, 'flightNumber', '').trim().toUpperCase(),
    connectionFlightNumber: textField(root, 'connectionFlightNumber', '').trim().toUpperCase(),
    deplaningMinutes: numberField(root, 'deplaningMinutes', defaultConnectionInputs.deplaningMinutes),
    transferMinutes: numberField(root, 'transferMinutes', defaultConnectionInputs.transferMinutes),
    controlMinutes: numberField(root, 'controlMinutes', defaultConnectionInputs.controlMinutes),
    baggageMinutes: selectedBaggage === 'self-transfer' ? numberField(root, 'baggageMinutes', 45) : 0,
    personalBufferMinutes: numberField(root, 'personalBufferMinutes', defaultConnectionInputs.personalBufferMinutes),
    gateCloseMinutes: numberField(root, 'gateCloseMinutes', defaultConnectionInputs.gateCloseMinutes),
    officialMctMinutes: numberField(root, 'officialMctMinutes', defaultConnectionInputs.officialMctMinutes),
    delayMinutes: numberField(root, 'delayMinutes', defaultConnectionInputs.delayMinutes),
    baggageMode: selectedBaggage,
    routeRule: routeRule(root),
  };
}

function setField(root: HTMLElement, name: string, value: string | number): void {
  const target = field(root, name);
  if (target) target.value = String(value);
}

function setSelect(root: HTMLElement, name: string, value: string): void {
  const wrapper = root.querySelector<HTMLElement>(`[data-select="${name}"]`);
  const option = wrapper?.querySelector<HTMLElement>(`[data-option-value="${value}"]`);
  if (!wrapper || !option) return;
  wrapper.dataset.value = value;
  const trigger = wrapper.querySelector<HTMLElement>('[data-select-trigger]');
  if (trigger) trigger.textContent = option.textContent;
  wrapper.querySelectorAll<HTMLElement>('[data-option-value]').forEach((item) => item.setAttribute('aria-selected', String(item === option)));
}

function setPressed(root: HTMLElement, selector: string, value: string): void {
  root.querySelectorAll<HTMLButtonElement>(selector).forEach((button) => button.setAttribute('aria-pressed', String(button.dataset.baggage === value || button.dataset.route === value || button.dataset.preset === value)));
}

function populateTerminals(root: HTMLElement, airport: string, arrival: string, departure: string): void {
  const profile = getAirportProfile(airport);
  ['arrivalTerminal', 'departureTerminal'].forEach((name) => {
    const wrapper = root.querySelector<HTMLElement>(`[data-select="${name}"]`);
    const options = wrapper?.querySelector<HTMLElement>('[data-select-options]');
    if (!wrapper || !options) return;
    options.replaceChildren(...(profile?.terminals ?? []).map((terminal) => {
      const option = document.createElement('button');
      option.type = 'button'; option.className = 'acb-select-option'; option.dataset.optionValue = terminal;
      option.setAttribute('role', 'option'); option.textContent = terminal;
      return option;
    }));
    setSelect(root, name, name === 'arrivalTerminal' ? arrival : departure);
  });
}

function updateLocalTransfer(root: HTMLElement): void {
  const values = readInputs(root);
  const transfer = getTransferEstimate(values.airportCode, values.arrivalTerminal, values.departureTerminal);
  if (transfer) setField(root, 'transferMinutes', transfer.minutes);
  const status = root.querySelector<HTMLElement>('[data-local-data-status]');
  const source = root.querySelector<HTMLAnchorElement>('[data-source-link]');
  const profile = getAirportProfile(values.airportCode);
  const statusText = transfer ? `${transfer.minutes} min · ${transfer.source}` : 'Manual verification required';
  if (status) status.textContent = statusText;
  if (source && profile) { source.textContent = profile.source; source.href = profile.sourceUrl; }
}

function refresh(root: HTMLElement, config: ControllerConfig): void {
  const values = readInputs(root);
  saveConnectionInputs(values);
  const delayOutput = root.querySelector<HTMLOutputElement>('[data-delay-output]');
  if (delayOutput) delayOutput.textContent = `${values.delayMinutes} ${config.ui.minuteUnit}`;
  renderConnectionResult(root, calculateConnection(values), { ui: config.ui, locale: config.locale, inputs: values });
}

function applyBaggageMode(root: HTMLElement, mode: BaggageMode): void {
  setPressed(root, '[data-baggage]', mode);
  const minutesByMode: Record<BaggageMode, number> = { hand: 0, checked: 15, 'self-transfer': 45 };
  const control = field(root, 'baggageMinutes');
  if (control) control.readOnly = mode !== 'self-transfer';
  if (mode !== 'self-transfer') minutesByMode[mode] = 0;
  setField(root, 'baggageMinutes', minutesByMode[mode]);
  if (mode === 'self-transfer') setField(root, 'transferMinutes', Math.max(numberField(root, 'transferMinutes', 0), 20));
}

function applyRouteRule(root: HTMLElement, rule: RouteRule): void {
  setPressed(root, '[data-route]', rule);
  if (rule === 'domestic') setField(root, 'controlMinutes', 0);
  if (rule === 'schengen') setField(root, 'controlMinutes', 15);
  if (rule === 'us-international') { setField(root, 'controlMinutes', 45); applyBaggageMode(root, 'self-transfer'); }
}

function applyScannedData(root: HTMLElement, rawValue: string, status: HTMLElement | null): void {
  const parsed = parseBcbp(rawValue);
  if (parsed.flightNumber) setField(root, 'flightNumber', parsed.flightNumber);
  if (parsed.destination && getAirportProfile(parsed.destination)) {
    setSelect(root, 'airportCode', parsed.destination);
    populateTerminals(root, parsed.destination, defaultConnectionInputs.arrivalTerminal, defaultConnectionInputs.departureTerminal);
  }
  if (status) status.textContent = parsed.flightNumber ? `Scanned ${parsed.flightNumber}. Check the filled fields.` : 'Barcode read, but the flight number was not recognised.';
}

function bindFileScanner(root: HTMLElement, ui: AirportConnectionBufferUI): void {
  const fileInput = root.querySelector<HTMLInputElement>('[data-scan-file]');
  const status = root.querySelector<HTMLElement>('[data-scanner-status]');
  fileInput?.addEventListener('change', async () => {
    const file = fileInput.files?.[0]; if (!file) return;
    if (status) status.textContent = ui.scannerStatus;
    try { const barcode = await scanImageFile(file); applyScannedData(root, barcode.rawValue, status); refresh(root, { ui, locale: root.dataset.locale ?? 'en' }); }
    catch (error) { if (status) status.textContent = error instanceof Error ? error.message : ui.scannerStatus; }
  });
}

function bindCameraScanner(root: HTMLElement, ui: AirportConnectionBufferUI): void {
  const video = root.querySelector<HTMLVideoElement>('[data-camera]');
  const status = root.querySelector<HTMLElement>('[data-scanner-status]');
  let stream: MediaStream | null = null; let timer = 0;
  const stop = () => { if (timer) window.clearInterval(timer); stream?.getTracks().forEach((track) => track.stop()); stream = null; if (video) { video.srcObject = null; video.hidden = true; } };
  root.querySelector<HTMLButtonElement>('[data-action="stop-camera"]')?.addEventListener('click', stop);
  root.querySelector<HTMLButtonElement>('[data-action="scan-camera"]')?.addEventListener('click', async () => {
    if (!navigator.mediaDevices?.getUserMedia || !video) { if (status) status.textContent = 'Camera scanning is not available in this browser.'; return; }
    try {
      stream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: { ideal: 'environment' } } });
      video.srcObject = stream; video.hidden = false; await video.play();
      if (status) status.textContent = ui.scannerStatus;
      timer = window.setInterval(async () => { const barcode = await scanVideoFrame(video); if (barcode) { stop(); applyScannedData(root, barcode.rawValue, status); refresh(root, { ui, locale: root.dataset.locale ?? 'en' }); } }, 700);
    } catch { if (status) status.textContent = 'Camera permission was not granted or the camera is unavailable.'; stop(); }
  });
}

function handleOptionClick(root: HTMLElement, config: ControllerConfig, target: HTMLElement): boolean {
  const option = target.closest<HTMLElement>('[data-option-value]');
  if (!option) return false;
  const wrapper = option.closest<HTMLElement>('[data-select]');
  if (!wrapper) return true;
  setSelect(root, wrapper.dataset.select ?? '', option.dataset.optionValue ?? '');
  wrapper.querySelector<HTMLElement>('[data-select-options]')?.toggleAttribute('hidden', true);
  updateLocalTransfer(root); refresh(root, config); return true;
}

function handleChoiceClick(root: HTMLElement, config: ControllerConfig, target: HTMLElement): boolean {
  const baggage = target.closest<HTMLButtonElement>('[data-baggage]');
  if (baggage) { applyBaggageMode(root, baggage.dataset.baggage as BaggageMode); refresh(root, config); return true; }
  const route = target.closest<HTMLButtonElement>('[data-route]');
  if (route) { applyRouteRule(root, route.dataset.route as RouteRule); refresh(root, config); return true; }
  const delay = target.closest<HTMLButtonElement>('[data-delay]');
  if (delay) { setField(root, 'delayMinutes', Number(delay.dataset.delay)); refresh(root, config); return true; }
  return false;
}

function applyValues(root: HTMLElement, values: ConnectionInputs): void {
  populateTerminals(root, values.airportCode, values.arrivalTerminal, values.departureTerminal);
  Object.entries(values).forEach(([name, value]) => { if (typeof value === 'string' || typeof value === 'number') setField(root, name, value); });
  setSelect(root, 'airportCode', values.airportCode); setSelect(root, 'arrivalTerminal', values.arrivalTerminal); setSelect(root, 'departureTerminal', values.departureTerminal);
  setPressed(root, '[data-baggage]', values.baggageMode); setPressed(root, '[data-route]', values.routeRule); updateLocalTransfer(root);
}

function handlePreset(root: HTMLElement, config: ControllerConfig, target: HTMLElement): boolean {
  const preset = target.closest<HTMLButtonElement>('[data-preset]');
  if (!preset) return false;
  const name = preset.dataset.preset ?? 'standard'; applyValues(root, presets[name] ?? presets.standard); setPressed(root, '[data-preset]', name); refresh(root, config); return true;
}

function handleAction(root: HTMLElement, config: ControllerConfig, target: HTMLElement): boolean {
  const action = target.closest<HTMLButtonElement>('[data-action]')?.dataset.action;
  if (action !== 'sample' && action !== 'reset') return false;
  applyValues(root, action === 'sample' ? presets.standard : defaultConnectionInputs);
  setPressed(root, '[data-preset]', action === 'sample' ? 'standard' : ''); refresh(root, config); return true;
}

function handleClick(root: HTMLElement, config: ControllerConfig, event: Event): void {
  const target = event.target as HTMLElement;
  if (handleOptionClick(root, config, target)) return;
  const trigger = target.closest<HTMLElement>('[data-select-trigger]');
  if (trigger) { const options = trigger.closest<HTMLElement>('[data-select]')?.querySelector<HTMLElement>('[data-select-options]'); options?.toggleAttribute('hidden'); trigger.setAttribute('aria-expanded', String(!options?.hidden)); return; }
  if (handleChoiceClick(root, config, target)) return;
  if (handlePreset(root, config, target)) return;
  handleAction(root, config, target);
}

export function mountAirportConnectionBuffer(root: HTMLElement, config: ControllerConfig): void {
  if (root.dataset.mounted === 'true') return;
  root.dataset.mounted = 'true';
  const stored = loadConnectionInputs();
  populateTerminals(root, stored.airportCode, stored.arrivalTerminal, stored.departureTerminal);
  setSelect(root, 'airportCode', stored.airportCode); setSelect(root, 'arrivalTerminal', stored.arrivalTerminal); setSelect(root, 'departureTerminal', stored.departureTerminal);
  Object.entries(stored).forEach(([name, value]) => { if (typeof value === 'string' || typeof value === 'number') setField(root, name, value); });
  setPressed(root, '[data-baggage]', stored.baggageMode); setPressed(root, '[data-route]', stored.routeRule); updateLocalTransfer(root);
  root.addEventListener('input', () => refresh(root, config));
  root.addEventListener('change', () => refresh(root, config));
  root.addEventListener('click', (event) => handleClick(root, config, event));
  bindFileScanner(root, config.ui); bindCameraScanner(root, config.ui); refresh(root, config);
}
