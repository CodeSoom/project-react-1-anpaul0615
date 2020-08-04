import { GridOption } from "../types/grid";

export default {
  data: [
    { H1: 'test header 1', H2: 'test header 2', V1: 3, },
    { H1: 'test header 11', H2: 'test header 22', V1: 33, },
    { H1: 'test header 111', H2: 'test header 222', V1: 333, },
  ],
  columns: [
    {
      id: 'H1',
      name: 'HEADER 1',
    },
    {
      id: 'H2',
      name: 'HEADER 2',
    },
    {
      id: 'V1',
      name: 'VALUE 1',
    },
  ],
} as GridOption;
