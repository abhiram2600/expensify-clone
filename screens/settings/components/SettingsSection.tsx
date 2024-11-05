import { Text } from "@/components/CustomText";
import React from "react";
import { StyleSheet, View, Pressable } from "react-native";
import { settingsData, settingsDataType } from "../settings-data";
import { useThemeStore } from "@/store";

interface SettingsSectionProps {
  title: keyof settingsDataType;
}

interface IndividualItemProps {
  item: settingsDataType[keyof settingsDataType][number];
}

const IndividualItem: React.FC<IndividualItemProps> = ({ item }) => {
  const colors = useThemeStore((state) => state.colors);
  return (
    <Pressable
      style={({ pressed }) => [
        styles.itemContainer,
        pressed && { backgroundColor: colors.COLOR_3, borderRadius: 10 },
      ]}
      onPress={item.onPress}
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
    marginTop: 25,
  },
  itemContainer: {
    paddingHorizontal: 10,
    paddingVertical: 15,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  information: {
    flexDirection: "row",
    alignItems: "center",
    gap: 15,
  },
});
