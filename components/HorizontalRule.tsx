import React from "react";
import { StyleSheet, ViewProps } from "react-native";
import { colors } from "@/constants/colors";
import { scaleSize } from "@/utils";
import { View } from "./CustomView";

interface HorizontalRuleProps extends ViewProps {}

export const HorizontalRule: React.FC<HorizontalRuleProps> = ({
  style,
  ...props
}) => {
  return <View style={[styles.horizontalRuler, style]} {...props} />;
};

const styles = StyleSheet.create({
  horizontalRuler: {
    width: "auto",
    height: scaleSize(1),
    borderRadius: scaleSize(1),
    backgroundColor: colors.LIGHT_GREEN_3,
  },
});
