import { useThemeStore } from "@/store/ThemeStore";
import React from "react";
import {
  StyleSheet,
  TouchableOpacity,
  TouchableOpacityProps,
} from "react-native";

interface CommonButtonProps extends TouchableOpacityProps {}

export const CommonButton: React.FC<CommonButtonProps> = ({
  children,
  style,
  ...props
}) => {
  const colors = useThemeStore((state) => state.colors);
  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor: colors.GREEN }, style]}
      {...props}
    >
      {children}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: "100%",
    height: 50,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
  },
});
