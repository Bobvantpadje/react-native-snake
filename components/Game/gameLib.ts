import { Dimensions } from "react-native";

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

}
