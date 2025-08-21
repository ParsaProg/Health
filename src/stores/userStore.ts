import { create } from "zustand";

interface langType {
  lang: string;
  setLang: (newFont: string) => void;
}

export const useStore = create<langType>((set) => ({
  lang: "en",
  setLang: (newLang: any) => set({ lang: newLang }),
}));
