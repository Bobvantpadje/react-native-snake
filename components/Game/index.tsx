import React, { useEffect, useState } from "react";
import {
  Button,
  PanResponderGestureState,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
  Dimensions,
} from "react-native";
import GestureRecognizer from "react-native-swipe-gestures";
import { Cell } from "./Cell";
import { createInitialGrid, getCellSize } from "./gameLib";

const GRID_SIZE = 20;
const cellSize = getCellSize(GRID_SIZE);
let grid = createInitialGrid(GRID_SIZE);

export const Game = () => {
  const [gameSpeed, setGameSpeed] = useState(500);
  const [snakePosition, setSnakePosition] = useState({
    x: GRID_SIZE / 2,
    y: GRID_SIZE / 2,
  });

  // useEffect(() => {}, []);

  const setSnakeDirection = (
    gestureName: string,
    gestureSate: PanResponderGestureState
  ) => {
    // alert(gestureName);
  };

  const cells = [];
  return (
    <GestureRecognizer style={styles.container} onSwipe={setSnakeDirection}>
      {grid.map((row, rowIndex) => (
        <View key={rowIndex} style={{ display: "flex", flexDirection: "row" }}>
          {row.map((cell, columnIndex) => {
            console.log(cell);
            return (
              <Cell
                key={`${columnIndex}${rowIndex}`}
                size={cellSize}
                type={cell}
              />
            );
          })}
        </View>
      ))}
    </GestureRecognizer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "blue",
  },
  title: {
    fontSize: 30,
    textAlign: "center",
    marginTop: 64,
    fontWeight: "bold",
  },
  description: {
    marginTop: 16,
    fontSize: 20,
    padding: 16,
    textAlign: "center",
  },
  button: {
    backgroundColor: "white",
    width: "50%",
    height: 50,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    marginTop: 32,
  },
});
