import React from "react";
import { View, Text } from "@/components";
import { StyleSheet, TouchableOpacity } from "react-native";
import { staticColors } from "@/constants/colors";
import { AppleLogo, GoogleLogo } from "@/assets/images/icons";

interface SignInGAProps {}

const SocialComponent = ({ children }: { children: React.ReactNode }) => {
  return (
    <TouchableOpacity style={styles.socialButton}>{children}</TouchableOpacity>
  );
};

export const SignInGA: React.FC<SignInGAProps> = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.signInText}>Sign in with</Text>
      <View.Row style={styles.socialsComponent}>
        <SocialComponent>
          <GoogleLogo height={30} width={30} />
        </SocialComponent>
        <SocialComponent>
          <AppleLogo height={30} width={30} />
        </SocialComponent>
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
    color: staticColors.GREY,
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
    backgroundColor: staticColors.WHITE,
  },
});
