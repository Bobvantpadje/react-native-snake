import React from "react";
import { View } from "react-native";

type ICellProps = {
  size: number;
  type: ICell;
};
export const Cell: React.FC<ICellProps> = ({ size, type }) => {
  return (
    <View
      style={{
        width: size,
        height: size,
        margin: 1,
        backgroundColor: getColor(type),
      }}
    />
  );
};

export const getColor = (type: ICell = "empty") => {
  if (type === "empty") return "red";
  if (type === "food") return "yellow";
  if (type === "snake") return "green";
};
