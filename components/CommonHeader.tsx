import { scaleSize } from "@/utils";
import React from "react";
import { StyleSheet } from "react-native";
import { View, Text } from "@/components";

interface CommonHeaderProps {
  screenName: string;
}

export const CommonHeader: React.FC<CommonHeaderProps> = ({ screenName }) => {
  return (
    <View style={styles.container}>
      <View style={styles.logo} />
      <Text variant="bold" style={styles.textStyle}>
        Expensify
      </Text>
      <Text
        variant="regular"
        style={styles.textStyle}
      >{` / ${screenName}`}</Text>
      <View style={styles.search} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
  },
  logo: {
    backgroundColor: "green",
    height: scaleSize(40),
    width: scaleSize(40),
    borderRadius: scaleSize(20),
    marginRight: scaleSize(12),
  },
  search: {
    backgroundColor: "gray",
    height: scaleSize(30),
    width: scaleSize(30),
    marginLeft: "auto",
  },
  textStyle: {
    fontSize: scaleSize(20),
  },
});
