import { View } from "@/components";
import React from "react";
import { ScrollView, StyleSheet } from "react-native";
import { InfoHeader } from "./components/InfoHeader";
import { SettingsSection } from "./components/SettingsSection";
import { HorizontalRule } from "@/components/HorizontalRule";

interface SettingsScreenProps {}

export const SettingsScreen: React.FC<SettingsScreenProps> = () => {
  return (
    <View.SafeAreaView addPaddingHorizontal>
      <InfoHeader />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollView}
      >
        <SettingsSection title="Account" />
        <HorizontalRule style={styles.horizontalRuleStyle} />
        <SettingsSection title="Workspaces" />
        <HorizontalRule style={styles.horizontalRuleStyle} />
        <SettingsSection title="General" />
      </ScrollView>
    </View.SafeAreaView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    paddingBottom: 20,
  },
  horizontalRuleStyle: {
    marginTop: 15,
  },
});
