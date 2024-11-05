import React from "react";
import { StyleSheet, ViewProps } from "react-native";

import { scaleSize } from "@/utils";
import { View } from "./CustomView";
import { useThemeStore } from "@/store";

interface HorizontalRuleProps extends ViewProps {}

export const HorizontalRule: React.FC<HorizontalRuleProps> = ({
  style,
  ...props
}) => {
  const colors = useThemeStore((state) => state.colors);
  return (
    <View
      style={[
        styles.horizontalRuler,
        { backgroundColor: colors.COLOR_3 },
        style,
      ]}
      {...props}
    />
  );
};

const styles = StyleSheet.create({
  horizontalRuler: {
    width: "auto",
    height: scaleSize(1),
    borderRadius: scaleSize(1),
  },
});
