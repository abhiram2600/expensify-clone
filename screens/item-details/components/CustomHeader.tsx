import React from "react";
import { View, Text } from "@/components";
import { StyleSheet, TouchableOpacity } from "react-native";
import { ArrowGrey, Profile } from "@/assets/images/icons";

interface CustomHeaderProps {}

export const CustomHeader: React.FC<CustomHeaderProps> = () => {
  const onPress = () => {};
  return (
    <View.Row style={styles.container}>
      <TouchableOpacity style={styles.icon}>
        <ArrowGrey height={30} width={30} />
      </TouchableOpacity>
      <Profile height={50} width={50} />
      <View style={styles.text}>
        <Text>tracking for xyz for xyz</Text>
        <Text>From axyz</Text>
      </View>
    </View.Row>
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
