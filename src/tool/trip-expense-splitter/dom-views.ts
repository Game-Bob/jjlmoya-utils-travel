import type { TripExpenseSplitterUI } from './ui';
import type { SplitResult, TripState } from './logic';
import { evaluateSettlement } from './evaluator';

const escapeHtml = (value: string) => value.replace(/[&<>'"]/g, (character) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' }[character] ?? character));
const money = (value: number, currency: string) => `${currency} ${value.toFixed(2)}`;
const nameFor = (id: string, state: TripState) => state.travelers.find((traveler) => traveler.id === id)?.name || 'Unknown traveler';

export const renderTravelers = (root: HTMLElement, state: TripState, ui: TripExpenseSplitterUI) => {
  root.innerHTML = state.travelers.map((traveler, index) => `<div class="traveler-row"><span class="traveler-index">${String(index + 1).padStart(2, '0')}</span><input data-member-name="${traveler.id}" value="${escapeHtml(traveler.name)}" aria-label="${escapeHtml(ui.travelerPlaceholder)} ${index + 1}"><button class="icon-button" data-remove-member="${traveler.id}" aria-label="${escapeHtml(ui.removeTraveler)}" ${state.travelers.length <= 2 ? 'disabled' : ''}>×</button></div>`).join('');
};

export const renderPayer = (root: HTMLElement, state: TripState, selectedId: string) => {
  const selected = nameFor(selectedId, state);
  root.innerHTML = `<button type="button" class="payer-trigger" data-payer-trigger aria-expanded="false"><span>${escapeHtml(selected)}</span><span class="chevron">⌄</span></button><div class="payer-menu" data-payer-menu hidden>${state.travelers.map((traveler) => `<button type="button" data-payer-option="${traveler.id}" class="payer-option ${traveler.id === selectedId ? 'is-active' : ''}">${escapeHtml(traveler.name)}</button>`).join('')}</div>`;
};

export const renderParticipantChips = (root: HTMLElement, state: TripState, selectedIds: string[], ui: TripExpenseSplitterUI) => {
  root.innerHTML = `<span class="field-caption">${escapeHtml(ui.participantsLabel)}</span><div class="participant-chips">${state.travelers.map((traveler) => `<button type="button" class="participant-chip ${selectedIds.includes(traveler.id) ? 'is-selected' : ''}" data-participant="${traveler.id}" aria-pressed="${selectedIds.includes(traveler.id)}">${escapeHtml(traveler.name)}</button>`).join('')}</div>`;
};

export const renderExpenses = (root: HTMLElement, state: TripState, ui: TripExpenseSplitterUI) => {
  root.innerHTML = state.expenses.length === 0 ? `<p class="empty-copy">${escapeHtml(ui.emptyExpenses)}</p>` : state.expenses.map((expense) => `<article class="expense-card"><div class="expense-mark">${escapeHtml(expense.description.slice(0, 1).toUpperCase() || '•')}</div><div class="expense-copy"><strong>${escapeHtml(expense.description || ui.expenseDescriptionPlaceholder)}</strong><span>${escapeHtml(ui.payerLabel)} ${escapeHtml(nameFor(expense.payerId, state))} · ${expense.participantIds.length} ${escapeHtml(ui.allTravelers.toLowerCase())}</span></div><strong class="expense-amount">${money(expense.amount, state.currency)}</strong><button class="icon-button" data-remove-expense="${expense.id}" aria-label="${escapeHtml(ui.removeExpense)}">×</button></article>`).join('');
};

const getStatusText = (status: string, ui: TripExpenseSplitterUI) => {
  if (status === 'balanced') return ui.statusBalanced;
  if (status === 'settle') return ui.statusSettle;
  return ui.statusReady;
};

const buildBalanceRowsMarkup = (balances: SplitResult['balances'], state: TripState) => {
  return balances.map((b) => {
    const sign = b.balance >= 0 ? '+' : '';
    const cls = b.balance >= 0 ? 'positive' : 'negative';
    return `<div class="balance-row"><span>${escapeHtml(nameFor(b.travelerId, state))}</span><strong class="${cls}">${sign}${money(b.balance, state.currency)}</strong></div>`;
  }).join('');
};

const buildTransfersMarkup = (transfers: SplitResult['transfers'], state: TripState, ui: TripExpenseSplitterUI) => {
  if (transfers.length === 0) {
    return `<div class="clear-state"><span class="clear-icon">OK</span><p>${escapeHtml(ui.noTransfers)}</p></div>`;
  }
  return transfers.map((t) => `<div class="transfer-row"><span>${escapeHtml(nameFor(t.fromId, state))}</span><span class="transfer-arrow">→</span><span>${escapeHtml(nameFor(t.toId, state))}</span><strong>${money(t.amount, state.currency)}</strong></div>`).join('');
};

const getTravelerName = (travelers: TripState['travelers'], index: number) => {
  const item = travelers[index];
  return item ? escapeHtml(item.name) : '';
};

const getNodeNames = (travelers: TripState['travelers']) => {
  const t0 = getTravelerName(travelers, 0);
  const t1 = getTravelerName(travelers, 1);
  const t2 = travelers[2] ? escapeHtml(travelers[2].name) : t0;
  return [t0, t1, t2];
};

const buildRouteMapMarkup = (travelers: TripState['travelers'], hint: string) => {
  const [t0, t1, t2] = getNodeNames(travelers);
  return `<div class="route-map" aria-label="${escapeHtml(hint)}"><svg viewBox="0 0 600 170" role="img" aria-hidden="true"><path d="M45 118 C150 20 250 155 350 65 S500 28 555 105" class="route-line"></path><circle cx="45" cy="118" r="10" class="route-node"></circle><circle cx="350" cy="65" r="10" class="route-node"></circle><circle cx="555" cy="105" r="10" class="route-node"></circle><text x="45" y="150">${t0}</text><text x="350" y="38">${t1}</text><text x="555" y="137">${t2}</text></svg></div>`;
};

export const renderResult = (root: HTMLElement, state: TripState, result: SplitResult, ui: TripExpenseSplitterUI) => {
  const status = evaluateSettlement(result);
  const statusText = getStatusText(status, ui);
  const balanceRows = buildBalanceRowsMarkup(result.balances, state);
  const transfers = buildTransfersMarkup(result.transfers, state, ui);
  const routeMap = buildRouteMapMarkup(state.travelers, ui.settlementHint);
  
  root.innerHTML = `<div class="result-status status-${status}"><span class="status-dot"></span>${escapeHtml(statusText)}</div>${routeMap}<div class="result-total"><span>${escapeHtml(ui.totalSpent)}</span><strong>${money(result.totalSpent, state.currency)}</strong></div><div class="balance-list">${balanceRows}</div><div class="settlement-block"><div class="block-heading"><span>${escapeHtml(ui.resultHeading)}</span><span>${result.transfers.length} ${escapeHtml(ui.transferCount)}</span></div><div class="transfer-list">${transfers}</div></div>`;
};
