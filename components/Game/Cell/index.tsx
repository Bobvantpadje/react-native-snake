import React from "react";
import { View } from "react-native";

export const Cell: React.FC<{ size: number }> = ({ size }) => {
  return (
    <View
      style={{ width: size, height: size, margin: 1, backgroundColor: "black" }}
    />
  );
};
