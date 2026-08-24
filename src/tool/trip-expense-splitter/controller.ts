import { calculateBalances, createDefaultState, type TripExpense, type TripState } from './logic';
import { clearState, loadState, saveState } from './storage';
import { renderExpenses, renderParticipantChips, renderPayer, renderResult, renderTravelers } from './dom-views';
import type { TripExpenseSplitterUI } from './ui';

const getElement = <T extends HTMLElement>(root: ParentNode, selector: string) => root.querySelector<T>(selector);
const makeId = (prefix: string) => `${prefix}-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`;
const formValue = (root: ParentNode, selector: string) => getElement<HTMLInputElement>(root, selector)?.value.trim() || '';
const readSharedState = (): TripState | null => {
  try {
    const encoded = new URLSearchParams(window.location.search).get('share');
    return encoded ? JSON.parse(encoded) as TripState : null;
  } catch {
    return null;
  }
};

const render = (root: HTMLElement, state: TripState, ui: TripExpenseSplitterUI) => {
  const result = calculateBalances(state);
  renderTravelers(getElement(root, '[data-travelers]')!, state, ui);
  renderExpenses(getElement(root, '[data-expenses]')!, state, ui);
  renderResult(getElement(root, '[data-result]')!, state, result, ui);
  getElement(root, '[data-currency-row]')!.innerHTML = ui.currencyOptions.map((option) => `<button type="button" class="currency-chip ${option.code === state.currency ? 'is-selected' : ''}" data-currency="${option.code}">${option.code}<span>${option.symbol}</span></button>`).join('');
};

const refreshResults = (root: HTMLElement, state: TripState, ui: TripExpenseSplitterUI) => {
  const result = calculateBalances(state);
  renderExpenses(getElement(root, '[data-expenses]')!, state, ui);
  renderResult(getElement(root, '[data-result]')!, state, result, ui);
};

const defaultExpense = (state: TripState, ui: TripExpenseSplitterUI): TripExpense => ({
  id: makeId('expense'),
  description: ui.expenseDescriptionPlaceholder,
  amount: 0,
  payerId: state.travelers[0].id,
  participantIds: state.travelers.map((traveler) => traveler.id),
});

const addExpense = (root: HTMLElement, state: TripState, ui: TripExpenseSplitterUI) => {
  const description = formValue(root, '[data-expense-description]') || ui.expenseDescriptionPlaceholder;
  const amount = Number(formValue(root, '[data-expense-amount]')) || 0;
  const payerId = getElement<HTMLElement>(root, '[data-payer-trigger]')?.dataset.selected || state.travelers[0].id;
  const participantIds = [...root.querySelectorAll<HTMLElement>('[data-participant].is-selected')].map((element) => element.dataset.participant!).filter(Boolean);
  state.expenses.push({ ...defaultExpense(state, ui), description, amount, payerId, participantIds: participantIds.length ? participantIds : state.travelers.map((traveler) => traveler.id) });
  saveState(state);
  render(root, state, ui);
  resetExpenseForm(root, state, ui);
};

const resetExpenseForm = (root: HTMLElement, state: TripState, ui: TripExpenseSplitterUI) => {
  const description = getElement<HTMLInputElement>(root, '[data-expense-description]');
  const amount = getElement<HTMLInputElement>(root, '[data-expense-amount]');
  if (description) description.value = '';
  if (amount) amount.value = '';
  const payer = getElement<HTMLElement>(root, '[data-payer-select]');
  if (payer) { renderPayer(payer, state, state.travelers[0].id); getElement<HTMLElement>(payer, '[data-payer-trigger]')!.dataset.selected = state.travelers[0].id; }
  renderParticipantChips(getElement(root, '[data-participant-select]')!, state, state.travelers.map((traveler) => traveler.id), ui);
};

