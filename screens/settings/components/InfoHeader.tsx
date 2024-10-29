import React from "react";
import { View, StyleSheet } from "react-native";
import { Text } from "@/components/Text";

interface InfoHeaderProps {}

export const InfoHeader: React.FC<InfoHeaderProps> = () => {
  return (
    <View style={styles.container}>
      <View style={styles.infoContainer}>
        <View style={styles.tcolor} />
        <View style={styles.nameAndEmail}>
          <Text variant="bold">name</Text>
          <Text variant="regular">email</Text>
        </View>
      </View>
      <View style={styles.tcolor} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  infoContainer: {
    flexDirection: "row",
    gap: 10,
  },
  nameAndEmail: {
    justifyContent: "space-around",
  },
  tcolor: {
    backgroundColor: "red",
    height: 50,
    width: 50,
  },
});
