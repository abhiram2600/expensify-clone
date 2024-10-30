import { ledgerItemType, doNotUseItDirectlyData } from "@/constants/data";
import { create } from "zustand";

interface ThemeState {
  theme: "LIGHT" | "DARK";
  toggleTheme: () => void;
}

interface DataState {
  data: ledgerItemType[];
  setData: (newData: ledgerItemType[]) => void;
}

type AppState = ThemeState & DataState;

export const useAppStore = create<AppState>((set) => ({
  theme: "DARK",
  toggleTheme: () =>
    set((state) => ({
      theme: state.theme === "DARK" ? "LIGHT" : "DARK",
    })),

  data: doNotUseItDirectlyData,
  setData: (newData) => set({ data: newData }),
}));
