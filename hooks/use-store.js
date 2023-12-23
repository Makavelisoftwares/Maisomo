import { create } from "zustand";

export const useModal = create((set) => ({
    type: null,
    data: {},
    isOpen: false,
    onOpen: (type) => set({ isOpen: true, type }),
    onClose: () => set({ type: null, isOpen: false }),
  }));
