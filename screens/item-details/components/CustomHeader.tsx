import React from "react";
import { CustomView, Text } from "@/components";
import GenericProfile from "@/assets/images/icons/generic-profile.svg";
import { TouchableOpacity, View } from "react-native";

interface CustomHeaderProps {}

export const CustomHeader: React.FC<CustomHeaderProps> = () => {
  const onPress = () => {};
  return (
    <CustomView.Row>
      <TouchableOpacity>
        <Text>{`<`}</Text>
      </TouchableOpacity>
      <GenericProfile height={50} width={50} />
      <View>
        <Text>tracking for xyz for xyz</Text>
        <Text>From axyz</Text>
      </View>
    </CustomView.Row>
  );
};
