import React from 'react';

import { useSelector } from 'react-redux';
import { RootState } from '../store/types';

import Grid from '../components/Grid';
import LoadingCircle from '../components/LoadingCircle';

/* Container Props/State */
type Props = {};

/* Container */
const GridContainer: React.FC<Props> = () => {
  const isPending = useSelector((state:RootState) => state.Grid.pending);
  const option = useSelector((state:RootState) => state.Grid.option);
  
  return (
    <>
      { isPending && <LoadingCircle />}
      <Grid option={option} />
    </>
  );
};

export default GridContainer;
