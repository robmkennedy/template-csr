import { configureStore } from '@reduxjs/toolkit';
import { searchApiSlice } from '~features/search/slices/searchApiSlice';
import { searchFeatureSlice } from '~features/search/slices/searchFeatureSlice';

const rootReducer = {
    searchApi: searchApiSlice.reducer,
    searchFeature: searchFeatureSlice.reducer
};

/**
 * Set up the redux store. This automatically sets up the redux thunk middleware. We also add
 * the middleware for the search API and querying the pages.
 */
const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([searchApiSlice.middleware])
});

// Infer the `RootState` and `AppDispatch` types from the store itself
// Inferred RootState type is based on root reducer
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
