import { colors } from "@/constants/colors";
import { InboxScreen, SettingsScreen } from "@/screens";
import { TempScreen } from "@/screens/TempScreen";
import { useAppStore } from "@/store/AppStore";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { SearchNavigator } from "./SearchNavigator";
import { View } from "@/components";

export type MainTabParamList = {
  Inbox: undefined;
  SearchNav: undefined;
  Settings: undefined;
  PlusButton: undefined;
};

const Tab = createBottomTabNavigator<MainTabParamList>();

const TabIcon = ({ focused }: { focused: boolean }) => {
  return (
    <View
      style={{
        height: 10,
        width: 10,
        backgroundColor: focused ? "green" : "grey",
      }}
    />
  );
};

export const MainTabNavigator = () => {
  const theme = useAppStore((state) => state.theme);
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: colors[theme].BOLD_TEXT,
        tabBarInactiveTintColor: colors[theme].REGULAR_TEXT,
        tabBarStyle: {
          backgroundColor: colors[theme].BACKGROUND,
          borderTopColor: colors.LIGHT_GREEN,
        },
      }}
    >
      <Tab.Screen
        name="Inbox"
        component={InboxScreen}
        options={{
          tabBarIcon: ({ focused }) => <TabIcon focused={focused} />,
        }}
      />
      <Tab.Screen
        name="SearchNav"
        component={SearchNavigator}
        options={{
          tabBarIcon: ({ focused }) => <TabIcon focused={focused} />,
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          tabBarIcon: ({ focused }) => <TabIcon focused={focused} />,
        }}
      />
      <Tab.Screen name="PlusButton" component={TempScreen} />
    </Tab.Navigator>
  );
};
