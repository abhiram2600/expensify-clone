import { useThemeStore } from "@/store";
import React from "react";
import {
  View as RNView,
  ViewProps as RNViewProps,
  StyleSheet,
  Pressable,
  Keyboard,
  Dimensions,
} from "react-native";
import {
  SafeAreaView,
  SafeAreaViewProps as RNSafeAreaViewProps,
} from "react-native-safe-area-context";

interface ViewProps extends RNViewProps {
  addPaddingHorizontal?: boolean;
}

interface SafeAreaViewProps extends RNSafeAreaViewProps {
  addPaddingHorizontal?: boolean;
}

interface ViewTypes {
  Row: React.FC<ViewProps>;
  SafeAreaView: React.FC<SafeAreaViewProps>;
  HandleKeyboard: React.FC<RNViewProps>;
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
  const colors = useThemeStore((state) => state.colors);
  return (
    <>
      <RNView
        style={[
          {
            position: "absolute",
            height: Dimensions.get("window").height,
            width: Dimensions.get("window").width,
            backgroundColor: colors.background,
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

View.HandleKeyboard = ({ children, style, ...props }) => {
  return (
    <Pressable onPress={Keyboard.dismiss} accessible={false}>
      <View style={[{ height: "100%" }, style]} {...props}>
        {children}
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
  },
  paddingHorizontal: {
    paddingHorizontal: 15,
  },
});
