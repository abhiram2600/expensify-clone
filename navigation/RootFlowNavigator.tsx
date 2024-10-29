import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { InboxScreen } from "@/screens/inbox/InboxScreen";
import { SettingsScreen } from "@/screens/settings";
import { TempScreen } from "@/screens/TempScreen";
import { SearchNavigator } from "./SearchNavigator";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ItemDetailsScreen } from "@/screens";

export type MainTabParamList = {
  Inbox: undefined;
  SearchNav: undefined;
  Settings: undefined;
  PlusButton: undefined;
};

const Tab = createBottomTabNavigator<MainTabParamList>();

const MainTabNavigator = () => {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name="Inbox" component={InboxScreen} />
      <Tab.Screen name="SearchNav" component={SearchNavigator} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
      <Tab.Screen name="PlusButton" component={TempScreen} />
    </Tab.Navigator>
  );
};

export type RootStackList = {
  MainTabs: undefined;
  ItemDetail: { id: string };
};

const RootStack = createNativeStackNavigator<RootStackList>();

export const RootStackNavigator = () => {
  return (
    <RootStack.Navigator screenOptions={{ headerShown: false }}>
      <RootStack.Screen name="MainTabs" component={MainTabNavigator} />
      <RootStack.Screen name="ItemDetail" component={ItemDetailsScreen} />
    </RootStack.Navigator>
  );
};
