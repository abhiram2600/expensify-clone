import React, { useState } from "react";
import { View, CommonButton, Text } from "@/components";
import { StyleSheet, TextInput } from "react-native";
import { TextContentEPScreen } from "./components/TextContent";
import { SignInGA } from "./components/SignInGA";
import { AuthStackList } from "@/navigation/AuthFlowNavigator";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { useThemeStore } from "@/store";
import { staticColors } from "@/constants/colors";

const isValidEmail = (email: string): boolean => {
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailPattern.test(email);
};

export const EmailPhoneScreen = () => {
  const colors = useThemeStore((state) => state.colors);

  const navigation: NavigationProp<AuthStackList> = useNavigation();
  const [email, setEmail] = useState("");
  const onPress = () => {
    if (isValidEmail(email)) {
      navigation.navigate("OneTimeCode", {
        email: email,
      });
    }
  };
  return (
    <View.SafeAreaView style={styles.container}>
      <View.HandleKeyboard>
        <TextContentEPScreen />
        <TextInput
          value={email}
          onChangeText={(value) => setEmail(value)}
          placeholder="Phone or email"
          style={[
            styles.textInput,
            {
              borderColor: colors.COLOR_3,
              color: colors.WHITE,
            },
          ]}
          keyboardType="email-address"
          autoCapitalize="none"
        />
        <CommonButton onPress={onPress}>
          <Text style={styles.buttonText}>Continue</Text>
        </CommonButton>
        <SignInGA />
      </View.HandleKeyboard>
    </View.SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 35,
    paddingHorizontal: 35,
  },
  textInput: {
    width: "100%",
    borderBottomWidth: 1.5,
    height: 40,
    marginBottom: 20,
  },
  buttonText: {
    color: staticColors.WHITE,
  },
});
