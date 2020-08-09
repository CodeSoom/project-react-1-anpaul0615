import React, { useRef } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import {
  setFocusedCell, setSelection, toggleFocusedCellEditable, moveFocusedCell
 } from '../store/modules/grid';
import { RootState } from '../store/types';

import Grid from '../components/Grid';
import LoadingCircle from '../components/LoadingCircle';

import { KeyCode } from '../constants/KeyCode';

/* Container Props/State */
type Props = {};

/* Container */
const GridContainer: React.FC<Props> = () => {
  const ref = useRef<HTMLDivElement>(null);

  const isPending = useSelector((state:RootState) => state.Grid.pending);
  const option = useSelector((state:RootState) => state.Grid.option);
  
  const dispatch = useDispatch();

  function handleClickCell(x: number, y: number) {
    dispatch(setFocusedCell({ x, y, isEditable: false }));
    dispatch(setSelection({
      startColumnIndex: x, startRowIndex: y, endColumnIndex: x, endRowIndex: y,
    }));
  }

  function handleChangeCellInput(value: string) {
    // todo
  }

  function handleKeyboardEvent(event: React.KeyboardEvent<HTMLDivElement>) {
    const { keyCode } = event;
    if (keyCode === KeyCode.ENTER) dispatch(toggleFocusedCellEditable());
    if (keyCode === KeyCode.ARROW_LEFT) dispatch(moveFocusedCell({ x: -1, y: 0 }));
    if (keyCode === KeyCode.ARROW_UP) dispatch(moveFocusedCell({ x: 0, y: -1 }));
    if (keyCode === KeyCode.ARROW_RIGHT) dispatch(moveFocusedCell({ x: 1, y: 0 }));
    if (keyCode === KeyCode.ARROW_DOWN) dispatch(moveFocusedCell({ x: 0, y: 1 }));
    ref.current?.focus();
  }


  return (
    <div
      ref={ref}
      tabIndex={-1}
      onKeyDown={handleKeyboardEvent}
    >
      { isPending && <LoadingCircle />}
      <Grid
        option={option}
        onClickCell={handleClickCell}
        onChangeCellInput={handleChangeCellInput}
      />
    </div>
  );
};

export default GridContainer;
