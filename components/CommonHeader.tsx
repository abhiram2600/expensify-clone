import React from "react";
import { Image, StyleSheet } from "react-native";
import { Text } from "./CustomText";
import { View } from "./CustomView";
import { SearchIcon } from "@/assets/images/icons";

interface CommonHeaderProps {
  screenName: string;
}

export const CommonHeader: React.FC<CommonHeaderProps> = ({ screenName }) => {
  return (
    <View style={styles.container} addPaddingHorizontal>
      <Image
        style={styles.logo}
        source={require("@/assets/images/expensify-logo.png")}
      />
      <Text variant="bold" style={styles.textStyle}>
        Expensify
      </Text>
      <Text
        variant="regular"
        style={styles.textStyle}
      >{` / ${screenName}`}</Text>
      <SearchIcon height={30} width={30} style={styles.search} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
  },
  logo: {
    height: 40,
    width: 40,
    borderRadius: 20,
    marginRight: 12,
  },
  search: {
    marginLeft: "auto",
  },
  textStyle: {
    fontSize: 20,
  },
});
