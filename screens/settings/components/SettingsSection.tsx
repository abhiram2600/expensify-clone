import { Text } from "@/components/Text";
import React from "react";
import { StyleSheet, View, Pressable } from "react-native";
import { settingsData, settingsDataType } from "../settings-data";
import { colors } from "@/constants/colors";
import { scaleSize } from "@/utils";

interface SettingsSectionProps {
  title: keyof settingsDataType;
}

interface IndividualItemProps {
  item: settingsDataType[keyof settingsDataType][number];
}

const IndividualItem: React.FC<IndividualItemProps> = ({ item }) => {
  return (
    <Pressable
      style={({ pressed }) => [
        pressed
          ? { backgroundColor: "#1A3D32", borderRadius: scaleSize(10) }
          : {},
        styles.itemContainer,
      ]}
    >
      <View style={styles.information}>
        <item.icon height={25} width={25} />
        <Text variant="bold">{item.name}</Text>
      </View>
      {item.right && <item.right />}
    </Pressable>
  );
};

export const SettingsSection: React.FC<SettingsSectionProps> = ({ title }) => {
  return (
    <>
      <Text variant="regular" style={styles.titleText}>
        {title}
      </Text>
      {settingsData[title].map((item) => (
        <IndividualItem item={item} key={`${title}+${item.name}`} />
      ))}
    </>
  );
};

const styles = StyleSheet.create({
  titleText: {
    marginVertical: scaleSize(20),
  },
  itemContainer: {
    paddingHorizontal: scaleSize(10),
    paddingVertical: scaleSize(20),
    flexDirection: "row",
    justifyContent: "space-between",
  },
  information: {
    flexDirection: "row",
    alignItems: "center",
    gap: scaleSize(15),
  },
});
