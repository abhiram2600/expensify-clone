import { RootStackList } from "@/navigation/RootFlowNavigator";
import {
  NavigationProp,
  RouteProp,
  useNavigation,
  useRoute,
} from "@react-navigation/native";
import React, { useState } from "react";
import { Header } from "./components";
import { GenericInput } from "./components/GenericInputComponent";
import { Button } from "react-native";
import { View } from "@/components";
import { useAppStore } from "@/store/AppStore";

type DetailEntryRouteProp = RouteProp<RootStackList, "DetailEntry">;

export const DetailEntryScreen = () => {
  const route = useRoute<DetailEntryRouteProp>();

  const navigation: NavigationProp<RootStackList> = useNavigation();

  const { title, value, id } = route.params;

  const [currentValue, setCurrentValue] = useState(value);
  const updateData = useAppStore((state) => state.updateDataUsingId);
  return (
    <View.SafeAreaView>
      <Header title={title} />
      <GenericInput
        value={currentValue as string}
        onChangeText={setCurrentValue}
      />
      <Button
        title="submit"
        onPress={(e) => {
          updateData(id, title, currentValue);
          navigation.goBack();
        }}
      />
    </View.SafeAreaView>
  );
};
