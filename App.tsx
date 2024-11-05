import React from "react";
import { Navigator } from "./navigation/Navigator";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { GenericModal } from "./screens";
import { useThemeStore } from "./store/ThemeStore";
import { StatusBar } from "expo-status-bar";

interface AppProps {}

const App: React.FC<AppProps> = () => {
  const { statusBar } = useThemeStore((state) => state.colors);
  return (
    <>
      <SafeAreaProvider>
        <Navigator />
      </SafeAreaProvider>
      <GenericModal />
      <StatusBar style={statusBar} />
    </>
  );
};

export default App;
