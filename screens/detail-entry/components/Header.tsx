import React from "react";
import { CustomView, Text } from "@/components";
import { Pressable, StyleSheet } from "react-native";

interface HeaderProps {
  title: string;
}

export const Header: React.FC<HeaderProps> = ({ title }) => {
  return (
    <CustomView.Row style={styles.container}>
      <Pressable>
        <Text>{`<`}</Text>
      </Pressable>
      <Text>{title}</Text>
    </CustomView.Row>
  );
};

const styles = StyleSheet.create({
  container: {
    gap: 10,
    alignItems: "center",
  },
});
