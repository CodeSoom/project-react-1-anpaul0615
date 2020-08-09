import React from 'react';

import GridCell from './GridCell';

import { GridOption, Cell, Selection } from '../store/types/grid';

/* Component Props/State */
type Props = {
  option: GridOption;
  onClickCell: (colIdx: number, rowIdxy: number) => void;
  onChangeCellInput: (value: string) => void;
};

/* Component */
const Grid: React.FC<Props> = ({ option, onClickCell, onChangeCellInput }) => {

  function isFocused(focusedCell: Cell, colIdx: number, rowIdx: number) {
    return focusedCell.x === colIdx && focusedCell.y === rowIdx;
  }

  function isInSelection(selection: Selection, colIdx: number, rowIdx: number) {
    return (selection.startColumnIndex <= colIdx && selection.endColumnIndex >= colIdx)
      && (selection.startRowIndex <= rowIdx && selection.endRowIndex >= rowIdx);
  }
  
  const { columns, data, focusedCell, selection } = option;
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
                      <td key={`data-column-${colIdx}`}>
                        <GridCell
                          columnIndex={colIdx}
                          rowIndex={rowIdx}
                          value={row[col.id]}
                          isSelected={selection ? isInSelection(selection, colIdx, rowIdx) : false}
                          isFocused={focusedCell ? isFocused(focusedCell, colIdx, rowIdx) : false}
                          isEditable={focusedCell ? isFocused(focusedCell, colIdx, rowIdx) && focusedCell.isEditable : false}
                          onClick={onClickCell}
                          onChange={onChangeCellInput}
                        />
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
export type GridProps = Props;
