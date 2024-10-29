import { CustomView, Text } from "@/components";
import { RootStackList } from "@/navigation/RootFlowNavigator";
import React from "react";
import { View } from "react-native";
import { CustomHeader, Details } from "./components";
interface ItemDetailsScreenProps {}

export const ItemDetailsScreen: React.FC<ItemDetailsScreenProps> = ({}) => {
  return (
    <CustomView>
      <CustomHeader />
      <Details />
    </CustomView>
  );
};
