import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { RootStackNavigator } from "./RootFlowNavigator";
import { AuthFlowNavigator } from "./AuthFlowNavigator";
import { useAuthStore } from "@/store/AuthStore";

interface NavigatorProps {}

export const Navigator: React.FC<NavigatorProps> = () => {
  const authToken = useAuthStore((state) => state.authToken);
  return (
    <NavigationContainer>
      {authToken || true ? <RootStackNavigator /> : <AuthFlowNavigator />}
    </NavigationContainer>
  );
};
