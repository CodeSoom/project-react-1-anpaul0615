import React from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { setFocusedCell, setSelection } from '../store/modules/grid';
import { RootState } from '../store/types';

import Grid from '../components/Grid';
import LoadingCircle from '../components/LoadingCircle';

/* Container Props/State */
type Props = {};

/* Container */
const GridContainer: React.FC<Props> = () => {
  const isPending = useSelector((state:RootState) => state.Grid.pending);
  const option = useSelector((state:RootState) => state.Grid.option);
  
  const dispatch = useDispatch();

  function handleClickCell(x: number, y: number) {
    dispatch(setFocusedCell({ x, y }));
    dispatch(setSelection({
      startColumnIndex: x, startRowIndex: y, endColumnIndex: x, endRowIndex: y,
    }));
  }

  function handleChangeCellInput(value: string) {
    // todo
  }

  return (
    <>
      { isPending && <LoadingCircle />}
      <Grid
        option={option}
        onClickCell={handleClickCell}
        onChangeCellInput={handleChangeCellInput}
      />
    </>
  );
};

export default GridContainer;
