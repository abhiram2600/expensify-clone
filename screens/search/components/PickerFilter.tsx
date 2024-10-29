import { Text } from "@/components/Text";
import { colors } from "@/constants/colors";
import React from "react";
import { View, StyleSheet, Pressable, TouchableOpacity } from "react-native";

interface PickerFilterProps {}

export const PickerFilter: React.FC<PickerFilterProps> = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.typePicker}>
        <Text variant="bold">{`Expenses >`}</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.filterButton}>
        <Text variant="bold">S</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
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
});
