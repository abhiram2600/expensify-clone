import React from "react";
import { View, Text } from "react-native";
import { Navigator } from "./navigation/Navigator";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

interface AppProps {}

const App: React.FC<AppProps> = () => {
  return (
    <SafeAreaProvider>
      <Navigator isSignedIn={true} />
    </SafeAreaProvider>
  );
};

export default App;
