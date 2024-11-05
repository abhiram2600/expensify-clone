import { View, Text } from "@/components";
import { modalTypeState, useAppStore } from "@/store/AppStore";
import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { ArrowGrey, FilterIcon, Receipt } from "@/assets/images/icons";
import { useThemeStore } from "@/store";

interface PickerFilterProps {}

export const PickerFilter: React.FC<PickerFilterProps> = () => {
  const changeModalState = useAppStore((state) => state.changeModalState);
  const colors = useThemeStore((state) => state.colors);

  const onPress = () => {
    changeModalState({ isVisible: true, type: modalTypeState.PICKERFILTER });
  };

  return (
    <View.Row style={styles.container} addPaddingHorizontal>
      <TouchableOpacity
        style={[
          styles.typePicker,
          {
            backgroundColor: colors.COLOR_1,
          },
        ]}
        onPress={onPress}
      >
        <Receipt
          height={17}
          width={20}
          style={styles.document}
          fill={colors.GREY}
        />
        <Text variant="bold" style={styles.buttonTitle}>{`Expenses`}</Text>
        <ArrowGrey height={25} width={25} style={styles.arrow} />
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          styles.filterButton,
          {
            backgroundColor: colors.COLOR_1,
          },
        ]}
      >
        <FilterIcon height={20} width={20} />
      </TouchableOpacity>
    </View.Row>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
  typePicker: {
    flex: 1,
    height: 40,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  filterButton: {
    marginLeft: 10,
    height: 40,
    width: 40,
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
