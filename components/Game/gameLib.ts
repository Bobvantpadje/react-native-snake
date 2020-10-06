import { Dimensions } from "react-native";
import produce from "immer";

export const getCellSize = (gridSize: number) => {
  const windowWidth = Dimensions.get("window").width;
  return windowWidth / gridSize;
};

export const createInitialGrid = (gridSize: number) => {
  let grid: IGrid = [...Array(gridSize)].map(() =>
    [...Array(gridSize)].map(() => "empty")
  );
  return grid;
};

export const insertInitialSnakeInGrid = (grid: IGrid) => {
  const middle = grid.length / 2;
  return produce(grid, (draft) => {
    draft[middle][middle] = "snake";
    draft[middle][middle + 1] = "snake";
    draft[middle][middle + 2] = "snake";
  });
};

interface State {
  readonly x: number;
}

// `x` cannot be modified here
const state: State = {
  x: 0,
};
