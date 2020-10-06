import React from "react";
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

const GRID_SIZE = 20;
const windowWidth = Dimensions.get("window").width;
const cellSize = windowWidth / GRID_SIZE;

type Cell = "empty" | "snake" | "food";
let grid: Cell[][] = Array(GRID_SIZE).fill(Array(GRID_SIZE).fill("empty"));
// let grid: Cell[][] = [...Array(GRID_SIZE)].map(() =>
//   [...Array(GRID_SIZE)].map(() => "empty")
// );

export const Game = () => {
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
        <View style={{ display: "flex", flexDirection: "row" }}>
          {row.map((cell, columnIndex) => {
            return <Cell key={columnIndex + rowIndex} size={cellSize} />;
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
