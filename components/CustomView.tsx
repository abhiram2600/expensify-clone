import React from "react";
import {
  View as RNView,
  ViewProps as RNViewProps,
  StyleSheet,
  Dimensions,
} from "react-native";
import {
  SafeAreaView,
  SafeAreaViewProps as RNSafeAreaViewProps,
} from "react-native-safe-area-context";
import { colors } from "@/constants/colors";
import { useAppStore } from "@/store/AppStore";

interface ViewProps extends RNViewProps {
  addPaddingHorizontal?: boolean;
}

interface SafeAreaViewProps extends RNSafeAreaViewProps {
  addPaddingHorizontal?: boolean;
}

interface ViewTypes {
  Row: React.FC<ViewProps>;
  SafeAreaView: React.FC<SafeAreaViewProps>;
}

export const View: React.FC<ViewProps> & ViewTypes = ({
  addPaddingHorizontal = false,
  style,
  ...props
}) => {
  return (
    <RNView
      style={[addPaddingHorizontal && styles.paddingHorizontal, style]}
      {...props}
    />
  );
};

View.Row = ({ addPaddingHorizontal = false, children, style, ...props }) => {
  return (
    <RNView
      style={[
        { flexDirection: "row" },
        addPaddingHorizontal && styles.paddingHorizontal,
        style,
      ]}
      {...props}
    >
      {children}
    </RNView>
  );
};

View.SafeAreaView = ({
  addPaddingHorizontal = false,
  children,
  style,
  ...props
}) => {
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
      <SafeAreaView
        style={[
          addPaddingHorizontal && styles.paddingHorizontal,
          styles.container,
          style,
        ]}
        {...props}
      >
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
  paddingHorizontal: {
    paddingHorizontal: 15,
  },
});
