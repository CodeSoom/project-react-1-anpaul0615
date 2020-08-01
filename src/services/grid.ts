import { GridOption } from '../store/types/grid';

export function validateGridOption(option: GridOption): Promise<{ option: GridOption }> {
  return new Promise((resolve, reject) => {  // todo : implement validation
    setTimeout(() => {
      resolve({ option });
    }, 1000);
  });
}
