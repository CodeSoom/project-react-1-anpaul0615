import React from 'react';

import { render } from '@testing-library/react';

import Grid from './Grid';

import { GridOption } from '../store/types/grid';

import GRID_OPTION from '../store/__fixtures__/grid-option';

describe('Grid', () => {
  const renderComponent = (option: GridOption) => render((
    <Grid option={option} />
  ));

  describe('with option', () => {
    const option: GridOption = GRID_OPTION;

    it('renders grid', () => {
      const { getByRole } = renderComponent(option);
      expect(getByRole('grid')).not.toBeNull();
    });
  });
});
