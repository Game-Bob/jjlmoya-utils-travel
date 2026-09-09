import type { ConnectionInputs, ConnectionResult } from './logic';
import { evaluateConnection } from './evaluator';
import type { AirportConnectionBufferUI } from './ui';

interface ViewElements {
  margin: HTMLElement; status: HTMLElement; statement: HTMLElement; window: HTMLElement; gateWindow: HTMLElement;
  planned: HTMLElement; stress: HTMLElement; stressMargin: HTMLElement; stressStatus: HTMLElement; stressStatement: HTMLElement;
  mct: HTMLElement; mctBadge: HTMLElement; mctStatement: HTMLElement; timeline: HTMLElement;
}

interface RenderConfig { ui: AirportConnectionBufferUI; locale: string; inputs: ConnectionInputs; }

function text(template: string, values: Record<string, string>): string {
  return Object.entries(values).reduce((result, [key, value]) => result.replaceAll(`{${key}}`, value), template);
}

function minutes(value: number, locale: string, unit: string): string {
  return `${new Intl.NumberFormat(locale, { maximumFractionDigits: 0 }).format(value)} ${unit}`;
}

function statusLabel(status: ConnectionResult['plannedStatus'], ui: AirportConnectionBufferUI): string {
  if (status === 'comfortable') return ui.statusComfortable;
  if (status === 'tight') return ui.statusTight;
  return ui.statusMissed;
}

function getElements(root: HTMLElement): ViewElements {
  const get = (selector: string) => root.querySelector<HTMLElement>(selector) as HTMLElement;
  return {
    margin: get('[data-result-margin]'), status: get('[data-result-status]'), statement: get('[data-result-statement]'), window: get('[data-result-window]'), gateWindow: get('[data-result-gate-window]'),
    planned: get('[data-result-planned]'), stress: get('[data-result-stress]'), stressMargin: get('[data-stress-margin]'), stressStatus: get('[data-stress-status]'), stressStatement: get('[data-stress-statement]'),
    mct: get('[data-mct-result]'), mctBadge: get('[data-mct-badge]'), mctStatement: get('[data-mct-statement]'), timeline: get('[data-connection-timeline]'),
  };
}

function applyStatus(element: HTMLElement, status: ConnectionResult['plannedStatus'], ui: AirportConnectionBufferUI): void {
  const evaluation = evaluateConnection(status); element.textContent = statusLabel(status, ui); element.dataset.tone = evaluation.tone;
}

function setStep(root: HTMLElement, name: string, value: string): void {
  const node = root.querySelector<HTMLElement>(`[data-step="${name}"]`); if (node) node.textContent = value;
}

function renderTimeline(root: HTMLElement, result: ConnectionResult, config: RenderConfig): void {
  const { inputs, locale, ui } = config;
  setStep(root, 'exit', minutes(inputs.deplaningMinutes, locale, ui.minuteUnit)); setStep(root, 'transfer', minutes(inputs.transferMinutes, locale, ui.minuteUnit));
  setStep(root, 'control', minutes(inputs.controlMinutes, locale, ui.minuteUnit)); setStep(root, 'gate', minutes(inputs.personalBufferMinutes, locale, ui.minuteUnit));
  const max = Math.max(result.gateWindowMinutes, result.stressMinutes, 1);
  root.querySelector<HTMLElement>('[data-connection-timeline]')?.style.setProperty('--acb-planned-position', `${Math.min(100, (result.plannedMinutes / max) * 100)}%`);
  root.querySelector<HTMLElement>('[data-connection-timeline]')?.style.setProperty('--acb-stress-position', `${Math.min(100, (result.stressMinutes / max) * 100)}%`);
}

function renderMct(elements: ViewElements, result: ConnectionResult, config: RenderConfig): void {
  const { locale, ui } = config;
  if (result.mctStatus === 'unknown') { elements.mct.textContent = ui.mctUnknown; elements.mctBadge.dataset.tone = 'caution'; elements.mctStatement.textContent = ui.mctUnknown; return; }
  const label = minutes(result.mctMinutes, locale, ui.minuteUnit); const pass = result.mctStatus === 'pass';
  elements.mct.textContent = `${pass ? 'PASS' : 'FAIL'} · ${label}`; elements.mctBadge.dataset.tone = pass ? 'positive' : 'negative'; elements.mctStatement.textContent = text(ui.mctStatement, { minutes: label });
}

function renderValues(elements: ViewElements, result: ConnectionResult, config: RenderConfig): void {
  const { locale, ui } = config; const planned = minutes(result.plannedMarginMinutes, locale, ui.minuteUnit); const stress = minutes(result.stressMarginMinutes, locale, ui.minuteUnit);
  const value = (number: number): string => result.valid ? minutes(number, locale, ui.minuteUnit) : '-';
  elements.margin.textContent = value(result.plannedMarginMinutes); elements.window.textContent = value(result.windowMinutes); elements.gateWindow.textContent = value(result.gateWindowMinutes); elements.planned.textContent = value(result.plannedMinutes); elements.stress.textContent = value(result.stressMinutes); elements.stressMargin.textContent = value(result.stressMarginMinutes);
  elements.statement.textContent = result.valid ? text(ui.marginStatement, { minutes: planned }) : ui.invalidStatement; elements.stressStatement.textContent = result.valid ? text(ui.stressStatement, { minutes: stress }) : ui.invalidStatement;
  applyStatus(elements.status, result.valid ? result.plannedStatus : 'missed', ui); applyStatus(elements.stressStatus, result.valid ? result.stressStatus : 'missed', ui);
}

export function renderConnectionResult(root: HTMLElement, result: ConnectionResult, config: RenderConfig): void {
  const elements = getElements(root); renderValues(elements, result, config); renderMct(elements, result, config);
  elements.timeline.dataset.state = result.valid ? result.stressStatus : 'missed'; renderTimeline(root, result, config);
}
