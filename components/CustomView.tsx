import React from "react";
import { View, ViewProps, ScrollViewProps, StyleSheet } from "react-native";
import {
  SafeAreaView,
  SafeAreaViewProps,
} from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { colors } from "@/constants/colors";
import { scaleSize } from "@/utils";

interface CustomViewProps extends SafeAreaViewProps {
  isScrollView?: boolean;
  scrollViewProps?: ScrollViewProps;
}

export const CustomView: React.FC<CustomViewProps> & {
  Row: React.FC<ViewProps>;
} = ({ children, isScrollView = false, scrollViewProps, style, ...props }) => {
  const colorMode = "DARK";
  return (
    <SafeAreaView
      style={[
        styles.container,
        { backgroundColor: colors[colorMode].BACKGROUND },
        style,
      ]}
      {...props}
    >
      {children}
      <StatusBar style={colors[colorMode].STATUSBAR} />
    </SafeAreaView>
  );
};

CustomView.Row = ({ children, style, ...props }: ViewProps) => {
  return (
    <View style={[{ flexDirection: "row" }, style]} {...props}>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: scaleSize(15),
  },
});
