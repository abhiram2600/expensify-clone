import { useThemeStore } from "@/store";
import React from "react";
import { TextInput, StyleSheet } from "react-native";

export type validTypes = string | number;

interface GenericInputProps {
  value: validTypes;
  onChangeText: (e: validTypes) => void;
  placeholder?: string;
}

export const GenericInput: React.FC<GenericInputProps> = ({
  value,
  onChangeText,
  placeholder,
}) => {
  const colors = useThemeStore((state) => state.colors);
  return (
    <TextInput
      style={[
        styles.input,
        { color: colors.textPrimary, borderBottomColor: colors.GREY },
      ]}
      value={value.toString()}
      onChangeText={onChangeText}
      keyboardType={typeof value === "string" ? "default" : "number-pad"}
      placeholder={placeholder}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    width: "100%",
    height: 50,
    borderBottomWidth: 1,
  },
});
