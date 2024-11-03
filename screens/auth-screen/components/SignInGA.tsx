import React from "react";
import { View, Text } from "@/components";
import { StyleSheet, TouchableOpacity } from "react-native";
import { colors } from "@/constants/colors";

interface SignInGAProps {}

const SocialComponent = () => {
  return <TouchableOpacity style={styles.socialButton}></TouchableOpacity>;
};

export const SignInGA: React.FC<SignInGAProps> = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.signInText}>Sign in with</Text>
      <View.Row style={styles.socialsComponent}>
        <SocialComponent />
        <SocialComponent />
      </View.Row>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  signInText: {
    textAlign: "center",
    color: colors.GREY,
    fontSize: 12,
  },
  socialsComponent: {
    marginTop: 15,
    gap: 15,
  },
  socialButton: {
    height: 30,
    width: 30,
    borderRadius: 15,
    backgroundColor: colors.WHITE,
  },
});
