import { View } from "@/components";
import { RootStackList } from "@/navigation/RootFlowNavigator";
import React from "react";
import { CustomHeader, Details } from "./components";
import { RouteProp, useRoute } from "@react-navigation/native";

type ItemDetailRouteProp = RouteProp<RootStackList, "ItemDetail">;

export const ItemDetailsScreen = () => {
  const route = useRoute<ItemDetailRouteProp>();
  const { id } = route.params;
  return (
    <View.SafeAreaView
      addPaddingHorizontal
      style={{ flex: 1 }} // Temporary fix till chat feature implemented
    >
      <CustomHeader id={id} />
      <Details id={id} />
    </View.SafeAreaView>
  );
};
