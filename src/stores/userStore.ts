import { create } from "zustand";

interface fontType {
  font: string;
  setFont: (newFont: string) => void;
}

export const useStore = create<fontType>((set) => ({
  font: "font-v",
  setFont: (newFont: string) => set({ font: newFont }),
}));
