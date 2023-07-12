import { create } from "zustand";

const useColorStore = create((set) => ({
  colors: {
    "Primary Fence": "white",
    "Secondary Fence": "white",
    "Flooring Option": "white",
    "Primary Interior Vinyl": "white",
    "Secondary Interior Vinyl": "white",
    "Console Color": "white",
  },
  setColor: (color) =>
    set((state) => ({
      ...state.colors,
      [color.part]: color.hex,
    })),
}));

export default useColorStore;
