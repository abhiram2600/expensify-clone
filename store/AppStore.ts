import {
  ledgerItemType,
  doNotUseItDirectlyData,
  valueType,
} from "@/constants/data";
import { create } from "zustand";

const updateExistingData = (
  prevData: ledgerItemType[],
  id: number,
  title: string,
  value: valueType
) => {
  const updatedData = prevData.map((item) => {
    if (item.id === id) {
      title = title.toLowerCase();
      const newItem = { ...item, [title]: value };
      return newItem;
    }
    return item;
  });
  return updatedData;
};

interface ThemeState {
  theme: "LIGHT" | "DARK";
  toggleTheme: () => void;
}

interface DataState {
  data: ledgerItemType[];
  updateDataUsingId: (id: number, title: string, value: valueType) => void;
}

type AppState = ThemeState & DataState;

export const useAppStore = create<AppState>((set) => ({
  theme: "DARK",
  toggleTheme: () =>
    set((state) => ({
      theme: state.theme === "DARK" ? "LIGHT" : "DARK",
    })),

  data: doNotUseItDirectlyData,
  updateDataUsingId: (id, title, value) =>
    set((state) => {
      const updatedData = updateExistingData(state.data, id, title, value);
      return { data: updatedData };
    }),
}));
