import React from 'react';

/* Component Props/State */
type Props = {
  editable: boolean;
  value: string | number;
};

/* Component */
const Cell: React.FC<Props> = ({ editable, value }) => {
  return (
    editable
    ? <input type='text' value={value} onChange={console.log} />
    : <span>{value}</span>
  );
};

export default Cell;
