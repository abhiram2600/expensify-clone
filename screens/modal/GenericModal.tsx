import React from "react";
import { View } from "react-native";
import { Text } from "@/components";

interface GenericModalProps {}

export const GenericModal: React.FC<GenericModalProps> = () => {
  return (
    <View>
      <Text>GenericModal Component</Text>
    </View>
  );
};
