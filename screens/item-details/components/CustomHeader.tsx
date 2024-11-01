import React from "react";
import { CustomView, Text } from "@/components";
import GenericProfile from "@/assets/images/icons/generic-profile.svg";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { ArrowGrey } from "@/assets/images/icons";

interface CustomHeaderProps {}

export const CustomHeader: React.FC<CustomHeaderProps> = () => {
  const onPress = () => {};
  return (
    <CustomView.Row style={styles.container}>
      <TouchableOpacity style={styles.icon}>
        <ArrowGrey height={30} width={30} />
      </TouchableOpacity>
      <GenericProfile height={50} width={50} />
      <View style={styles.text}>
        <Text>tracking for xyz for xyz</Text>
        <Text>From axyz</Text>
      </View>
    </CustomView.Row>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    borderColor: "grey",
  },
  icon: {
    transform: [{ rotate: "180deg" }],
  },
  text: {
    marginLeft: 10,
  },
});
