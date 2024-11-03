import React from "react";
import { Text, View } from "@/components";
import { StyleSheet, TouchableOpacity } from "react-native";
import { colors } from "@/constants/colors";

export const ExpensifyTitle = () => {
  return <Text style={styles.titleText}>Expensify</Text>;
};

export const TextContentEPScreen = () => {
  return (
    <>
      <ExpensifyTitle />
      <Text style={styles.captionText}>
        Manage spend, split expenses, and chat with your team.
      </Text>
      <Text style={styles.getStartedText}>Get started below.</Text>
    </>
  );
};

export const TextContentOTPasswordScreen = ({ email }: { email: string }) => {
  return (
    <Text
      style={styles.otpText}
    >{`Welcome! Please enter the magic code sent to ${email}. It should arrive within a minute or two.`}</Text>
  );
};

export const OTPResendText = () => {
  return (
    <Text style={[styles.blueText, styles.resendText]}>
      Didn't receive a magic code?
    </Text>
  );
};

export const OTPScreenFooter = ({
  email,
  goBack,
}: {
  email: string;
  goBack: () => void;
}) => {
  return (
    <>
      <View.Row style={{ marginVertical: 20 }}>
        <Text style={styles.goBackText}>{`Not ${email}?`}</Text>
        <TouchableOpacity onPress={goBack}>
          <Text style={styles.blueText}> Go Back</Text>
        </TouchableOpacity>
      </View.Row>
      <Text style={styles.tAndCText}>
        By logging in, you agree to the{" "}
        <Text style={styles.blueText}>Terms of Service</Text> and{" "}
        <Text style={styles.blueText}>Privacy.</Text>
      </Text>
    </>
  );
};

const styles = StyleSheet.create({
  titleText: {
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "center",
    color: colors.GREEN,
    marginBottom: 35,
  },
  captionText: {
    fontSize: 25,
    textAlign: "center",
    color: colors.GREEN,
    marginBottom: 20,
  },
  getStartedText: {
    textAlign: "center",
    color: colors.WHITE,
    fontSize: 15,
    marginBottom: 40,
  },
  resendText: {
    fontSize: 15,
    marginTop: 15,
    marginBottom: 25,
  },
  otpText: {
    fontSize: 15,
    textAlign: "center",
  },
  goBackText: {
    fontSize: 15,
    justifyContent: "center",
  },
  tAndCText: {
    fontSize: 11,
  },
  blueText: {
    color: colors.BLUE,
  },
});
