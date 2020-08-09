import React from 'react';

import TextEditBox from './TextEditBox';
import TextBox from './TextBox';

/** @jsx jsx */
import { css, jsx } from '@emotion/core'

/* Component Styles */
const Style = (isSelected: boolean, isFocused: boolean) => css`
  label: normal;
  outline: none;
  border: 1px solid black;
  ${isSelected && css`
    label: selected;
    border-width: 2px;
  `}
  ${isFocused && css`
    label: focused;
    border-color: red;
  `}
`;

/* Component Props/State */
type Props = {
  columnIndex: number;
  rowIndex: number;
  value: string | number;
  isSelected: boolean;
  isFocused: boolean;
  isEditable: boolean;
  onClick: (colIdx: number, rowIdxy: number) => void;
  onChange: (value: string) => void;
};

/* Component */
const GridCell: React.FC<Props> = ({
  columnIndex, rowIndex, value, isSelected, isFocused, isEditable, onClick, onChange
}) => {
  return (
    isEditable
      ? <TextEditBox
          columnIndex={columnIndex}
          rowIndex={rowIndex}
          value={value}
          style={Style(isSelected, isFocused)}
          onChange={onChange}
        />
      : <TextBox
          columnIndex={columnIndex}
          rowIndex={rowIndex}
          value={value}
          style={Style(isSelected, isFocused)}
          onClick={onClick}
        />

  );
};

export default GridCell;
export type GridCellProps = Props;
