import { StatusBarStyle } from "expo-status-bar";

export const staticColors = {
  WHITE: "#FFFFFF",
  GREY: "#808080",
  BLACK: "#000000",
  BLUE: "#5AB0FF",
  GREEN: "#03D47C",
};

export const themeColors = {
  LIGHT: {
    background: "#FCFBF9",
    textPrimary: staticColors.BLACK,
    textSecondary: staticColors.GREY,
    COLOR_1: "#F8F4F0",
    COLOR_2: "#F2EDE7",
    COLOR_3: "#E6E1DA",
    statusBar: "dark" as StatusBarStyle,
    invertedColor: staticColors.WHITE,
  },
  DARK: {
    background: "#061B09",
    textPrimary: staticColors.WHITE,
    textSecondary: staticColors.GREY,
    COLOR_1: "#072419",
    COLOR_2: "#0A2E25",
    COLOR_3: "#1A3D32",
    statusBar: "light" as StatusBarStyle,
    invertedColor: staticColors.WHITE,
  },
};
