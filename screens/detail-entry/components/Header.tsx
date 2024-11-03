import React from "react";
import { View, Text } from "@/components";
import { Pressable, StyleSheet } from "react-native";
import { ArrowGrey } from "@/assets/images/icons";

interface HeaderProps {
  title: string;
  onPressBackButton: () => void;
}

export const Header: React.FC<HeaderProps> = ({ title, onPressBackButton }) => {
  return (
    <View.Row style={styles.container}>
      <Pressable style={styles.backButton} onPress={onPressBackButton}>
        <ArrowGrey height={30} width={30} />
      </Pressable>
      <Text style={styles.titleText}>{title}</Text>
    </View.Row>
  );
};

const styles = StyleSheet.create({
  container: {
    gap: 10,
    alignItems: "center",
    paddingVertical: 15,
  },
  backButton: {
    transform: [{ rotate: "-180deg" }],
  },
  titleText: {
    fontSize: 15,
    fontWeight: "bold",
  },
});
