import React, { useEffect, useRef } from 'react';

import { KeyCode } from '../constants/KeyCode';

/** @jsx jsx */
import { jsx, SerializedStyles } from '@emotion/core'

/* Component Props/State */
type Props = {
  columnIndex: number;
  rowIndex: number;
  value: string | number;
  style: SerializedStyles;
  onChange: (value: string) => void;
};

/* Component */
const TextEditBox: React.FC<Props> = ({
  columnIndex, rowIndex, value, style, onChange,
}) => {

  const ref = useRef<HTMLInputElement>(null);
  
  useEffect(() => {
    ref.current?.focus();
  }, []);
  
  return (
    <input
      type='text'
      data-testid='editable-cell'
      ref={ref}
      value={value}
      css={style}
      onKeyDown={(event) => {
        if ([KeyCode.ENTER].includes(event.keyCode)) {
          return;
        }
        event.preventDefault();
        event.stopPropagation();
      }}
      onChange={(event) => {
        event.preventDefault();
        event.stopPropagation();
        onChange(event.target.value);
      }}
    />
  );
};

export default TextEditBox;
export type TextEditBoxProps = Props;
