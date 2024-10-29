import { colors } from "@/constants/colors";
import { scaleSize } from "@/utils";
import React from "react";
import { View, Text, StyleSheet } from "react-native";

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
