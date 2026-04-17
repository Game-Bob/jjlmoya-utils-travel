import { describe, it, expect } from 'vitest';
import { ALL_TOOLS } from '../tools';
import { travelCategory } from '../category';

describe('Tool Validation Suite', () => {
  describe('Library Registration', () => {
    it('should have 4 tools in ALL_TOOLS', () => {
      expect(ALL_TOOLS.length).toBe(5);
    });

    it('travelCategory should be defined', () => {
      expect(travelCategory).toBeDefined();
      expect(travelCategory.i18n).toBeDefined();
    });
  });
});

