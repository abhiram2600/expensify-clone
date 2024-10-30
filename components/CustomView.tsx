import React from "react";
import {
  View,
  ViewProps,
  ScrollViewProps,
  StyleSheet,
  Dimensions,
} from "react-native";
import {
  SafeAreaView,
  SafeAreaViewProps,
} from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { colors } from "@/constants/colors";
import { scaleSize } from "@/utils";
import { useAppStore } from "@/store/AppStore";

interface CustomViewProps extends SafeAreaViewProps {
  isScrollView?: boolean;
  scrollViewProps?: ScrollViewProps;
}

export const CustomView: React.FC<CustomViewProps> & {
  Row: React.FC<ViewProps>;
} = ({ children, isScrollView = false, scrollViewProps, style, ...props }) => {
  const theme = useAppStore((state) => state.theme);
  return (
    <>
      <View
        style={[
          styles.background,
          {
            backgroundColor: colors[theme].BACKGROUND,
          },
        ]}
      />
      <SafeAreaView style={[styles.container, style]} {...props}>
        {children}
      </SafeAreaView>
    </>
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
  background: {
    position: "absolute",
    height: Dimensions.get("window").height,
    width: Dimensions.get("window").width,
  },
});
