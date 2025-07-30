import { create } from 'zustand';
import { createSearchSlice, type SearchSlice } from '~features/search/state/searchSlice';
import type { StateCreator } from 'zustand/vanilla';

// Build an overall Store type
type GlobalStore = SearchSlice;

// export const createSearchSlice: StateCreator<SearchSlice, [], [], SearchSlice> = (set) => ({
//     searchTerm: '',
//     setSearchTerm: (searchTerm) => set(() => ({ searchTerm: searchTerm }))
// });

// Actually create the store from multiple slices
export const useGlobalStore = create<GlobalStore>()((...args) => ({
    ...createSearchSlice(...args)
}));
