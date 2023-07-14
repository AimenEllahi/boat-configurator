import { create } from "zustand";

const useColorStore = create((set) => ({
  colors: {
    "Primary Fence": "",
    "Secondary Fence": "",
    "Flooring Option": "",
    "Primary Interior Vinyl": "",
    "Secondary Interior Vinyl": "",
    "Console Color": "",
    "Exterior Rail": "",
  },
  activeState: 0,
  setColors: (color) =>
    set((state) => ({
      colors: {
        ...state.colors,
        [color.part]: color.hex,
      },
    })),
  setActiveState: (activeState) =>
    set((state) => ({
      activeState: activeState,
    })),
}));

export default useColorStore;
