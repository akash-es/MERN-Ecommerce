import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./Slice/apiSlice";
import authSlice from "./Slice/authSlice";
import cartsliceReducer from "./Slice/CartSlice"

export const store = configureStore({
    reducer: {
        [apiSlice.reducerPath]: apiSlice.reducer,
        cart:cartsliceReducer,

        auth: authSlice,

    },

    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(apiSlice.middleware),


});