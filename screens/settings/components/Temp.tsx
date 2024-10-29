import React from "react";
import { View, Text } from "react-native";

interface TempProps {}

export const Temp: React.FC<TempProps> = () => {
  return (
    <View
      style={{
        backgroundColor: "teal",
        height: 15,
        width: 15,
      }}
    />
  );
};
