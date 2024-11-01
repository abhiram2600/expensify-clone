import React from "react";
import { Pressable, StyleSheet } from "react-native";
import { View, Text } from "@/components";
import { colors } from "@/constants/colors";
import { valueType } from "@/constants/data";

interface IndividualDetailProps {
  title: string;
  value: valueType;
  onPressItem: (title: string, value: valueType) => void;
}

export const IndividualDetail: React.FC<IndividualDetailProps> = ({
  title,
  value,
  onPressItem,
}) => {
  if (value instanceof Date) {
    value = value.toISOString().split("T")[0];
  } else {
    value = value?.toString();
  }

  return (
    <Pressable
      onPress={() => onPressItem(title, value)}
      style={({ pressed }) => [
        styles.container,
        pressed && { backgroundColor: colors.LIGHT_GREEN },
      ]}
    >
      {value ? (
        <View>
          <Text>{title}</Text>
          <Text>{value}</Text>
        </View>
      ) : (
        <Text>{title}</Text>
      )}

      <Text>{`>`}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 5,
    padding: 10,
    height: 50,
    borderRadius: 10,
  },
});
