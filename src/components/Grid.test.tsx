import React from 'react';

import { render } from '@testing-library/react';
import given2 from 'given2';

import Grid, { GridProps } from './Grid';

import GRID_OPTION from '../store/__fixtures__/grid-option';

describe('Grid', () => {
  const handleClickCell = jest.fn();
  const handleChangeCellInput = jest.fn();

  const renderGrid = () => {
    const defaultProps: GridProps = {
      option: {
        data: [],
        columns: [],
        focusedCell: null,
        selection: null,
      },
      onClickCell: handleClickCell,
      onChangeCellInput: handleChangeCellInput,
    };

    const conditionalProps: Partial<GridProps> = {
      option: given2.option,
    };

    return render(<Grid {...defaultProps} {...conditionalProps} />);
  };

  beforeEach(() => {
    handleClickCell.mockClear();
    handleChangeCellInput.mockClear();
  });

  describe('with option', () => {
    given2('option', () => GRID_OPTION);

    it('renders grid', () => {
      const { getByRole } = renderGrid();
      expect(getByRole('grid')).not.toBeNull();
    });

    describe.skip('with empty columns', () => { });

    describe.skip('with empty data', () => { });

    describe.skip('with columns and data', () => { });
  });
});
