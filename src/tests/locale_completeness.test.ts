import { describe, it, expect } from 'vitest';
import { ALL_TOOLS } from '../tools';
import type { ToolLocaleContent } from '../types';

describe('Locale Completeness Validation', () => {
  ALL_TOOLS.forEach((tool) => {
    describe(`Tool: ${tool.entry.id}`, () => {
      Object.keys(tool.entry.i18n).forEach((locale) => {
        describe(`Locale: ${locale}`, () => {
          it('should have mandatory properties', async () => {
            const loader = tool.entry.i18n[locale as keyof typeof tool.entry.i18n];
            const content = (await loader?.()) as ToolLocaleContent;
            expect(content.slug).toBeTruthy();
            expect(typeof content.slug).toBe('string');
            expect(content.title).toBeTruthy();
            expect(typeof content.title).toBe('string');
            expect(content.description).toBeTruthy();
            expect(typeof content.description).toBe('string');
          });
        });
      });
    });
  });

  it('all 7 tools registered', () => {
    expect(ALL_TOOLS.length).toBe(7);
  });
});
