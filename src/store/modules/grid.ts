import {
  createSlice, createAsyncThunk,
} from '@reduxjs/toolkit';

import { validateGridOption, isValidGridCellLocation } from '../../services/grid'

import { RootState } from '../types';
import { GridState, GridOption } from '../types/grid';

/**
 * Namespace
 */
export const namespace = 'Grid';

/**
 * Initial State
 */
export const initialState: GridState = {
  pending: false,
  error: false,
  option: {
    data: [],
    columns: [],
    focusedCell: null,
    selection: null,
  },
};

/**
 * Async Actions
 */
export const setGridOption = createAsyncThunk<GridOption, GridOption|undefined, { state: RootState }>(
  `${namespace}/setGridOption`,
  async (option = initialState.option, thunkAPI) => {
    const response = await validateGridOption(option);
    return response.option;
  },
);

/**
 * Slice
 */
const slice = createSlice({
  name: namespace,
  initialState,
  reducers: {
    showLoadingCircle: (state) => {
      state.pending = true;
    },
    hideLoadingCircle: (state) => {
      state.pending = false;
    },
    setFocusedCell: (state, { payload: { x, y, isEditable = false } }) => {
      state.option.focusedCell = { x, y, isEditable };
    },
    resetFocusedCell: (state) => {
      state.option.focusedCell = initialState.option.focusedCell;
    },
    toggleFocusedCellEditable: (state) => {
      if (state.option.focusedCell) {
        state.option.focusedCell.isEditable = !state.option.focusedCell.isEditable;
      }
    },
    moveFocusedCell: (state, { payload: { x, y } }) => {
      if (!state.option.focusedCell) {
        return;
      }
      const { columns, data, focusedCell } = state.option;
      if (!isValidGridCellLocation(x, y, focusedCell.x, focusedCell.y, columns.length - 1, data.length - 1)) {
        return;
      }
      state.option.focusedCell.x += x;
      state.option.focusedCell.y += y;
    },
    setSelection: (state, { payload: { startColumnIndex, startRowIndex, endColumnIndex, endRowIndex } }) => {
      state.option.selection = { startColumnIndex, startRowIndex, endColumnIndex, endRowIndex };
    },
    resetSelection: (state) => {
      state.option.focusedCell = initialState.option.focusedCell;
    },
  },
  extraReducers: {
    [setGridOption.pending.type]: (state) => {
      state.pending = true;
      state.error = false;
    },
    [setGridOption.fulfilled.type]: (state, { payload: option }) => {
      state.pending = false;
      state.error = false;
      state.option = option;
    },
    [setGridOption.rejected.type]: (state, { payload: error }) => {
      state.pending = false;
      state.error = true;  // todo: error handling
    },
  }
});

/**
 * Export
 */
export default slice;
export const { reducer } = slice;
export const {
  showLoadingCircle,
  hideLoadingCircle,
  setFocusedCell,
  resetFocusedCell,
  toggleFocusedCellEditable,
  moveFocusedCell,
  setSelection,
  resetSelection,
} = slice.actions;
