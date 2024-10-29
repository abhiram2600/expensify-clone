import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { MainFlowNavigator } from "./MainFlowNavigator";
import { AuthFlowNavigator } from "./AuthFlowNavigator";

interface NavigatorProps {
  isSignedIn: boolean;
}

export const Navigator: React.FC<NavigatorProps> = ({ isSignedIn }) => {
  return (
    <NavigationContainer>
      {isSignedIn ? <MainFlowNavigator /> : <AuthFlowNavigator />}
    </NavigationContainer>
  );
};
