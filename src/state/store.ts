import { create } from 'zustand';
import { createAppSlice, type AppSlice } from '~app/state/appSlice';
import { createAboutSlice, type AboutSlice } from '~features/about/state/aboutSlice';
import { createSearchSlice, type SearchSlice } from '~features/search/state/searchSlice';

// Build an overall Store type
type GlobalStore = AppSlice & AboutSlice & SearchSlice;

// Actually create the store from multiple slices
export const useGlobalStore = create<GlobalStore>()((...args) => ({
    ...createAppSlice(...args),
    ...createAboutSlice(...args),
    ...createSearchSlice(...args)
}));
