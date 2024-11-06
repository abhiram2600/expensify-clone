import { Temp } from "./components/Temp";
import { settingsFunctions } from "./settings-functions";
import { GenericIcon, SettingsIcon, SignOutIcon } from "@/assets/images/icons";

export const settingsData = {
  Account: [
    {
      icon: GenericIcon,
      name: "Profile",
      right: null,
      onPress: settingsFunctions.About,
    },
    {
      icon: GenericIcon,
      name: "Wallet",
      right: Temp,
      onPress: settingsFunctions.Wallet,
    },
    {
      icon: SettingsIcon,
      name: "Preferences",
      right: null,
      onPress: settingsFunctions.Preferences,
    },
  ],
  Workspaces: [
    {
      icon: GenericIcon,
      name: "Workspaces",
      right: null,
      onPress: settingsFunctions.Workspaces,
    },
    {
      icon: GenericIcon,
      name: "Subscription",
      right: null,
      onPress: settingsFunctions.Subscription,
    },
    {
      icon: GenericIcon,
      name: "Domains",
      right: null,
      onPress: settingsFunctions.Domains,
    },
  ],
  General: [
    {
      icon: GenericIcon,
      name: "Help",
      right: null,
      onPress: settingsFunctions.Help,
    },
    {
      icon: GenericIcon,
      name: "About",
      right: null,
      onPress: settingsFunctions.About,
    },
    {
      icon: SignOutIcon,
      name: "Sign out",
      right: null,
      onPress: settingsFunctions.Sign_Out,
    },
  ],
};

export type settingsDataType = typeof settingsData;
