import React from "react";
import { StyleSheet } from "react-native";
import { colors } from "@/constants/colors";
import { scaleSize } from "@/utils";
import { View } from "./CustomView";

interface HorizontalRuleProps {}

export const HorizontalRule: React.FC<HorizontalRuleProps> = () => {
  return <View style={styles.horizontalRuler} />;
};

const styles = StyleSheet.create({
  horizontalRuler: {
    width: "auto",
    height: scaleSize(1),
    borderRadius: scaleSize(1),
    backgroundColor: colors.GREY,
  },
});
