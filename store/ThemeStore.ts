import { staticColors, themeColors } from "@/constants/colors";
import { create } from "zustand";

type ThemeMode = "LIGHT" | "DARK";

interface ThemeState {
  themeMode: ThemeMode;
  colors: (typeof themeColors)[ThemeMode] & typeof staticColors;
  toggleTheme: () => void;
}

export const useThemeStore = create<ThemeState>((set, get) => ({
  themeMode: "DARK",
  colors: {
    ...staticColors,
    ...themeColors["DARK"],
  },
  toggleTheme: () =>
    set((state) => {
      const newThemeMode = state.themeMode === "DARK" ? "LIGHT" : "DARK";
      return {
        themeMode: newThemeMode,
        colors: {
          ...staticColors,
          ...themeColors[newThemeMode],
        },
      };
    }),
}));
