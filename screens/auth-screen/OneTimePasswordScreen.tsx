import React, { useState } from "react";
import { CommonButton, Text, View } from "@/components";
import { StyleSheet } from "react-native";
import {
  ExpensifyTitle,
  OTPResendText,
  OTPScreenFooter,
  TextContentOTPasswordScreen,
} from "./components/TextContent";
import { PasscodeInput } from "./components/PasscodeInput";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { AuthStackList } from "@/navigation/AuthFlowNavigator";
import { useAuthStore } from "@/store/AuthStore";

interface OneTimePasswordScreenProps {
  navigation: NativeStackNavigationProp<AuthStackList, "OneTimeCode">;
}

export const OneTimePasswordScreen: React.FC<OneTimePasswordScreenProps> = ({
  navigation,
}) => {
  const changeAuthState = useAuthStore((state) => state.changeAuthState);
  const [passcode, setPasscode] = useState(["", "", "", "", "", ""]);

  const goBack = () => {
    navigation.goBack();
  };

  const onPressSignIn = () => {
    if (passcode.join("").length === 6) {
      // Do backend check
      changeAuthState({ authToken: "authorized" });
    }
  };

  return (
    <View.SafeAreaView style={styles.container}>
      <View.HandleKeyboard>
        <ExpensifyTitle />
        <TextContentOTPasswordScreen email="a@a.com" />
        <PasscodeInput passcode={passcode} setPasscode={setPasscode} />
        <OTPResendText />
        <CommonButton onPress={onPressSignIn}>
          <Text>Sign In</Text>
        </CommonButton>
        <OTPScreenFooter email="a@a.com" goBack={goBack} />
      </View.HandleKeyboard>
    </View.SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 35,
    paddingHorizontal: 35,
  },
});
