export type GridState = {
  pending: boolean;
  error: boolean;
  option: GridOption;
};

export type GridOption = {
  data: Data;
  columns: Columns;
  focusedCell: Cell | null;
  selection: Selection | null;
};

export type Data = Array<{
  [key: string]: any;
}>;

export type Columns = Array<{
  id: string;
  name: string;
}>;

export type Cell = {
  x: number;
  y: number;
  isEditable: boolean,
};

export type Selection = {
  startRowIndex: number;
  startColumnIndex: number;
  endRowIndex: number;
  endColumnIndex: number;
};
