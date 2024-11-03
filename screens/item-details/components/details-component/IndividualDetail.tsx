import React from "react";
import { Pressable, StyleSheet } from "react-native";
import { View, Text } from "@/components";
import { colors } from "@/constants/colors";
import { valueType } from "@/constants/data";
import { ArrowGrey } from "@/assets/images/icons";

interface IndividualDetailProps {
  title: string;
  value: valueType;
  onPressItem: (title: string, value: valueType) => void;
  editable?: boolean;
}

export const IndividualDetail: React.FC<IndividualDetailProps> = ({
  title,
  value,
  onPressItem,
  editable = false,
}) => {
  if (value instanceof Date) {
    value = value.toISOString().split("T")[0];
  } else {
    value = value?.toString();
  }

  return (
    <Pressable
      onPress={() => onPressItem(title, value)}
      disabled={!editable}
      style={({ pressed }) => [
        styles.container,
        pressed && { backgroundColor: colors.LIGHT_GREEN },
      ]}
    >
      {value ? (
        <View>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.value}>{value}</Text>
        </View>
      ) : (
        <Text>{title}</Text>
      )}

      {editable && <ArrowGrey height={25} width={25} />}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    height: 50,
    borderRadius: 10,
  },
  title: {
    fontSize: 12,
    color: colors.GREY,
  },
  value: {
    fontSize: 16,
    color: colors.WHITE,
  },
});
