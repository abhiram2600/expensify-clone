import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ItemDetailsScreen, DetailEntryScreen, GenericModal } from "@/screens";
import { valueType } from "@/constants/data";
import { MainTabNavigator } from "./tab-navigator";

export type RootStackList = {
  MainTabs: undefined;
  ItemDetail: { id: number };
  DetailEntry: {
    title: string;
    value: valueType;
    id: number;
  };
};

const RootStack = createNativeStackNavigator<RootStackList>();

export const RootStackNavigator = () => {
  return (
    <RootStack.Navigator screenOptions={{ headerShown: false }}>
      <RootStack.Screen name="MainTabs" component={MainTabNavigator} />
      <RootStack.Screen name="ItemDetail" component={ItemDetailsScreen} />
      <RootStack.Screen name="DetailEntry" component={DetailEntryScreen} />
    </RootStack.Navigator>
  );
};
