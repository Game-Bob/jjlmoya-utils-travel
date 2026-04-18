export { ALL_ENTRIES } from './entries';
import { LUGGAGE_CALCULATOR_TOOL } from './tool/luggage-calculator';
import { TIP_CALCULATOR_TOOL } from './tool/tip-calculator';
import { SUITCASE_CHECKLIST_TOOL } from './tool/suitcase-checklist';
import { MINI_ADVENTURES_TOOL } from './tool/mini-adventures';
import type { ToolDefinition } from './types';

export const ALL_TOOLS: ToolDefinition[] = [
  LUGGAGE_CALCULATOR_TOOL,
  TIP_CALCULATOR_TOOL,
  SUITCASE_CHECKLIST_TOOL,
  MINI_ADVENTURES_TOOL,
];


