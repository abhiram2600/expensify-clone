import React from "react";
import { Navigator } from "./navigation/Navigator";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { View } from "./components";
import { GenericModal } from "./screens";

interface AppProps {}

const App: React.FC<AppProps> = () => {
  return (
    <>
      <SafeAreaProvider>
        <Navigator />
      </SafeAreaProvider>
      <GenericModal />
    </>
  );
};

export default App;
