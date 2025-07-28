import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { useAppSelector, useAppDispatch } from '~state/storeHooks';

export type SearchState = {
    searchTerm: string;
};

const initialState: SearchState = {
    searchTerm: ''
};

export const searchFeatureSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        itemSearched: (state, { payload }: PayloadAction<string>) => {
            state.searchTerm = payload;
        }
    }
});

// Action creators are generated for each case reducer function
export const { setItemSearched } = searchFeatureSlice.actions;

// Custom hooks for accessing and dispatching states while using the typed selector/dispatch

export const useSearchTerm = (): [string, (searchTerm: string) => PayloadAction<string>] => {
    const dispatch = useAppDispatch();
    const searchTerm = useAppSelector((state) => state.searchFeature.searchTerm);
    const dispatchItemSearched = (searchTerm: string): PayloadAction<string> => dispatch(setItemSearched(searchTerm));
    return [searchTerm, dispatchItemSearched];
};