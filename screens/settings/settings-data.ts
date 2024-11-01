import GenericIcon from "@/assets/images/icons/generic-icon.svg";
import { Temp } from "./components/Temp";

export const settingsData = {
  Account: [
    {
      icon: GenericIcon,
      name: "Profile",
      right: null,
    },
    {
      icon: GenericIcon,
      name: "Wallet",
      right: Temp,
    },
    {
      icon: GenericIcon,
      name: "Preferences",
      right: null,
    },
  ],
  Workspaces: [
    {
      icon: GenericIcon,
      name: "Workspaces",
      right: null,
    },
    {
      icon: GenericIcon,
      name: "Subscription",
      right: null,
    },
    {
      icon: GenericIcon,
      name: "Domains",
      right: null,
    },
  ],
  General: [
    {
      icon: GenericIcon,
      name: "Help",
      right: null,
    },
    {
      icon: GenericIcon,
      name: "About",
      right: null,
    },
    {
      icon: GenericIcon,
      name: "Sign out",
      right: null,
    },
  ],
};

export type settingsDataType = typeof settingsData;
