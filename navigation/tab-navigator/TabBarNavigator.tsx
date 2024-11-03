import { InboxScreen, SettingsScreen } from "@/screens";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { SearchNavigator } from "../SearchNavigator";

import { TabBarComponent } from "./TabBarComponent";

export type MainTabParamList = {
  Inbox: undefined;
  SearchNav: undefined;
  Settings: undefined;
  PlusButton: undefined;
};

const Tab = createBottomTabNavigator<MainTabParamList>();

export const MainTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}
      tabBar={(props) => <TabBarComponent {...props} />}
      initialRouteName={"SearchNav"}
    >
      <Tab.Screen
        name="Inbox"
        component={InboxScreen}
        options={{ title: "Inbox" }}
      />
      <Tab.Screen
        name="SearchNav"
        component={SearchNavigator}
        options={{ title: "Search" }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{ title: "Settings" }}
      />
    </Tab.Navigator>
  );
};
