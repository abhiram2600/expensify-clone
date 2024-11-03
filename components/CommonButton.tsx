import React from "react";
import {
  StyleSheet,
  TouchableOpacity,
  TouchableOpacityProps,
} from "react-native";
import { colors } from "@/constants/colors";

interface CommonButtonProps extends TouchableOpacityProps {}

export const CommonButton: React.FC<CommonButtonProps> = ({
  children,
  style,
  ...props
}) => {
  return (
    <TouchableOpacity style={[styles.button, style]} {...props}>
      {children}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: "100%",
    height: 50,
    backgroundColor: colors.GREEN,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
  },
});
