import React from 'react';

import GridCell from './GridCell';

import { GridOption } from '../store/types/grid';

/* Component Props/State */
type Props = {
  option: GridOption;
};

/* Component */
const Grid: React.FC<Props> = ({ option }) => {
  const { columns, data } = option;
  return (
    <table role="grid">
      <thead>
        <tr>
          {
            columns.map((col, colIdx) => {
              return (
                <th key={`header-${colIdx}-${col.id}`}>
                  {col.name}
                </th>
              );
            })
          }
        </tr>
      </thead>
      <tbody>
        {
          data.map((row, rowIdx) => {
            return (
              <tr key={`data-row-${rowIdx}`}>
                {
                  columns.map((col, colIdx) => {
                    return (
                      <td key={`data-column-${rowIdx}-${colIdx}`}>
                        <GridCell editable={false} value={row[col.id]} />
                      </td>
                    );
                  })
                }
              </tr>
            );
          })
        }
        </tbody>
    </table>
  );
};

export default Grid;
