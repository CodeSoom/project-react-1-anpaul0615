import { GridOption } from '../store/types/grid';

export function validateGridOption(option: GridOption): Promise<{ option: GridOption }> {
  return new Promise((resolve, reject) => {  // todo : implement validation
    setTimeout(() => {
      resolve({ option });
    }, 1000);
  });
}

export function isValidGridCellLocation(
  x: number, y: number, prevX: number, prevY: number, xLimit: number, yLimit: number
): boolean {
  if (x < 0 && prevX === 0) return false;
  if (x > 0 && prevX === xLimit) return false;
  if (y < 0 && prevY === 0) return false;
  if (y > 0 && prevY === yLimit) return false;
  return true;
}
