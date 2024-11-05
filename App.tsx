import React from "react";
import { Navigator } from "./navigation/Navigator";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { GenericModal } from "./screens";
import { useThemeStore } from "./store/ThemeStore";
import { StatusBar } from "expo-status-bar";
import { Dimensions, View } from "react-native";

interface AppProps {}

const App: React.FC<AppProps> = () => {
  const colors = useThemeStore((state) => state.colors);

  return (
    <>
      <View
        style={[
          {
            position: "absolute",
            height: Dimensions.get("window").height,
            width: Dimensions.get("window").width,
            backgroundColor: colors.background,
          },
        ]}
      />
      <SafeAreaProvider>
        <Navigator />
      </SafeAreaProvider>
      <GenericModal />
      <StatusBar style={colors.statusBar} />
    </>
  );
};

export default App;
