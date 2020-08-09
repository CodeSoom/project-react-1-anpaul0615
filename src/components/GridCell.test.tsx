import React from 'react';

import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import given2 from 'given2';
 
import GridCell, { GridCellProps } from './GridCell';

describe('GridCell', () => {
  const handleClick = jest.fn();
  const handleChangeInput = jest.fn();

  const renderGridCell = () => {
    const defaultProps: GridCellProps = {
      columnIndex: 0,
      rowIndex: 0,
      editable: true,
      value: '',
      isSelected: false,
      isFocused: false,
      onClick: handleClick,
      onChange: handleChangeInput,
    };

    const conditionalProps: Partial<GridCellProps> = {
      editable: given2.editable,
      value: given2.value,
      isSelected: given2.isSelected,
      isFocused: given2.isFocused,
    };

    return render(<GridCell {...defaultProps} {...conditionalProps} />);
  };

  beforeEach(() => {
    handleClick.mockClear();
    handleChangeInput.mockClear();
  });

  describe('when editable', () => {
    given2('editable', () => true);
    given2('value', () => 'VALUE');

    it('renders input-box', () => {
      const { queryByTestId } = renderGridCell();
      const editableCell = queryByTestId('editable-cell');
      const nonEditableCell = queryByTestId('non-editable-cell');

      expect(editableCell).not.toBeNull();
      expect(nonEditableCell).toBeNull();
    });

    describe('when typing', () => {
      given2('value', () => '');

      it('listens change events', () => {
        const { getByTestId } = renderGridCell();
        const cell = getByTestId('editable-cell');

        const textContent = 'VALUE';
        userEvent.type(cell, textContent);

        expect(handleChangeInput).toBeCalledTimes(textContent.length);
      });
    });
  });

  describe('when non-editable', () => {
    given2('editable', () => false);
    given2('value', () => 'VALUE');

    it('renders span', () => {
      const { queryByTestId } = renderGridCell();
      const editableCell = queryByTestId('editable-cell');
      const nonEditableCell = queryByTestId('non-editable-cell');

      expect(editableCell).toBeNull();
      expect(nonEditableCell).not.toBeNull();
    });

    describe('with click', () => {
      it('listens click events', () => {
        const { getByTestId } = renderGridCell();
        const cell = getByTestId('non-editable-cell');

        userEvent.click(cell);
        expect(handleClick).toBeCalledTimes(1);
      });
    });

    describe.skip('when selected', () => {
      given2('isSelected', () => true);
      given2('isFocused', () => false);

      it('render with selected-style', () => { });
    });

    describe.skip('when focused', () => {
      given2('isSelected', () => false);
      given2('isFocused', () => true);

      it('render with focused style', () => { });
    });

    describe.skip('when selected & focused', () => {
      given2('isSelected', () => true);
      given2('isFocused', () => true);

      it('render with selected and focused style', () => { });
    });
  });
});
