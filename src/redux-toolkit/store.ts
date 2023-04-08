import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query';
import sideNavVisibility from './features/sideNavVisibility';
import { apiSlice } from './api/apiSlice';
import userPageTablePagination from './features/userPageTablePagination';


const rootReducer = combineReducers({
    [apiSlice.reducerPath]: apiSlice.reducer,
    [sideNavVisibility.name]: sideNavVisibility.reducer,
    [userPageTablePagination.name]: userPageTablePagination.reducer
})


export const store = configureStore({
    reducer: rootReducer,
    devTools: true,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(apiSlice.middleware)
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch


setupListeners(store.dispatch)