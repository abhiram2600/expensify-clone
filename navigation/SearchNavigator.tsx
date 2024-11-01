import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SearchScreen } from "@/screens";

export type SearchParamList = {
  Search: undefined;
  ItemDetails: undefined;
};

const Stack = createNativeStackNavigator<SearchParamList>();

export const SearchNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Search" component={SearchScreen} />
    </Stack.Navigator>
  );
};
