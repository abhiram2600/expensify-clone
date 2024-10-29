import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { RootStackNavigator } from "./RootFlowNavigator";
import { AuthFlowNavigator } from "./AuthFlowNavigator";

interface NavigatorProps {
  isSignedIn: boolean;
}

export const Navigator: React.FC<NavigatorProps> = ({ isSignedIn }) => {
  return (
    <NavigationContainer>
      {isSignedIn ? <RootStackNavigator /> : <AuthFlowNavigator />}
    </NavigationContainer>
  );
};
