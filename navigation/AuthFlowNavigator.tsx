import { EmailPhoneScreen, OneTimePasswordScreen } from "@/screens";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";

export type AuthStackList = {
  PhoneEmail: undefined;
  OneTimeCode: {
    email: string;
  };
};

const AuthStack = createNativeStackNavigator<AuthStackList>();

export const AuthFlowNavigator = () => {
  return (
    <AuthStack.Navigator screenOptions={{ headerShown: false }}>
      <AuthStack.Screen name="PhoneEmail" component={EmailPhoneScreen} />
      <AuthStack.Screen name="OneTimeCode" component={OneTimePasswordScreen} />
    </AuthStack.Navigator>
  );
};
