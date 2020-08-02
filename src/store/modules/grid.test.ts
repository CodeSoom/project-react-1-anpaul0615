import { getDefaultMiddleware } from '@reduxjs/toolkit';

import configureStore from 'redux-mock-store';

import { reducer, initialState, setGridOption, showLoadingCircle, hideLoadingCircle } from './grid';

import GRID_OPTION from '../__fixtures__/grid-option';

const mockStore = configureStore(getDefaultMiddleware());

describe('store/modules/grid', () => {

  /**
   * Action
   */
  describe('action', () => {
    let store: any;
  
    beforeEach(() => {
      store = mockStore(initialState);
    });

    describe('setGridOption', () => {
      it('runs setGridOption.pending and setGridOption.fulfilled', async () => {
        await store.dispatch(setGridOption(GRID_OPTION));

        const actions = store.getActions();

        expect(actions[0].type).toEqual(setGridOption.pending.type);
        expect(actions[1].type).toEqual(setGridOption.fulfilled.type);
      });
    });
  });


  /**
   * Reducer
   */
  describe('reducer', () => {
    describe('showLoadingCircle', () => {
      it('changes pending to true', () => {
        const state = reducer(initialState, showLoadingCircle());

        expect(state.pending).toBe(true);
      });
    });

    describe('hideLoadingCircle', () => {
      it('changes pending to false', () => {
        const state = reducer(initialState, hideLoadingCircle());

        expect(state.pending).toBe(false);
      });
    });
  });
});
