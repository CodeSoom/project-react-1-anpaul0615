import React from 'react';

/** @jsx jsx */
import { jsx, SerializedStyles } from '@emotion/core'

/* Component Props/State */
type Props = {
  columnIndex: number;
  rowIndex: number;
  value: string | number;
  style: SerializedStyles;
  onClick: (colIdx: number, rowIdxy: number) => void;
};

/* Component */
const TextBox: React.FC<Props> = ({
  columnIndex, rowIndex, value, style, onClick
}) => {
  return (
    <span
      data-testid='non-editable-cell'
      css={style}
      onClick={() => onClick(columnIndex, rowIndex)}
    >
      {value}
    </span>
  );
};

export default TextBox;
export type TextBoxProps = Props;
