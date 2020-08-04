export type GridState = {
  pending: boolean;
  error: boolean;
  option: GridOption;
};

export type GridOption = {
  data: Data;
  columns: Columns;
};

export type Data = Array<{
  [key: string]: any;
}>;

export type Columns = Array<{
  id: string;
  name: string;
}>;