const downloadJson = (state: TripState) => {
  const blob = new Blob([JSON.stringify(state, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = `${state.tripName.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '') || 'trip-expenses'}.json`;
  link.click();
  URL.revokeObjectURL(url);
};

const bind = (root: HTMLElement, state: TripState, ui: TripExpenseSplitterUI) => {
  root.addEventListener('input', (event) => {
    const target = event.target as HTMLInputElement;
    if (target.matches('[data-member-name]')) { state.travelers.find((traveler) => traveler.id === target.dataset.memberName)!.name = target.value; saveState(state); refreshResults(root, state, ui); }
    if (target.matches('[data-trip-name]')) { state.tripName = target.value; saveState(state); }
  });
  root.addEventListener('click', (event) => {
    void handleAction(event, root, state, ui);
  });
  document.addEventListener('click', (event) => {
    if (!root.contains(event.target as Node)) closePayer(root);
  });
};

const removeTraveler = (root: HTMLElement, state: TripState, id: string, ui: TripExpenseSplitterUI) => {
  state.travelers = state.travelers.filter((traveler) => traveler.id !== id);
  state.expenses = state.expenses.map((expense) => ({ ...expense, participantIds: expense.participantIds.filter((participantId) => participantId !== id), payerId: expense.payerId === id ? state.travelers[0].id : expense.payerId }));
  saveState(state); render(root, state, ui);
};

const togglePayer = (root: HTMLElement) => {
  const menu = getElement<HTMLElement>(root, '[data-payer-menu]');
  if (!menu) return;
  menu.hidden = !menu.hidden;
  getElement<HTMLElement>(root, '[data-payer-trigger]')!.setAttribute('aria-expanded', String(!menu.hidden));
};

const closePayer = (root: HTMLElement) => {
  const menu = getElement<HTMLElement>(root, '[data-payer-menu]');
  const trigger = getElement<HTMLElement>(root, '[data-payer-trigger]');
  if (!menu || !trigger) return;
  menu.hidden = true;
  trigger.setAttribute('aria-expanded', 'false');
};

const choosePayer = (root: HTMLElement, id: string) => {
  const trigger = getElement<HTMLElement>(root, '[data-payer-trigger]');
  const option = getElement<HTMLElement>(root, `[data-payer-option="${id}"]`);
  if (!trigger || !option) return;
  trigger.dataset.selected = id;
  trigger.querySelector('span')!.textContent = option.textContent;
  closePayer(root);
};

const copyLink = async (root: HTMLElement, state: TripState, ui: TripExpenseSplitterUI) => {
  const url = `${window.location.origin}${window.location.pathname}?share=${encodeURIComponent(JSON.stringify(state))}`;
  await navigator.clipboard?.writeText(url);
  const button = getElement<HTMLButtonElement>(root, '[data-copy-link]');
  if (button) { button.textContent = ui.copied; window.setTimeout(() => { button.textContent = ui.copyLink; }, 1600); }
};

const handleStateActions = (target: HTMLElement, root: HTMLElement, state: TripState, ui: TripExpenseSplitterUI): boolean => {
  if (target.matches('[data-add-member]')) {
    state.travelers.push({ id: makeId('traveler'), name: `${ui.travelerPlaceholder} ${state.travelers.length + 1}` });
    saveState(state); render(root, state, ui); resetExpenseForm(root, state, ui);
    return true;
  }
  if (target.matches('[data-remove-member]')) { removeTraveler(root, state, target.dataset.removeMember!, ui); return true; }
  if (target.matches('[data-add-expense]')) { addExpense(root, state, ui); return true; }
  if (target.matches('[data-remove-expense]')) {
    state.expenses = state.expenses.filter((expense) => expense.id !== target.dataset.removeExpense);
    saveState(state); render(root, state, ui);
    return true;
  }
  if (target.matches('[data-currency]')) {
    state.currency = target.dataset.currency!;
    saveState(state); render(root, state, ui); resetExpenseForm(root, state, ui);
    return true;
  }
  return false;
};

const handleUiActions = async (target: HTMLElement, root: HTMLElement, state: TripState, ui: TripExpenseSplitterUI): Promise<boolean> => {
  if (target.matches('[data-participant]')) { target.classList.toggle('is-selected'); return true; }
  if (target.matches('[data-payer-trigger]')) { togglePayer(root); return true; }
  if (target.matches('[data-payer-option]')) { choosePayer(root, target.dataset.payerOption!); return true; }
  if (target.matches('[data-copy-link]')) { await copyLink(root, state, ui); return true; }
  if (target.matches('[data-export-json]')) { downloadJson(state); return true; }
  if (target.matches('[data-reset]')) { clearState(); window.location.href = window.location.pathname; return true; }
  return false;
};

const handleAction = async (event: MouseEvent, root: HTMLElement, state: TripState, ui: TripExpenseSplitterUI) => {
  const clicked = event.target as HTMLElement;
  const selector = '[data-add-member], [data-remove-member], [data-add-expense], [data-remove-expense], [data-currency], [data-participant], [data-payer-trigger], [data-payer-option], [data-copy-link], [data-export-json], [data-reset]';
  const target = clicked.closest<HTMLElement>(selector) || clicked;
  
  if (handleStateActions(target, root, state, ui)) return;
  await handleUiActions(target, root, state, ui);
};

export const initTripExpenseSplitter = () => {
  const root = document.querySelector<HTMLElement>('[data-trip-expense-splitter]');
  const data = document.querySelector<HTMLScriptElement>('#trip-expense-splitter-data');
  if (!root || !data) return;
  const ui = JSON.parse(data.textContent || '{}') as TripExpenseSplitterUI;
  const state = readSharedState() || loadState() || createDefaultState(ui);
  const tripName = getElement<HTMLInputElement>(root, '[data-trip-name]');
  if (tripName) tripName.value = state.tripName;
  render(root, state, ui);
  resetExpenseForm(root, state, ui);
  bind(root, state, ui);
};
