import React, { useState } from "react";
import { Pressable, StyleSheet, View } from "react-native";
import { CustomView, Text } from "@/components";
import { colors } from "@/constants/colors";

interface IndividualDetailProps {
  title: string;
  value: string | number | Date | undefined;
}

export const IndividualDetail: React.FC<IndividualDetailProps> = ({
  title,
  value,
}) => {
  if (value instanceof Date) {
    value = value.toISOString().split("T")[0];
  } else {
    value = value?.toString();
  }
  const [currentValue, setCurrentValue] = useState(value);

  return (
    <Pressable
      onPress={() => {}}
      style={({ pressed }) => [
        styles.container,
        pressed && { backgroundColor: colors.LIGHT_GREEN },
      ]}
    >
      {value ? (
        <View>
          <Text>{title}</Text>
          <Text>{currentValue}</Text>
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
