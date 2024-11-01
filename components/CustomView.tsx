import React from "react";
import {
  View as RNView,
  ViewProps as RNViewProps,
  StyleSheet,
  Dimensions,
} from "react-native";
import {
  SafeAreaView,
  SafeAreaViewProps,
} from "react-native-safe-area-context";
import { colors } from "@/constants/colors";
import { useAppStore } from "@/store/AppStore";

interface ViewProps extends RNViewProps {}

interface ViewTypes {
  Row: React.FC<RNViewProps>;
  SafeAreaView: React.FC<SafeAreaViewProps>;
}

export const View: React.FC<ViewProps> & ViewTypes = ({ ...props }) => {
  return <RNView {...props} />;
};

View.Row = ({ children, style, ...props }: RNViewProps) => {
  return (
    <RNView style={[{ flexDirection: "row" }, style]} {...props}>
      {children}
    </RNView>
  );
};

View.SafeAreaView = ({ children, style, ...props }: SafeAreaViewProps) => {
  const theme = useAppStore((state) => state.theme);
  return (
    <>
      <RNView
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

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
  },
  background: {
    position: "absolute",
    height: Dimensions.get("window").height,
    width: Dimensions.get("window").width,
  },
});
