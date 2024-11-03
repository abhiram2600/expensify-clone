import React from "react";
import { TextInput, StyleSheet } from "react-native";

type validTypes = string | number | Date;

interface GenericInputProps {
  value: validTypes;
  onChangeText: (e: validTypes) => void;
}

export const GenericInput: React.FC<GenericInputProps> = ({
  value,
  onChangeText,
}) => {
  return (
    <TextInput
      style={styles.input}
      value={value.toString()}
      onChangeText={onChangeText}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    width: "100%",
    borderWidth: 1,
    borderColor: "black",
    height: 40,
    color: "white",
  },
});
