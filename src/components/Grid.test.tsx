import React from 'react';

import { render } from '@testing-library/react';

import Grid from './Grid';

import { GridOption } from '../store/types/grid';

describe('Grid', () => {
  const renderComponent = (option: GridOption) => render((
    <Grid option={option} />
  ));

  describe('with option', () => {
    const option: GridOption = {
      data: [
        { H1: 'test header 1', H2: 'test header 2', V1: 3, },
        { H1: 'test header 11', H2: 'test header 22', V1: 33, },
        { H1: 'test header 111', H2: 'test header 222', V1: 333, },
      ],
      columns: [
        {
          id: 'H1',
          name: 'HEADER 1',
          valueType: typeof String,
        },
        {
          id: 'H2',
          name: 'HEADER 2',
          valueType: typeof String,
        },
        {
          id: 'V1',
          name: 'VALUE 1',
          valueType: typeof Number,
        },
      ],
    };

    it('renders grid with option', () => {
      const { getByText } = renderComponent(option);
      expect(getByText(JSON.stringify(option))).not.toBeNull();
    });
  });
});
