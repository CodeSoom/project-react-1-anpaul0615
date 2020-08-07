import React from 'react';

/** @jsx jsx */
import { css, jsx } from '@emotion/core'

/* Component Styles */
const cell = (isSelected: boolean, isFocused: boolean) => css`
  label: normal;
  outline: none;
  border: 1px solid black;
  ${isSelected && selectedCell}
  ${isFocused && focusedCell}
`;
const selectedCell = css`
  label: selected;
  border-width: 2px;
`;
const focusedCell = css`
  label: focused;
  border-color: red;
`;

/* Component Props/State */
type Props = {
  rowIndex: number;
  columnIndex: number;
  editable: boolean;
  value: string | number;
  isSelected: boolean;
  isFocused: boolean;
  onClick: (colIdx: number, rowIdxy: number) => void;
  onChange: (value: string) => void;
};

/* Component */
const Cell: React.FC<Props> = ({
  rowIndex, columnIndex, editable, value, isSelected, isFocused, onClick, onChange
}) => {
  return (
    editable
      ? <input
          type='text'
          data-testid='editable-cell'
          css={cell(isSelected, isFocused)}
          value={value}
          onChange={({ target }) => onChange(target.value)}
        />
      : <span
          data-testid='non-editable-cell'
          css={cell(isSelected, isFocused)}
          onClick={() => onClick(columnIndex, rowIndex)}
        >
          {value}
        </span>
  );
};

export default Cell;
export type GridCellProps = Props;
