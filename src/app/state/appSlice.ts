import type { StateCreator } from 'zustand/vanilla';

export type AppSlice = {
    navbarOpened: boolean;
    toggleNavbarOpened: () => void;
};

export const createAppSlice: StateCreator<AppSlice, [], [], AppSlice> = (set) => ({
    navbarOpened: false,
    toggleNavbarOpened: () => set((state) => ({ navbarOpened: !state.navbarOpened }))
});