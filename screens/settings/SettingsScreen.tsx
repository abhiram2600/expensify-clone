import { CustomView } from "@/components/CustomView";
import React from "react";
import { ScrollView } from "react-native";
import { InfoHeader } from "./components/InfoHeader";
import { SettingsSection } from "./components/SettingsSection";
import { HorizontalRule } from "@/components/HorizontalRule";

interface SettingsScreenProps {}

export const SettingsScreen: React.FC<SettingsScreenProps> = () => {
  return (
    <CustomView>
      <InfoHeader />
      <ScrollView showsVerticalScrollIndicator={false}>
        <SettingsSection title="Account" />
        <HorizontalRule />
        <SettingsSection title="Workspaces" />
        <HorizontalRule />
        <SettingsSection title="General" />
      </ScrollView>
    </CustomView>
  );
};
