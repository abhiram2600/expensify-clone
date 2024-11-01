import React from "react";
import { View, Text } from "@/components";
import { Pressable, StyleSheet } from "react-native";

interface HeaderProps {
  title: string;
}

export const Header: React.FC<HeaderProps> = ({ title }) => {
  return (
    <View.Row style={styles.container}>
      <Pressable>
        <Text>{`<`}</Text>
      </Pressable>
      <Text>{title}</Text>
    </View.Row>
  );
};

const styles = StyleSheet.create({
  container: {
    gap: 10,
    alignItems: "center",
  },
});
