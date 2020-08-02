import { validateGridOption } from './grid';

import GRID_OPTION from '../store/__fixtures__/grid-option';

describe('services/grid', () => {
  describe('validateGridOption', () => {
    it('returns regions', async () => {
      const { option: validatedOption} = await validateGridOption(GRID_OPTION);
      expect(validatedOption).toBe(GRID_OPTION);
    });
  });
});