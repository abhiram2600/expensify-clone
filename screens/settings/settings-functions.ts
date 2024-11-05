import { useAuthStore, useThemeStore } from "@/store";

export const settingsFunctions = {
  Profile: () => null,
  Wallet: () => null,
  Preferences: () => useThemeStore.getState().toggleTheme(),
  Workspaces: () => null,
  Subscription: () => null,
  Domains: () => null,
  Help: () => null,
  About: () => null,
  Sign_Out: () => useAuthStore.getState().logOut(),
};
