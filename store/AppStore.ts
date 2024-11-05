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

interface DataState {
  data: ledgerItemType[];
  updateDataUsingId: (id: number, title: string, value: valueType) => void;
}

export enum modalTypeState {
  PLUSBUTTON,
  PICKERFILTER,
  NONE,
}

interface ModalType {
  isVisible: boolean;
  type: modalTypeState;
}

interface ModalState {
  modalState: ModalType;
  changeModalState: ({}: ModalType) => void;
}

type AppState = DataState & ModalState;

export const useAppStore = create<AppState>((set) => ({
  data: doNotUseItDirectlyData,
  updateDataUsingId: (id, title, value) =>
    set((state) => {
      const updatedData = updateExistingData(state.data, id, title, value);
      return { data: updatedData };
    }),

  modalState: {
    isVisible: false,
    type: modalTypeState.NONE,
  },
  changeModalState: (newModalState) =>
    set(() => ({ modalState: newModalState })),
}));
