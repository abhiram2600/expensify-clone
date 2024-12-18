import React from "react";
import { StyleSheet, Image } from "react-native";
import { View, Text } from "@/components";
import { profilePlaceHolder } from "@/assets/images";
import { useThemeStore } from "@/store";

interface InfoHeaderProps {}

export const InfoHeader: React.FC<InfoHeaderProps> = () => {
  const xyz = useThemeStore((state) => state.colors);
  return (
    <View style={styles.container}>
      <View style={styles.infoContainer}>
        <Image source={profilePlaceHolder} style={styles.profilePicture} />
        <View style={styles.nameAndEmail}>
          <Text style={[styles.nameText, { color: xyz.textPrimary }]}>
            Abhi
          </Text>
          <Text style={styles.emailText}>email</Text>
        </View>
      </View>
      <View style={[styles.emojiPicker, { backgroundColor: xyz.COLOR_3 }]} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  infoContainer: {
    flexDirection: "row",
    gap: 10,
  },
  nameAndEmail: {
    justifyContent: "space-around",
  },
  profilePicture: {
    height: 50,
    width: 50,
    borderRadius: 25,
  },
  nameText: {
    fontWeight: "bold",
    fontSize: 16,
  },
  emailText: {
    fontSize: 13,
  },
  emojiPicker: {
    height: 40,
    width: 40,
    borderRadius: 20,
  },
});
