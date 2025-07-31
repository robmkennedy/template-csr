import { create } from 'zustand';
import { createAppSlice, type AppSlice } from '~app/state/appSlice';
import { createSearchSlice, type SearchSlice } from '~features/search/state/searchSlice';

// Build an overall Store type
type GlobalStore = AppSlice & SearchSlice;

// Actually create the store from multiple slices
export const useGlobalStore = create<GlobalStore>()((...args) => ({
    ...createAppSlice(...args),
    ...createSearchSlice(...args)
}));
