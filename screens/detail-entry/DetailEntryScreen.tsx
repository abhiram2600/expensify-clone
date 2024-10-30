import { RootStackList } from "@/navigation/RootFlowNavigator";
import { RouteProp, useRoute } from "@react-navigation/native";
import React, { useState } from "react";
import { Header } from "./components";
import { GenericInput } from "./components/GenericInputComponent";

type DetailEntryRouteProp = RouteProp<RootStackList, "DetailEntry">;

export const DetailEntryScreen = () => {
  const route = useRoute<DetailEntryRouteProp>();

  const { title, value } = route.params;

  const [currentValue, setCurrentValue] = useState(value);
  return (
    <>
      <Header title={title} />
      <GenericInput value={currentValue} onChangeText={setCurrentValue} />
    </>
  );
};
