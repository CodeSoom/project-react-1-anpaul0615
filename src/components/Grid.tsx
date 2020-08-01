import React from 'react';

import { GridOption } from '../store/types/grid';

/* Component Props/State */
type Props = {
  option: GridOption;
};

/* Component */
const Grid: React.FC<Props> = ({ option }) => {
  return (
    <div>
      {JSON.stringify(option)}
    </div>
  );
};

export default Grid;
