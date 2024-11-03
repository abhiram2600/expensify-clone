import { RootStackList } from "@/navigation/RootFlowNavigator";
import {
  NavigationProp,
  RouteProp,
  useNavigation,
  useRoute,
} from "@react-navigation/native";
import React, { useState } from "react";
import { Header } from "./components";
import { GenericInput } from "../../components/GenericInputComponent";

import { CommonButton, View, Text } from "@/components";
import { useAppStore } from "@/store/AppStore";
import { StyleSheet } from "react-native";

type DetailEntryRouteProp = RouteProp<RootStackList, "DetailEntry">;

export const DetailEntryScreen = () => {
  const route = useRoute<DetailEntryRouteProp>();

  const navigation: NavigationProp<RootStackList> = useNavigation();

  const { title, value, id } = route.params;

  const [currentValue, setCurrentValue] = useState(value);
  const updateData = useAppStore((state) => state.updateDataUsingId);

  const onPressBackButton = () => {
    navigation.goBack();
  };

  const onPressSaveButton = () => {
    updateData(id, title, currentValue);
    navigation.goBack();
  };

  return (
    <View.SafeAreaView addPaddingHorizontal style={styles.container}>
      <View.HandleKeyboard>
        <Header title={title} onPressBackButton={onPressBackButton} />
        <GenericInput
          value={currentValue as string | number}
          onChangeText={setCurrentValue}
          placeholder={`Enter ${title}`}
        />
        <CommonButton onPress={onPressSaveButton} style={styles.saveButton}>
          <Text>Save</Text>
        </CommonButton>
      </View.HandleKeyboard>
    </View.SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "100%",
  },
  saveButton: {
    marginTop: "auto",
  },
});
