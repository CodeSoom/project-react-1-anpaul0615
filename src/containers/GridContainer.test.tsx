import React from 'react';

import { render } from '@testing-library/react';
import given from 'given2';

import { useSelector } from 'react-redux';

import GridContainer from './GridContainer';

import GRID_OPTION from '../store/__fixtures__/grid-option';

jest.mock('react-redux');

describe('GridContainer', () => {
  const renderGridContainer = () => render((
    <GridContainer />
  ));

  const dispatch = jest.fn();

  beforeEach(() => {
    dispatch.mockClear();
    (useSelector as any).mockImplementation((selector: any) => selector({
      Grid: {
        pending: given.pending,
        option: given.option,
      },
    }));
  });

  describe('with option', () => {
    given('option', () => GRID_OPTION);

    describe('with pending true', () => {
      given('pending', () => true);
      
      describe('with option', () => {
        it('renders Grid with LoadingCircle', () => {
          const { getByText, getByRole } = renderGridContainer();
          
          expect(getByText(JSON.stringify(given.option))).not.toBeNull();
          expect(getByRole('progressbar')).not.toBeNull();
        });
      });
    });
  
    describe('with pending false', () => {
      given('pending', () => false);

      it('renders Grid without LoadingCircle', () => {
        const { getByText, queryByRole } = renderGridContainer();

        expect(getByText(JSON.stringify(given.option))).not.toBeNull();
        expect(queryByRole('progressbar')).toBeNull();
      });
    });
  });

  describe.skip('without option', () => {
    given('option', () => undefined);

    it('throws rendering error', () => {});
  });
});
