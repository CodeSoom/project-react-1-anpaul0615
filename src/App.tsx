import React, { useEffect } from 'react';

import { useDispatch } from 'react-redux';
import { setGridOption } from './store/modules/grid';
import { GridOption } from './store/types/grid'

import GridContiner from './containers/GirdContiner';

/* Component Props/State */
type Props = { 
  option?: GridOption;
};

/* Component */
const App: React.FC<Props> = ({ option }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setGridOption(option));
  }, [option, dispatch]);

  return <GridContiner />;
}

export default App;
