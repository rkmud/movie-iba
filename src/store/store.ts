import { configureStore } from "@reduxjs/toolkit";
import { movieApi } from "./movieApi";
import movieSlice from "./movieSlice";
import filterSlice from "./filterSlice";

export const store = configureStore({
    reducer: {
        [movieApi.reducerPath]: movieApi.reducer,
        movie: movieSlice,
        filter: filterSlice
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(movieApi.middleware)
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;