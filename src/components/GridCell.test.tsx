import React from 'react';

import { render } from '@testing-library/react';

import GridCell from './GridCell';

describe('GridCell', () => {
  const renderGridCell = (editable:boolean, value:any) => render((
    <GridCell editable={editable} value={value} />
  ));

  describe('when editable true', () => {
    it('renders text-input-box', () => {
      const { getByRole } = renderGridCell(true, 'VALUE');
      expect(getByRole('textbox')).not.toBeNull();
    });
  });

  describe('when editable false', () => {
    it('renders text-view-box', () => {
      const { queryByRole, getByText } = renderGridCell(false, 'VALUE');
      expect(queryByRole('input')).toBeNull();
      expect(getByText('VALUE')).not.toBeNull();
    });
  });
});
