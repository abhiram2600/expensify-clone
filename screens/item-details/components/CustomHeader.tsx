import React from "react";
import { View, Text } from "@/components";
import { StyleSheet, TouchableOpacity } from "react-native";
import { ArrowGrey, Profile } from "@/assets/images/icons";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { RootStackList } from "@/navigation/RootFlowNavigator";
import { staticColors } from "@/constants/colors";

interface CustomHeaderProps {
  id: number;
}

export const CustomHeader: React.FC<CustomHeaderProps> = ({ id }) => {
  const navigation: NavigationProp<RootStackList> = useNavigation();

  const onPress = () => {
    navigation.goBack();
  };
  return (
    <View.Row style={styles.container}>
      <TouchableOpacity style={styles.icon} onPress={onPress}>
        <ArrowGrey height={30} width={30} />
      </TouchableOpacity>
      <Profile height={40} width={40} />
      <View style={styles.text}>
        <Text>Track expense</Text>
        <View.Row>
          <Text>From </Text>

          <TouchableOpacity>
            <Text style={styles.nameText}>Abhiram Kasturi</Text>
          </TouchableOpacity>
        </View.Row>
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
  nameText: {
    color: staticColors.BLUE,
  },
});
