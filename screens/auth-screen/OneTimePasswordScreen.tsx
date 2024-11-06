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
import { staticColors } from "@/constants/colors";
import { RouteProp } from "@react-navigation/native";

interface OneTimePasswordScreenProps {
  navigation: NativeStackNavigationProp<AuthStackList, "OneTimeCode">;
  route: RouteProp<AuthStackList, "OneTimeCode">;
}

export const OneTimePasswordScreen: React.FC<OneTimePasswordScreenProps> = ({
  navigation,
  route,
}) => {
  const changeAuthState = useAuthStore((state) => state.changeAuthState);
  const { email } = route.params;

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
        <TextContentOTPasswordScreen email={email} />
        <PasscodeInput passcode={passcode} setPasscode={setPasscode} />
        <OTPResendText />
        <CommonButton onPress={onPressSignIn}>
          <Text style={{ color: staticColors.WHITE }}>Sign In</Text>
        </CommonButton>
        <OTPScreenFooter email={email} goBack={goBack} />
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
