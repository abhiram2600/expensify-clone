import { View, Text } from "@/components";
import { colors } from "@/constants/colors";
import { modalTypeState, useAppStore } from "@/store/AppStore";
import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { ArrowGrey, FilterIcon, GenericDocument } from "@/assets/images/icons";

interface PickerFilterProps {}

export const PickerFilter: React.FC<PickerFilterProps> = () => {
  const changeModalState = useAppStore((state) => state.changeModalState);

  const onPress = () => {
    changeModalState({ isVisible: true, type: modalTypeState.SEARCH });
  };

  return (
    <View.Row style={styles.container}>
      <TouchableOpacity style={styles.typePicker} onPress={onPress}>
        <GenericDocument height={20} width={20} style={styles.document} />
        <Text variant="bold" style={styles.buttonTitle}>{`Expenses`}</Text>
        <ArrowGrey height={25} width={25} style={styles.arrow} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.filterButton}>
        <FilterIcon height={20} width={20} />
      </TouchableOpacity>
    </View.Row>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    marginBottom: 15,
  },
  typePicker: {
    flex: 1,
    height: 40,
    backgroundColor: colors.LIGHT_GREEN,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  filterButton: {
    marginLeft: 10,
    height: 40,
    width: 40,
    backgroundColor: colors.LIGHT_GREEN,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  arrow: {
    transform: [{ rotate: "90deg" }],
    marginLeft: 3,
  },
  document: {
    marginRight: 10,
  },
  buttonTitle: {
    fontSize: 12,
  },
});
