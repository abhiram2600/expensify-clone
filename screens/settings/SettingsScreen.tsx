import { View } from "@/components";
import React from "react";
import { ScrollView } from "react-native";
import { InfoHeader } from "./components/InfoHeader";
import { SettingsSection } from "./components/SettingsSection";
import { HorizontalRule } from "@/components/HorizontalRule";

interface SettingsScreenProps {}

export const SettingsScreen: React.FC<SettingsScreenProps> = () => {
  return (
    <View.SafeAreaView>
      <InfoHeader />
      <ScrollView showsVerticalScrollIndicator={false}>
        <SettingsSection title="Account" />
        <HorizontalRule />
        <SettingsSection title="Workspaces" />
        <HorizontalRule />
        <SettingsSection title="General" />
      </ScrollView>
    </View.SafeAreaView>
  );
};
