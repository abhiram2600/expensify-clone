import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { InboxScreen } from "@/screens/inbox/InboxScreen";
import { SearchScreen } from "@/screens/search/SearchScreen";
import { SettingsScreen } from "@/screens/settings";
import { TempScreen } from "@/screens/TempScreen";

interface MainFlowNavigatorProps {}

export type MainFlowParamList = {
  Inbox: undefined;
  Search: undefined;
  Settings: undefined;
  PlusButton: undefined;
};

const Tab = createBottomTabNavigator<MainFlowParamList>();

export const MainFlowNavigator: React.FC<MainFlowNavigatorProps> = () => {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name="Inbox" component={InboxScreen} />
      <Tab.Screen name="Search" component={SearchScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
      <Tab.Screen name="PlusButton" component={TempScreen} />
    </Tab.Navigator>
  );
};
